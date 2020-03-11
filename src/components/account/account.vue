<template>
    <div class="longran-Account">
        <p>请核对订单信息</p>
        <div>
            <p>选择收货地址</p>
        </div>
        <div>
            <p>配送方式</p>
        </div>
        <div>
            <p>发票信息</p>
        </div>
        <div>
            <p>订单详情</p>
            <ul class="cart-title-lists clearfix">
                <li class="cart-title-list">商品图片 </li>
                <li class="cart-title-list">商品名称 </li>
                <li class="cart-title-list">商品规格 </li>
                <li class="cart-title-list">商品单价 </li>
                <li class="cart-title-list">商品数量 </li>
                <li class="cart-title-list">商品金额 </li>
                <li class="cart-title-list">商品操作 </li>
            </ul>
        </div>
        <router-link  class="skin-bto-hover text-decoration-none" to="/order/">提交订单</router-link>
        <router-link  class="skin-bto-hover text-decoration-none" to="/order/unorder">取消订单</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './Css/account.less';

</style>
