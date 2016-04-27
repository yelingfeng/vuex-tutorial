<template>
    <span class="input-group-btn">
        <a href="javascript:void(0)" data-target="#" class="btn btn-raised btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            {{curName}}
            <span class="caret"></span>
            <div class="ripple-container"></div>
        </a>
        <ul class="dropdown-menu" >
            <li v-for="item in items"><a href="javascript:void(0)" @click="menuClick(item)">{{item.name}}</a></li>
        </ul>
    </span>
</template>
<style>
    .dropdown-menu{
        min-width:100%;
    }
</style>
<script>
    import { setSearchGroup } from '../vuex/actions'
    export default{
        vuex : {
            getters : {
                searchKey : ({search}) => search.searchKey ,
                 searchGroup : ({searchGroup}) => searchGroup.searchGroup
            },
            actions : {
                setSearchGroup
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
    }
</script>