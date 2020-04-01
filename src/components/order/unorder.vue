<template>
    <div class="longran-Unorder">
         <div class="margin-t-10 margin-b-20 padding-10" style="border:1px solid #ccc;">
            <ul class="cart-title-lists clearfix">
                <li class="cart-title-list">商品图片 </li>
                <li class="cart-title-list">商品名称 </li>
                <li class="cart-title-list">商品规格 </li>
                <li class="cart-title-list">商品单价 </li>
                <li class="cart-title-list">商品数量 </li>
                <li class="cart-title-list">商品金额 </li>
                <li class="cart-title-list text-red">待支付...</li>
            </ul>
            <ul class="cart-list margin-t-10">
                <li class="cart-lists">
                    <p class="cart-img"><img  class="margin-l-20 cart-listsimg margin-r-40" :src="banner1"/></p>
                    <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                    <p class="cart-scale ">规格</p>
                    <p class="cart-price ">￥12.00</p>
                    <p class="cart-mount">2</p>
                    <p class="cart-total text-red">￥24.00</p>
                    <p class="cart-destory"><span class="cart-destory-btn">付款</span><span class="cart-destory-btn">取消</span> </p>
                </li>
                <li class="cart-lists">
                    <p class="cart-img"><img  class="margin-l-20 cart-listsimg margin-r-40" :src="banner1"/></p>
                    <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                    <p class="cart-scale ">规格</p>
                    <p class="cart-price ">￥12.00</p>
                    <p class="cart-mount">2</p>
                    <p class="cart-total text-red">￥24.00</p>
                    <p class="cart-destory"><span class="cart-destory-btn">付款</span><span class="cart-destory-btn">取消</span> </p>
                </li>
             </ul>
        </div>
    </div>
</template>

<script>
import banner1 from './img/banner-1.jpg'
export default {
    data () {
        return {
            banner1
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/order.less';

</style>
