// const mongoose = require('mongoose')
// const User = mongoose.model('User')

exports.login = async (ctx, next) => {
  ctx.body = {
    success: 'ok',
    state: 200,
    data: 'hello'
  }
}
