import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import {websocket} from './utils/websocket.js'
// 后台地址
// axios.defaults.baseURL = 'http://121.36.26.71:8989/'
axios.defaults.baseURL = 'http://localhost:8080/'
// 允许跨域携带数据
axios.defaults.withCredentials = true
// cookies相关
const $cookies = require('vue-cookies')
Vue.use($cookies)
// 全局注册，这样在其他组件中就能通过 this.$axios 来调用http服务
Vue.prototype.$axios = axios
Vue.prototype.$ws = websocket

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')