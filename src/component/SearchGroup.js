    
 define(function(require){
     var actions = require("vuex/actions");
     var Vue = require("vue");
     return Vue.extend({
         template: "#searchgroup-template",
         vuex : {
             getters : {
                 searchKey : function(store){
                     return store.search.searchKey;
                 },
                 searchGroup : function(store){
                     return store.searchGroup.searchGroup
                 }
             },
             actions : {
                 setSearchGroup :actions.setSearchGroup
             }
         },
         computed : {
             curName : function(){
                 let cname ;
                 this.items.forEach((it) =>{
                     if(it.value == this.searchGroup) cname = it.name
                 })
                 return cname
             }
         },
         methods : {
             menuClick : function(it){
                 this.setSearchGroup(it.value,this.searchKey)
             }
         },
         components:{
         },
         props : ['items']
     })
 })   
