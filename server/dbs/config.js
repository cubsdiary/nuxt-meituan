module.exports = {
  dbs: 'mongodb://yangjing:1225659856@127.0.0.1:27017/meituan',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1225659856@qq.com'
    },
    get pass() {
      return 'gmnydjdpcnxuijhd'
    },
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  },
  ipSearch: {
    AppKey: 25415619,
    AppSecret: '97ac69274e65c70b3058a2f77c14c026',
    AppCode: 'f4ee00755d5740dfb2e7d06da97e0798'
  }
}
