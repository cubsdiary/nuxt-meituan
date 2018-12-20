const mongoose = require('mongoose')
const ipConfig = require('../dbs/config')
const axios = require('../util/axios')
const Menu = require('../dbs/schema/menu')

exports.getIp = async (ctx, next) => {
  let userIp =
    ctx.req.headers['x-forwarded-for'] ||
    ctx.req.connection.remoteAddress ||
    ctx.req.socket.remoteAddress ||
    ctx.req.connection.socket.remoteAddress
  if (userIp === '127.0.0.1') {
    userIp = '220.181.132.199'
  }
  let {
    data: { data, ret, msg }
  } = await axios({
    method: 'get',
    url: 'http://api01.aliyun.venuscn.com/ip?ip=' + userIp,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `APPCODE ${ipConfig.ipSearch.AppCode}`
    }
  })
  if (ret === 200) {
    ctx.body = {
      data,
      ret,
      msg
    }
  } else {
    ctx.body = {
      data: {},
      ret: -1,
      msg: '网络错误'
    }
  }
}

exports.getMenu = async (ctx, next) => {
  const { menu } = await Menu.findOne({})
  ctx.body = {
    status: 200,
    menu
  }
}
