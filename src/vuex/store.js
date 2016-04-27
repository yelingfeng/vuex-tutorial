import Vue from 'vue'
import Vuex from 'vuex'
import search from "./modules/search"
import searchGroup from "./modules/searchGroup"
import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    search,
    searchGroup
  },
  strict: debug,
  middlewares
})
