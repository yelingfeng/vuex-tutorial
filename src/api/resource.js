/**
 * Created by  on 2016/4/1.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource);
// HTTP相关
// Vue.http.options.crossOrigin = true 
export const  searchParamList = (options) => Vue.http.post(API_ROOT + '/search',options);