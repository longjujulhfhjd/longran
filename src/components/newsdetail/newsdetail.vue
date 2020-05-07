<template>
    <div class="padding-50 margin-50">
        <div class="padding-30" :key="index" v-for="(item,index) in getnewslistdetail" style="border:1px solid #ccc;">
            <p class="padding-b-30 text-weight font-14"><span class="text-red font-16">{{item.news_title}}</span>详情如下：</p>
            <p class="text-weight ">活动的具体内容：</p>
            <p class="padding-30">{{item.news_detail}}</p>
            <p  class="text-weight ">活动开始时间：</p>
            <p  class="padding-30">{{item.news_starttime|dateformat('YYYY-MM-DD HH:mm:ss')}}</p>
            <p  class="text-weight ">活动结束时间：</p>
            <p  class="padding-30">{{item.news_endtime|dateformat('YYYY-MM-DD HH:mm:ss')}}</p>
        </div>
        <router-link to='/'><span class="text-red">点击返回</span></router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        getnewslistdetail () {
            return this.$store.state.shouye.newsdetaillist
        }
    },
    mounted () {
        this.$store.dispatch('newsdetail')
    }
}
</script>

<style lang="less" scoped>
@import './Css/newsdetail.less';
</style>
