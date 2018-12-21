const User = require('../controllers/user')
const Geo = require('../controllers/geo')
const Search = require('../controllers/search')
const router = require('koa-router')({
  prefix: '/api'
})
// 测试
router.get('/demo', (ctx, next) => {
  ctx.body = {
    success: 'ok',
    state: 200,
    data: [
      {
        age: 20,
        name: 'hnjnjjjj'
      }
    ]
  }
})

//  用户信息操作
router.post('/user/verify', User.verify)
router.post('/user/signup', User.signup)
router.post('/user/signin', User.signin)
router.get('/user/exit', User.exit)
router.get('/user/userinfo', User.getUser)

// 公共信息获取
router.get('/ip', Geo.getIp)
router.get('/info/menu', Geo.getMenu)
router.get('/info/province', Geo.getProvince)
router.get('/info/province/:id', Geo.getProvinceId)
router.get('/info/hotcity', Geo.getHotCity)
router.get('/info/city', Geo.getCity)

// 搜索信息
router.get('/search/top', Search.getTop)
router.get('/search/hotplace', Search.getHotPlace)
router.get('/search/keyword', Search.searchByKeywords)
router.get('/search/product', Search.getProducts)

module.exports = router
