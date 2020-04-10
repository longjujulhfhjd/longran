<template>
    <div class="longran-Top text-white">
        <div class="top-logo text-c font-30  text-white padding-tb-20 ">LONGRAN</div>
        <ul class="top-nav-lists clearfix">
            <router-link to='/'>  <li class="top-nav-list text-white ">首页</li></router-link>
            <router-link to='/wallpaper'>  <li class="top-nav-list text-white ">墙纸</li></router-link>
            <router-link to='/wallcoat'>   <li class="top-nav-list text-white ">墙衣</li></router-link>
            <router-link to='/wallcloth'>  <li class="top-nav-list text-white ">墙布</li></router-link>
            <router-link to='/wallpaint'>  <li class="top-nav-list text-white ">墙画</li></router-link>
            <router-link to='/application'>  <li class="top-nav-list text-white ">招聘</li></router-link>
            <router-link to='/personCenter'>  <li class="top-nav-list text-white ">个人中心</li></router-link>
            <router-link to='/aboutUs'>  <li class="top-nav-list text-white ">关于我们</li></router-link>
        </ul>
        <ul class="top-nav-listright">
            <router-link to='/search'> <li class="top-nav-listsright  text-white font-18 el-icon-search"></li> </router-link>
            <router-link to='/login'>  <li class="top-nav-listsright text-white font-18 el-icon-user-solid "></li></router-link>
            <router-link to='/cart'>   <li class="top-nav-listsright  top-listsright-shop text-white font-18 el-icon-shopping-bag-2 ">
                 <span>1</span>
                 </li></router-link>
            <!-- <li class="top-nav-listsright top-listsright-shop">
                <i class="font-18 el-icon-shopping-bag-2"></i>
                <span>1</span>
            </li> -->
            <li class="top-nav-listsright">
                <span class="font-18 el-icon-phone-outline" style="color:#FF6700;"><span class="padding-l-10">18286792321</span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        getscrool () {
            let navTop = document.querySelector('.longran-Top')
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop > 0) {
                navTop.classList.add('on')
            } else {
                navTop.classList.remove('on')
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.getscrool)
    }
}
</script>

<style lang="less" scoped>
@import './Css/top.less';
</style>
