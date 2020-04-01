import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index.vue'
import AboutUs from 'components/aboutUs/aboutUs.vue'
import Search from 'components/search/search.vue'
import PersonCenter from 'components/personCenter/personCenter.vue'
import Personperson from 'components/personCenter/person-person.vue'
import Personaddress from 'components/personCenter/person-address.vue'
import Personcollect from 'components/personCenter/person-collect.vue'
import Personmyfoot from 'components/personCenter/person-myfoot.vue'
import Personcart from 'components/personCenter/person-cart.vue'
import Personbought from 'components/personCenter/person-bought.vue'
import Personunpaid from 'components/personCenter/person-unpaid.vue'
import Edit from 'components/personCenter/edit.vue'
import Personshipped from 'components/personCenter/person-shipped.vue'
import Personreceived from 'components/personCenter/person-received.vue'
import Personappraise from 'components/personCenter/person-appraise.vue'
import Personrefund from 'components/personCenter/person-refund.vue'
import Application from 'components/application/application.vue'
import Collect from 'components/collect/collect.vue'
import Wallpaper from 'components/wallpaper/wallpaper.vue'
import Listshop from 'components/Common/listshop/listshop.vue'
import Wallpaint from 'components/wallpaint/wallpaint.vue'
import Wallcoat from 'components/wallcoat/wallcoat.vue'
import Wallcloth from 'components/wallcloth/wallcloth.vue'
import Connection from 'components/connection/connection.vue'
import Login from 'components/login/login.vue'
import Register from 'components/register/register.vue'
import Detail from 'components/detail/detail.vue'
import Account from 'components/account/account.vue'
import Order from 'components/order/order.vue'
import Ordered from 'components/order/ordered.vue'
import Unorder from 'components/order/unorder.vue'
import Cart from 'components/cart/cart.vue'
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
            // 墙纸Wallpaper
            path: '/wallpaper',
            name: 'wallpaper',
            component: Wallpaper,
            children: [{
                path: '/wallpaper/',
                name: 'listshop',
                component: Listshop
            }]
        },
        {
            // 墙画wallpaint
            path: '/wallpaint',
            name: 'wallpaint',
            component: Wallpaint,
            children: [{
                path: '/wallpaint/',
                name: 'listshop',
                component: Listshop
            }]
        },
        {
            // 个人中心personCenter
            path: '/personCenter',
            name: 'personCenter',
            component: PersonCenter,
            children: [{
                // 个人中心
                path: '/personCenter/',
                name: 'Personperson',
                component: Personperson,
                children: [{
                    // 编辑头像
                    path: '/personCenter/Personperson/edit',
                    name: 'edit',
                    component: Edit
                }]
            },
            {
                // 修改地址
                path: '/personCenter/personaddress',
                name: 'personaddress',
                component: Personaddress
            },
            {
                // 收藏夹
                path: '/personCenter/personcollect',
                name: 'personcollect',
                component: Personcollect
            },
            {
                // 购物车
                path: '/personCenter/personcart',
                name: 'personcart',
                component: Personcart
            },
            {
                // 我的足迹
                path: '/personCenter/personmyfoot',
                name: 'personmyfoot',
                component: Personmyfoot
            },
            {
                // 以购买的商品
                path: '/personCenter/personbought',
                name: 'personbought',
                component: Personbought
            },
            {
                // 未付款商品
                path: '/personCenter/personunpaid',
                name: 'personunpaid',
                component: Personunpaid
            },
            {
                // 代发货商品
                path: '/personCenter/personshipped',
                name: 'personshipped',
                component: Personshipped
            },
            {
                // 代收货商品
                path: '/personCenter/personreceived',
                name: 'personreceived',
                component: Personreceived
            },
            {
                // 待评价
                path: '/personCenter/personappraise',
                name: 'personappraise',
                component: Personappraise
            },
            {
                // 退货商品
                path: '/personCenter/personrefund',
                name: 'personrefund',
                component: Personrefund
            }]
        },
        {
            // 招聘
            path: '/application',
            name: 'application',
            component: Application
        },
        {
            // 关于我们
            path: '/aboutUs',
            name: 'aboutUs',
            component: AboutUs
        },
        {
            // 收藏夹
            path: '/collect',
            name: 'collect',
            component: Collect
        },
        {
            // 搜索
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            // 墙布wallpaint
            path: '/wallcloth',
            name: 'wallcloth',
            component: Wallcloth,
            children: [{
                path: '/wallcloth/',
                name: 'listshop',
                component: Listshop
            }]
        },
        {
            // 墙衣wallcoat
            path: '/wallcoat',
            name: 'wallcoat',
            component: Wallcoat,
            children: [{
                path: '/wallcoat/',
                name: 'listshop',
                component: Listshop
            }]
        },
        {
            // 注册路由
            path: '/Register',
            name: 'register',
            component: Register
        },
        {
            // 购物车
            path: '/Cart',
            name: 'cart',
            component: Cart
        },
        {
            // 详情
            path: '/Detail',
            name: 'detail',
            component: Detail
        },
        {
            // 结算页
            path: '/Account',
            name: 'account',
            component: Account
        },
        {
            // 订单页
            path: '/Order',
            name: 'order',
            component: Order,
            children: [{
                path: '/Order/',
                name: 'ordered',
                component: Ordered
            }, {
                path: '/Order/Unorder',
                name: 'unorder',
                component: Unorder
            }
            ]
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
