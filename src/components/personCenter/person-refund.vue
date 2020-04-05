<template>
    <div>
         <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">退款金额 </li>
            <li class="cart-title-list">申请时间 </li>
            <li class="cart-title-list">服务类型 </li>
            <li class="cart-title-list">退款状态 </li>
        </ul>
        <ul class="cart-list margin-t-10" v-infinite-scroll style="height:500px;overflow:auto">
            <li class="cart-lists">
                <img  class="margin-l-20 cart-listsimg margin-r-40" src="./image/wallcloth-4.jpg"/>
                <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                <p class="cart-price ">￥12</p>
                <p class="cart-num">
                    2020-4-1
                </p>
                <p class="cart-total ">仅退款</p>
                <p class="cart-handle  ">退款成功</p>
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
