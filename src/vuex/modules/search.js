/**
 * Created by  on 2016/4/1.
 */
define(function(require){
    var types = require("vuex/mutation-types");
    var state = {
        // 查询条件
        searchKey : "",
        // 查询结果
        searchResultList : []
    }
    // mutations
    var mutations = {}

    mutations[types.SET_SEARCH_LIST] = function(state,list) {
        state.searchResultList = list;
    }
    mutations[types.UPDATE_SEARCH_VAL] = function(state , key) {
        state.searchKey = key ;
    }
    mutations[types.CLEAR_SEARCH_VAL] = function(state ) {
        state.searchKey = "";
        state.searchResultList = [];
    }

    return {
        state : state,
        mutations : mutations
    }
});


