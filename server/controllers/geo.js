const mongoose = require('mongoose')
const ipConfig = require('../dbs/config')
const axios = require('../util/axios')
const Menu = require('../dbs/schema/menu')
const City = require('../dbs/schema/city')
const Province = require('../dbs/schema/province')

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

exports.getProvince = async (ctx, next) => {
  const province = await Province.find({})
  ctx.body = {
    status: 200,
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      }
    })
  }
}

exports.getProvinceId = async (ctx, next) => {
  const city = await City.findOne({ id: ctx.params.id })
  ctx.body = {
    status: 200,
    city: city.value.map(item => {
      return {
        province: item.province,
        name: item.name,
        id: item.id
      }
    })
  }
}

exports.getHotCity = async (ctx, next) => {
  let list = [
    '北京市',
    '上海市',
    '广州市',
    '深圳市',
    '天津市',
    '西安市',
    '杭州市',
    '南京市',
    '武汉市',
    '成都市'
  ]
  const city = await City.find({})
  let nList = []
  city.forEach(item => {
    nList = nList.concat(
      item.value.filter(
        key => list.includes(key.name) || list.includes(key.province)
      )
    )
  })
  ctx.body = {
    status: 200,
    hots: nList
  }
}

exports.getCity = async (ctx, next) => {
  let cities = []
  const city = await City.find({})
  city.forEach(item => {
    cities = cities.concat(item.value)
  })
  ctx.body = {
    status: 200,
    city: cities.map(item => {
      return {
        province: item.province,
        id: item.id,
        name:
          item.name === '省直辖县级行政区划' || item.name === '市辖区'
            ? item.province
            : item.name
      }
    })
  }
}
