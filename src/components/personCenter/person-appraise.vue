<template>
    <div>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品规格 </li>
            <li class="cart-title-list">商品单价 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">商品金额 </li>
            <li class="cart-title-list">商品操作 </li>
        </ul>
        <ul class="cart-list margin-t-10" style="height:500px;overflow:auto" v-infinite-scroll>
            <li class="cart-lists">
                <img  class="margin-l-20 cart-listsimg margin-r-40" src="./image/wallcloth-4.jpg"/>
                <p class="cart-name text-ellipsis ">龙冉壁纸</p>
                <p class="cart-scale ">规格</p>
                <p class="cart-price ">￥12</p>
                <p class="cart-num">
                    <span class="padding-10">1</span>
                </p>
                <p class="cart-total ">￥12</p>
                <router-link to="/shopprogress/appraise">  <p class="cart-handle">评价</p></router-link>
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
