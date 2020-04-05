<template>
    <div>
        <p class="font-12 padding-l-10">
            <el-checkbox class="font-12 padding-r-10"  :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>商品
        </p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品规格 </li>
            <li class="cart-title-list">商品单价 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">商品金额 </li>
            <li class="cart-title-list">商品操作 </li>
        </ul>
        <ul class="cart-list margin-t-10"  style="height:500px;overflow:auto">
            <li class="cart-lists">
                <el-checkbox class="cart-checkbox"></el-checkbox>
                <img  class="margin-l-20 cart-listsimg margin-r-40" src="./image/wallcloth-4.jpg"/>
                <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                <p class="cart-scale ">规格</p>
                <p class="cart-price ">￥12</p>
                <p class="cart-num">
                    <span class=" cart-text " >-</span>
                    <span class="padding-10">1</span>
                    <span class="cart-text" >+</span>
                </p>
                <p class="cart-total ">￥12</p>
                <p class="cart-handle  ">删除 购买 收藏</p>
            </li>
            <li class="cart-lists">
                <el-checkbox class="cart-checkbox"></el-checkbox>
                <img  class="margin-l-20 cart-listsimg margin-r-40" src="./image/wallcloth-4.jpg"/>
                <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                <p class="cart-scale ">规格</p>
                <p class="cart-price ">￥12</p>
                <p class="cart-num">
                    <span class=" cart-text " >-</span>
                    <span class="padding-10">1</span>
                    <span class="cart-text" >+</span>
                </p>
                <p class="cart-total ">￥12</p>
                <p class="cart-handle  ">删除 购买 收藏</p>
            </li>
            <li class="cart-lists">
                <el-checkbox class="cart-checkbox"></el-checkbox>
                <img  class="margin-l-20 cart-listsimg margin-r-40" src="./image/wallcloth-4.jpg"/>
                <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                <p class="cart-scale ">规格</p>
                <p class="cart-price ">￥12</p>
                <p class="cart-num">
                    <span class=" cart-text " >-</span>
                    <span class="padding-10">1</span>
                    <span class="cart-text" >+</span>
                </p>
                <p class="cart-total ">￥12</p>
                <p class="cart-handle  ">删除 购买 收藏</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            count: 0,
            num: 1,
            num1: 1,
            checkAll: false,
            isIndeterminate: true
        }
    },
    methods: {
        load () {
            this.count += 2
        },
        handleCheckAllChange (val) {
            this.isIndeterminate = false
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
