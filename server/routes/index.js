const User = require('../controllers/user')
const Geo = require('../controllers/geo')
const router = require('koa-router')({
  prefix: '/api'
})

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
module.exports = router
