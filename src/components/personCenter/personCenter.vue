<template>
    <div class="longran-Person">
        <p class="text-c font-18 padding-tb-20">个人中心</p>
        <div class="person-top ">
           <div class="clearfix top-box" >
                <div class="imgbox fl">
                    <img src="./image/touimg.jpg"/>
                </div>
                <p class="padding-t-20 font-16 name-person fl margin-l-20">{{name}}</p>
                <p class=" fr padding-r-50 margin-r-50 margin-t-20" @click="loginout">退出登录</p>
           </div>
           <ul class="person-toplist clearfix">
               <router-link to="/personCenter/personunpaid">
                    <li class="person-toplists">
                        <span>待付款</span>
                        <p class="num-eyes">10</p>
                    </li>
                </router-link>
                <router-link to="/personCenter/personshipped">
                    <li class="person-toplists">
                        <span>待发货</span>
                        <p class="num-eyes">45</p>
                    </li>
                </router-link>
                <router-link to="/personCenter/personreceived">
                    <li class="person-toplists">
                        <span>待收货</span>
                        <p class="num-eyes">12</p>
                    </li>
                </router-link>
                <router-link to="/personCenter/personappraise">
                    <li class="person-toplists">
                        <span>待评价</span>
                        <p class="num-eyes">3</p>
                    </li>
                </router-link>
                <router-link to="/personCenter/personrefund">
                    <li class="person-toplists">
                        <span>退款</span>
                        <p class="num-eyes">56</p>
                    </li>
                </router-link>
           </ul>
        </div>
        <div class="clearfix padding-30">
            <ul class="person-list fl clearfix">
                <router-link to="/personCenter/">  <li class="person-lists">个人资料</li></router-link>
                <router-link to="/personCenter/personaddress">  <li class="person-lists">收货地址</li></router-link>
                <router-link to="/personCenter/personcollect">  <li class="person-lists">我的收藏夹</li></router-link>
                <router-link to="/personCenter/personcart">  <li class="person-lists">我的购物车</li></router-link>
                <router-link to="/personCenter/personbought">  <li class="person-lists">已购买的宝贝</li></router-link>
                <router-link to="/personCenter/personmyfoot">  <li class="person-lists">我的足迹</li></router-link>
                <router-link to="/personCenter/allappraise">  <li class="person-lists">所有评价</li></router-link>
            </ul>
            <div class="fr person-content">
                <p class="person-title">
                    <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">个人资料</span>
                </p>
                <div class="person-content-con">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: ''
        }
    },
    methods: {
        // 退出登录
        loginout () {
            let token = window.localStorage.getItem('token')
            if (token) {
                window.localStorage.removeItem('token')
                this.$router.push('/')
                this.$router.go(0)
            }
        }
    },
    mounted () {
        let name = JSON.parse(window.localStorage.getItem('userinfo')).name
        this.name = name
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
