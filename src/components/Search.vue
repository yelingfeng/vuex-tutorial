<template>
    <div class="form-group">
        <div class="input-group">
            <search-group  :items="searchGroupItem"></search-group>
            <input type="text" class="form-control"  :value="searchKey" @input="update" @keyup.enter="searchAction" placeholder="搜索关键字..." >
            <span class="material-input"></span>
            <i class="material-icons i-clear" v-show="isEmptySearchKey" v-on:click.stop="clearAction">clear</i>
            <i class="material-icons i-search" v-on:click.stop="searchAction">search</i>
        </div>
    </div>
</template>
<style>
    .i-search {
        position: absolute;
        right: 0;
        top : 10px;
        cursor: pointer;
        z-index: 10;
    }
    .i-clear{
        position: absolute;
        right: 30px;
        top : 13px;
        cursor: pointer;
        z-index: 10; 
        font-size : 16px;
        color :#777;
    }
    .i-search:hover,.i-clear:hover{
        color :#00aa9a;
    }
</style>
<script>
    import searchGroup from "./SearchGroup"
    import { searchParamList,clearSearchKey,updateSearchKey } from '../vuex/actions'
    import {isEmptySearchKey} from "../vuex/getters"
    export default{
         vuex: {
            getters: {
               searchGroupItem: ({ searchGroup }) => searchGroup.searchGroupItem ,
               searchGroup:({searchGroup}) => searchGroup.searchGroup,
               searchKey : ({search}) => search.searchKey ,
               isEmptySearchKey
            },
            actions: {
              searchParamList,clearSearchKey,updateSearchKey
            }
         },
        methods : {
            clearAction(){
               this.clearSearchKey()
            },
            searchAction(e){
                if(this.searchKey.length){
                    this.searchParamList(this.searchGroup,this.searchKey)
                }
            },
            update(e){
                this.updateSearchKey(e.target.value)
            }
        },
        components:{
            searchGroup
        }
    }
</script>