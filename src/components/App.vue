<template>
    <div id="app">
        <div class=".container-fluid" >
            <div class="row">
                <div class="col-md-6">
                    <search-component></search-component>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="bs-component ">
                       <list-component :data="searchResultList"></list-component>
                    </div>   
                </div>
            </div>
           
        </div>
    </div>

</template>

<script>
    import searchComponent from "./Search"
    import listComponent from "./List"
    export default {
        vuex :{
            getters : {
                searchResultList: ({ search }) => search.searchResultList 
            }
        },
        components:{
            searchComponent,listComponent
        }
    }
</script>

<style >

</style>
