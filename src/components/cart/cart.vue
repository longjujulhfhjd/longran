<template>
    <div class="longran-Cart">
        <div class=" font-20"> <i class="el-icon-shopping-cart-full font-20 padding-r-10"></i>我的购物车</div>
        <div class="padding-t-10">
            <p class="font-12 padding-l-10">
                <el-checkbox class="font-12 padding-r-10"  :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>商品
            </p>
            <p class=" padding-l-10"><el-checkbox class="padding-r-10">店铺</el-checkbox>龙冉壁纸</p>
            <ul class="cart-title-lists clearfix">
                <li class="cart-title-list">商品图片 </li>
                <li class="cart-title-list">商品名称 </li>
                <li class="cart-title-list">商品规格 </li>
                <li class="cart-title-list">商品单价 </li>
                <li class="cart-title-list">商品数量 </li>
                <li class="cart-title-list">商品金额 </li>
                <li class="cart-title-list">商品操作 </li>
            </ul>
            <ul class="cart-list margin-t-10">
                <li class="cart-lists">
                    <el-checkbox class="cart-checkbox"></el-checkbox>
                    <img  class="margin-l-20 cart-listsimg margin-r-40" :src="banner1"/>
                    <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                    <p class="cart-scale ">规格</p>
                    <p class="cart-price ">￥12</p>
                    <div class="cart-mount ">
                        <el-input-number v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                    <p class="cart-total ">￥12</p>
                    <p class="cart-handle  ">删除 购买 收藏</p>
                </li>
                <li class="cart-lists">
                    <el-checkbox class="cart-checkbox"></el-checkbox>
                    <img  class="margin-l-20 cart-listsimg margin-r-40" :src="banner1"/>
                    <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                    <p class="cart-scale ">规格</p>
                    <p class="cart-price ">￥12</p>
                    <div class="cart-mount ">
                        <el-input-number v-model="num1"  :min="1" :max="100" ></el-input-number>
                    </div>
                    <p class="cart-total ">￥12</p>
                    <p class="cart-handle  ">删除 购买 收藏</p>
                </li>
            </ul>
            <div class="cart-allmount clearfix ">
              <div class="fl text-r" style="width:50%;">
                    <p>已经选中 <span class="text-red font-18">2</span>件商品 </p>
                    <p>总价：<span class="font-18 text-red">￥139.00</span></p>
              </div>
              <div class="fl padding-l-20"  style="width:50%;">
                  <router-link class="cart-aplay skin-bto-hover text-decoration-none" to="/account">立即结算</router-link>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import banner1 from './img/banner-1.jpg'
export default {
    data () {
        return {
            num: 1,
            num1: 1,
            banner1,
            checkAll: false,
            isIndeterminate: true
        }
    },
    methods: {
        handleCheckAllChange (val) {
            this.isIndeterminate = false
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/cart.less';

</style>
