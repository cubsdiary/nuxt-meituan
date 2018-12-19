const Koa = require('koa')
const consola = require('consola')
const router = require('./routes')
const mongoDB = require('./dbs/init')
const bodyParser = require('koa-bodyparser')
const session = require('koa-generic-session')
const Redis = require('koa-redis')
const passport = require('./util/passport')
const dbConfig = require('./dbs/config')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.keys = ['mt', 'nuxt meituan']
app.proxy = true
app.use(session({ key: 'mt', prefix: 'mt:uid', store: new Redis() }))

app.use(
  bodyParser({
    extendTypes: ['json', 'form', 'text']
  })
)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  await mongoDB.connect(dbConfig.dbs)

  app.use(passport.initialize())
  app.use(passport.session())
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(async (ctx, next) => {
    // koa defaults to 404 when it sees that status is unset
    if (/api\//.test(ctx.request.url)) {
      await next()
    } else {
      ctx.status = 200
      return new Promise((resolve, reject) => {
        ctx.res.on('close', resolve)
        ctx.res.on('finish', resolve)
        nuxt.render(ctx.req, ctx.res, promise => {
          // nuxt.render passes a rejected promise into callback on error.
          promise.then(resolve).catch(reject)
        })
      })
    }
  })
  app.use(router.routes()).use(router.allowedMethods())

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
