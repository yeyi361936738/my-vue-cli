// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 引入vuex
import store from './vuex'

// 引入常用函数库
import { setStore, getStore, removeStore } from './assets/js/fn'

// 引入与native移动端的交互函数库
import native from './assets/js/native'
Vue.prototype.$native = native

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: '',//网络图片报错显示的默认图
  loading: ''//网络图片加载中显示的默认图
})

//正则表达式
import Validate from './common/validator'
Vue.prototype.$validate=function(type,value){return Validate.validate(type,value)}

// 引入axios
// import api from './config/http'
// Vue.prototype.$api = api

// 引入lodash
var _ = require('lodash');

// import test from './assets/js/test'
// Vue.use(test)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
