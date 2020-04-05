<template>
    <div class="longran-Account">
        <p>
            <i class="el-icon-warning-outline"></i>请核对订单信息
        </p>
        <div class="padding-t-20">
            <p>选择收货地址</p>
        </div>
        <div class="margin-t-20">
            <p>配送方式</p>
            <ul class="account-list clearfix">
                <li class="account-lists">
                    <span>货到付款</span>
                    <i class="select-icon el-icon-check"></i>
                </li>
                <li class="account-lists">
                    <span>在线支付</span>
                    <i class="select-icon el-icon-check"></i>
                </li>
                <li class="account-lists">
                    <span>上门自提</span>
                    <i class="select-icon el-icon-check"></i>
                </li>
            </ul>
        </div>
        <div class="margin-t-20">
            <p>发票信息</p>
             <ul class="account-list clearfix">
                <li class="account-lists">
                    <span>不开发票</span>
                    <i class="select-icon el-icon-check"></i>
                </li>
                <li class="account-lists">
                    <span>一般发票</span>
                    <i class="select-icon el-icon-check"></i>
                </li>
                <li class="account-lists">
                    <span>电子发票</span>
                    <i class="select-icon el-icon-check"></i>
                </li>
            </ul>
        </div>
        <p>订单详情</p>
        <div class="margin-t-10 margin-b-20 padding-10" style="border:1px solid #ccc;">
            <ul class="cart-title-lists clearfix">
                <li class="cart-title-list">商品图片 </li>
                <li class="cart-title-list">商品名称 </li>
                <li class="cart-title-list">商品规格 </li>
                <li class="cart-title-list">商品单价 </li>
                <li class="cart-title-list">商品数量 </li>
                <li class="cart-title-list">商品金额 </li>
            </ul>
            <ul class="cart-list margin-t-10">
                <li class="cart-lists">
                    <p class="cart-img"><img  class="margin-l-20 cart-listsimg margin-r-40" :src="banner1"/></p>
                    <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                    <p class="cart-scale ">规格</p>
                    <p class="cart-price ">￥12.00</p>
                    <p class="cart-mount">2</p>
                    <p class="cart-total text-red ">￥24.00</p>
                </li>
                 <li class="cart-lists">
                    <p class="cart-img"><img  class="margin-l-20 cart-listsimg margin-r-40" :src="banner1"/></p>
                    <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                    <p class="cart-scale ">规格</p>
                    <p class="cart-price ">￥12.00</p>
                    <p class="cart-mount">2</p>
                    <p class="cart-total text-red ">￥24.00</p>
                </li>
             </ul>
        </div>
        <div class="text-r padding-r-50">
            <p>共 <span class="font-14 text-red">2</span> 件商品，商品金额总计：<span class="font-14 text-red">￥1999.00</span></p>
            <p class="margin-t-10">运费：<span  class="font-14 text-red">￥20.00</span> (<span>货到付款</span>)</p>
            <p class="margin-t-20">订单总计<span class="font-18 text-red">￥1888.00</span></p>
        </div>
       <div class="text-r margin-t-20 margin-r-20">
            <router-link  class="skin-bto-hover text-decoration-none" to="/shopprogress/pay">去支付</router-link>
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
@import './Css/account.less';

</style>
