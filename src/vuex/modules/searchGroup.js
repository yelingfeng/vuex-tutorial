/**
 * Created by  on 2016/4/27.
 */
import {
    SET_SEARCH_GROUP_VAL
} from '../mutation-types'
const state = {
    // 分组值
    searchGroup : "1",
    // 查询分组项
    searchGroupItem : [
        {
            name: "个人",
            value: 1
        }, {
            name: "公司",
            value: 2
        },{
            name: "国家",
            value: 3
        }
    ]
}

// mutations
const mutations = {
    // 设置查询分组值
    [SET_SEARCH_GROUP_VAL] (state, searchGroup) {
        state.searchGroup = searchGroup;
    },

}
export default {
    state,mutations
}