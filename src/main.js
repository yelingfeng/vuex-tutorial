import Vue from 'vue'
import App from './components/App'
import $ from "jquery"
import store from './vuex/store'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/md-facefont.css'
import "./assets/js/bootstrap-material-design/css/bootstrap-material-design.css"
import "./assets/js/bootstrap-material-design/css/ripples.min.css"
import "bootstrap/dist/js/bootstrap.min"
import "./assets/js/bootstrap-material-design/js/ripples.min.js"
import "./assets/js/bootstrap-material-design/js/material.min.js"
new Vue({
   el : "body",
   store,
   components:{
     App
   },
    ready(){
      $.material.init()
    }
})

