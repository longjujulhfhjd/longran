// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import md5 from 'js-md5'
import 'element-ui/lib/theme-chalk/index.css'
import './css/public.less'
import './css/common.less'
import './css/button.less'
import './css/font/iconfont.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import vRegion from 'v-region'
import moment from 'moment'
import VDistpicker from 'v-distpicker'
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})
Vue.prototype.axiosRequest = function (config) {
    let axiosRequest = axios.create({
        baseURL: 'http://127.0.0.1:3000',
        timeout: 1000
    })
    return axiosRequest(config)
}
Vue.component('v-distpicker', VDistpicker)
Vue.use(vRegion)
Vue.config.productionTip = false
Vue.prototype.$md5 = md5
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    Swiper,
    components: { App },
    template: '<App/>'
})
