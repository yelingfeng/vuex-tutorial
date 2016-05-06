define(function(require){
    var Vue = require("vue");
    var SearchGroup = require("component/SearchGroup");
    var actions = require("vuex/actions")
    var getters = require("vuex/getters");

    return Vue.extend({
        vuex :{
           getters : {
               searchGroupItem: function(store){
                   return store.searchGroup.searchGroupItem
               },
               searchGroup:function(store){
                   return store.searchGroup.searchGroup
               },
               searchKey : function(store){
                   return store.search.searchKey
               },
               isEmptySearchKey : getters.isEmptySearchKey
           },
           actions: {
               searchParamList:actions.searchParamList ,
               clearSearchKey:actions.clearSearchKey,
               updateSearchKey:actions.updateSearchKey
           }
        },
        methods : {
            clearAction:function(){
                this.clearSearchKey()
            },
            searchAction:function(e){
                if(this.searchKey.length){
                    this.searchParamList(this.searchGroup,this.searchKey)
                }
            },
            update:function(e){
                this.updateSearchKey(e.target.value)
            }
        },
        template : "#search-template",
        components:{
            searchGroup:SearchGroup
        }
    });
});

