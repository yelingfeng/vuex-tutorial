/**
 * Created by  on 2016/3/25.
 */
define(function(require){

    var Vue = require("vue");
    var searchComponent = require("component/Search");
    var searchList = require("component/List");
    var app = Vue.extend({
        template : "#app-template",
        vuex :{
            getters : {
                searchResultList: function(store){
                    return store.search.searchResultList
                }
            }
        },
        components:{
            searchComponent : searchComponent,
            searchList : searchList
        }
    });
    return app
});


