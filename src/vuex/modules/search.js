/**
 * Created by  on 2016/4/1.
 */
import {
    SET_SEARCH_LIST,
    CLEAR_SEARCH_VAL,
    UPDATE_SEARCH_VAL
}  from '../mutation-types'

const state  = {
    // 查询条件
    searchKey : "",
    // 查询结果
    searchResultList : []
}

// mutations
const mutations = {
    [SET_SEARCH_LIST] (state,list) {
        state.searchResultList = list;
    },
    [UPDATE_SEARCH_VAL](state , key){
        state.searchKey = key ;
    },
    [CLEAR_SEARCH_VAL](state){
        state.searchKey = "";
        state.searchResultList = [];
    }
}

export  default {
    state,
    mutations
}


