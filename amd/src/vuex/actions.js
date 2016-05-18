define(function(require){
    var api = require("api");
    var types = require("vuex/mutation-types")
    var actions = {
        // 设置查询分组
        setSearchGroup : function(store,group,key){
            store.dispatch(types.SET_SEARCH_GROUP_VAL, group);
            // 查询结果
            actions.searchParamList(store,group,key);
        },
        // clear 查询项
        clearSearchKey : function(store){
            store.dispatch(types.CLEAR_SEARCH_VAL)
        },
        // 更新查询项
        updateSearchKey : function(store , key){
            store.dispatch(types.UPDATE_SEARCH_VAL,key);
        },
        // 查询结果集合
        searchParamList : function(store , group ,key){
            var result = api.searchParamList({
                type:group,
                key:key
            });
            if(result.data){
                store.dispatch(types.SET_SEARCH_LIST,result.data);
            }
        }

    }
    return actions;
})
