const axios = require('../util/axios')
const Poi = require('../dbs/schema/poi')

exports.getTop = async (ctx, next) => {
  try {
    let top = await Poi.find({
      name: new RegExp(ctx.query.input),
      city: ctx.query.city
    })
    ctx.body = {
      code: 0,
      top: top.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      }),
      type: top.length ? top[0].type : ''
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      top: []
    }
  }
}

exports.getHotPlace = async (ctx, next) => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  try {
    let result = await Poi.find({
      city,
      type: ctx.query.type || '景点'
    }).limit(10)

    ctx.body = {
      code: 0,
      result: result.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      })
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      result: []
    }
  }
}

exports.searchByKeywords = async (ctx, next) => {
  const { city, keyword } = ctx.query
  let {
    status,
    data: { count, pois }
  } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword,
      sign: 'abcd'
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
}

exports.getProducts = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: []
  }
}
