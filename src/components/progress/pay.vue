<template>
    <div class="padding-50 margin-50 ">
       <div class="clearfix">
            <div class="weixin-pay fl margin-t-10">
                <p class="font-18 margin-b-10">微信支付</p>
                <div class="weixinimg-box"><img src="./image/weixin.png"/></div>
            </div>
            <div class="zhifubao-pay fl margin-l-50">
                <p class=" font-18 margin-b-10">支付宝支付</p>
                   <div class="zhifubaoimg-box"><img src="./image/zhifubao.jpg"/></div>
            </div>
       </div>
        <router-link  class="skin-bto-hover margin-t-20 text-decoration-none" to="/order/unorder">取消订单</router-link>
        <router-link  class="skin-bto-hover margin-t-20 text-decoration-none" to="/personCenter/personshipped">完成</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
