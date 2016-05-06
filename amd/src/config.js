require.config({
    baseUrl : "./src",
    paths :{
        jquery:"./lib/jquery.min",
        vue:"./lib/vue",
        vueResource:"./lib/vue-resource.min",
        vueX:"./lib/vuex",
        api :"./api/index",
        lodash : "./lib/lodash.min",
        bootstrap : "./assets/js/bootstrap/js/bootstrap.min",
        ripples : "./assets/js/bootstrap-material-design/js/ripples.min",
        material:"./assets/js/bootstrap-material-design/js/material.min"
    },
    shim : {
        bootstrap : ['jquery'],
        ripples:['jquery'],
        material:['jquery'],
    },
    packages: [
        {
            name: 'components',
            location: 'component',
            main: 'components'
        },
        {
            name : "vuex",
            location :"vuex",
            main : "vuex"
        }
    ]
})
require(["./main"])