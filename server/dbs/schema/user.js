const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// 加密权重
const SALT_WORK_FACTOR = 10
// 登录的最大失败尝试次数
const MAX_LOGIN_ATTEMPTS = 5
// 登录失败锁定时间
const LOCK_TIME = 2 * 60 * 60 * 1000

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
// const User = mongoose.model('User', UserSchema)
