import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index.vue'
import Connection from 'components/connection/connection.vue'
import Login from 'components/login/login.vue'
import Register from 'components/register/register.vue'
import Detail from 'components/detail/detail.vue'
import Forget from 'components/forget/forget.vue'
import Codeidentity from 'components/forget/codeidentity.vue'
import Codeover from 'components/forget/codeover.vue'
import Newpassword from 'components/forget/newpassword.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            // 默认首页
            path: '/',
            name: 'index',
            component: Index
        },
        {
            // 注册路由
            path: '/Register',
            name: 'register',
            component: Register
        },
        {
            // 详情
            path: '/Detail',
            name: 'detail',
            component: Detail
        },
        {
            // 联系我们路由
            path: '/Connection',
            name: 'connection',
            component: Connection
        },
        {
            // 登录路由
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            // 忘记密码路由
            path: '/forget',
            name: 'forget',
            component: Forget,
            children: [{
                path: '/forget/',
                name: 'codeidentity',
                component: Codeidentity
            }, {
                path: '/forget/codeover',
                name: 'codeover',
                component: Codeover
            }, {
                path: '/forget/newpassword',
                name: 'newpassword',
                component: Newpassword
            }
            ]
        }
    ]
})
