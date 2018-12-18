const User = require('../controllers/user')
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

router.post('/user/verify', User.verify)
router.post('/user/signup', User.signup)
router.post('/user/signin', User.signin)
router.get('/user/exit', User.exit)
router.get('/user/userinfo', User.getUser)
module.exports = router
