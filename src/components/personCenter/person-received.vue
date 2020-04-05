<template>
    <div>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品操作 </li>
            <li class="cart-title-list">商品单价 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">实付款 </li>
            <li class="cart-title-list">交易操作 </li>
        </ul>
        <ul class="cart-list margin-t-10"  v-infinite-scroll style="height:500px;overflow:auto">
            <li class="cart-lists">
                <img  class="margin-l-20 cart-listsimg margin-r-40" src="./image/wallcloth-4.jpg"/>
                <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                <router-link to="/shopprogress/refund"> <p class="cart-scale ">退款/退货</p> </router-link>
                <p class="cart-price ">￥12</p>
                <p class="cart-num">
                    <span class="padding-10">1</span>
                </p>
                <p class="cart-total ">￥12</p>
                <router-link to="/shopprogress/received"> <p class="cart-handle">确认收货</p> </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
