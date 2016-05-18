/**
 * Created by  on 2016/3/25.
 */
define(function(require){
    var Vue = require("vue");
    var store = require("vuex/store")
    var app =  require("component/App")
    var $ = require("jquery");
    require("bootstrap")
    require("ripples")
    require("material")
    
    Vue.config.debug = true;
    Vue.config.devtools = true;

    new Vue({
        el : "body",
        store: store,
        ready: function(){
            $.material.init();
        },
        components:{
            App: app
        }
    });
});


