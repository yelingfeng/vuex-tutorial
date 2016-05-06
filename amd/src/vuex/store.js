
define(function(require){
    
  var Vue = require("vue");
  var Vuex = require("vueX");
  var search = require("vuex/modules/search");
  var searchGroup = require("vuex/modules/searchGroup");
  Vue.use(Vuex)
  Vue.config.debug = true;

  return new Vuex.Store({
    modules: {
      search : search,
      searchGroup :searchGroup
    },
    strict: true,
    middlewares: [Vuex.createLogger]
  })
})

