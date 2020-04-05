<template>
    <div class="padding-50">
        <div>
            <ul class="progree-pro-list clearfix">
                <li class="progree-pro-lists on">1.拍下商品</li>
                <li class="progree-pro-lists">2.付款到支付宝</li>
                <li class="progree-pro-lists">3.卖家发货</li>
                <li class="progree-pro-lists">4.确认收货</li>
                <li class="progree-pro-lists">5.评价</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
