<template>
    <div class="longran-Top">
        <div class="top-logo text-c font-30  text-white padding-tb-20 ">LONGRAN</div>
        <ul class="top-nav-lists clearfix">
            <router-link to="/">
                <li class="top-nav-list text-white ">
                    首页
                    <span class="top-nav-icon"></span>
                </li>
            </router-link>
            <router-link to=""><li class="top-nav-list text-white ">会员中心</li></router-link>
            <router-link to=""><li class="top-nav-list text-white ">关于我们</li></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted () {}
}
</script>

<style lang="less" scoped>
@import './Css/top.less';
</style>
