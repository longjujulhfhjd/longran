<template>
    <div class="longran-Top text-white">
        <div class="top-logo text-c font-30  text-white padding-tb-20 ">LONGRAN</div>
        <ul class="top-nav-lists clearfix">
            <router-link  class="top-nav-list text-white " to='/'>  <li class="top-nav-list text-white ">首页</li></router-link>
            <li class="top-nav-list text-white ">墙衣</li>
            <li class="top-nav-list text-white ">墙纸</li>
            <li class="top-nav-list text-white ">墙布</li>
            <li class="top-nav-list text-white ">墙画</li>
            <li class="top-nav-list text-white ">畅销榜单</li>
            <li class="top-nav-list text-white ">会员中心</li>
            <li class="top-nav-list text-white ">关于我们</li>
        </ul>
        <ul class="top-nav-listright">
            <li class="top-nav-listsright">
                <i class="font-18 el-icon-search"></i>
            </li>
            <li class="top-nav-listsright">
                <i class="font-18 el-icon-user-solid"></i>
            </li>
            <li class="top-nav-listsright top-listsright-shop">
                <i class="font-18 el-icon-shopping-bag-2"></i>
                <span>1</span>
            </li>
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
    }
}
</script>

<style lang="less" scoped>
@import './Css/top.less';
</style>
