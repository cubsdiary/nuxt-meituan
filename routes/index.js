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

router.get('/', (ctx, next) => {
  ctx.body = {
    success: 'ok',
    state: 200,
    data: 'hello'
  }
})

module.exports = router
