/**
 * Created by  on 2016/5/6.
 */
define(function(require){

    var _ = require("lodash");

    return {
        searchParamList : function(param){

            var type  = param.type ;
            var key = param.key ;

            var data = [
                {
                    "name" : "AA",
                    "address"  : "北京市朝阳区101-0A",
                    "type" : "1"
                },
                {
                    "name" : "BB",
                    "address" : "北京市朝阳区101-0B",
                    "type" : "2"
                },
                {
                    "name" : "CC",
                    "address" : "北京市朝阳区101-0C",
                    "type" : "3"
                },
                {
                    "name" : "DD",
                    "address" : "北京市朝阳区101-0D",
                    "type" : "3"
                },
                {
                    "name" : "EE",
                    "address" : "北京市朝阳区101-0E",
                    "type" : "3"
                },
                {
                    "name" : "FFF",
                    "address" : "北京市朝阳区101-0F",
                    "type" : "2"
                }
            ]

            if(type != null && key !== ""){
                if(type != 0 ){
                    var newData = _.chain(data).filter(function(it){
                       return it.type == type && it.name.indexOf(key) > -1 ;
                    }).value();
                    data = newData;
                }

            }



            return {
                data :data
            }
        }
    }

})