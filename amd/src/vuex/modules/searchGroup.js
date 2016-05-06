/**
 * Created by  on 2016/4/27.
 */
/**
 * Created by  on 2016/4/1.
 */
define(function(require){
    var types = require("vuex/mutation-types");
    var state = {
        // 分组值
        searchGroup : 0,
        // 查询分组项
        searchGroupItem : [
            {
                name: "全部",
                value: 0
            },
            {
                name: "分类1",
                value: 1
            }, {
                name: "分类2",
                value: 2
            },{
                name: "分类3",
                value: 3
            }
        ]
    }
    // mutations
    var mutations = {}
    mutations[types.SET_SEARCH_GROUP_VAL] = function(state, searchGroup) {
        state.searchGroup = searchGroup;
    }

    return {
        state : state,
        mutations : mutations
    }
});