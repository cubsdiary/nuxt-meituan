import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'
Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home
    },
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        const {
          data: {
            ret: status,
            data: { city, region: province }
          }
        } = await app.$axios.get('http://127.0.0.1:3000/api/ip')
        commit(
          'geo/setPosition',
          status === 200
            ? {
                city,
                province
              }
            : {
                city: '',
                province: ''
              }
        )
        const {
          data: { status: statusMenu, menu }
        } = await app.$axios.get('http://127.0.0.1:3000/api/info/menu')
        commit('home/setMenu', statusMenu === 200 ? menu : [])
      }
    }
  })

export default store
