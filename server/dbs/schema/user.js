const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  // 兼容各个微信应用，小程序或者公众号的微信用户 ID
  username: {
    unique: true,
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 中间件
UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})
module.exports = mongoose.model('User', UserSchema)
