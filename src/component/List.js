
define(function(require){
    var Vue = require("vue");
    return Vue.extend({
        template : "#list-template",
        props:['data'],
        computed : {
            isEmpty : function(){
                return this.data.length == 0 ;
            }
        }
    });
});
