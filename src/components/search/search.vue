<template>
    <div class="padding-20">
        <div class="input-search padding-l-20">
            <span class="el-icon-search margin-r-20 font-22"></span>
            <input class="padding-l-10" type="input" placeholder="请输入所需要的商品名称"/>
            <span class="float-r search-btn">搜索</span>
        </div>
        <p class="margin-t-20">查询结果如下:</p>
        <div class="margin-tb-20 maybe-like text-c text-red" style="position:relative;"><span class="xiantiao"></span><span class="text-red icontent font-18 ">你可能会喜欢 <i class="font-18 text-red icon-xihuan2 iconfont"></i></span></div>
         <ul class="listshop-list text-c  clearfix">
            <li class="listshop-lists">
                <img class="listshop-image padding-10" :src='classImg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link class="skin-bto-hover margin-t-10" to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link class="skin-bto-hover margin-t-10" to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" :src='classImg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link class="skin-bto-hover margin-t-10" to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link class="skin-bto-hover margin-t-10" to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" :src='classImg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link class="skin-bto-hover margin-t-10" to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link class="skin-bto-hover margin-t-10" to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" :src='classImg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link class="skin-bto-hover margin-t-10" to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link class="skin-bto-hover margin-t-10" to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" :src='classImg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link class="skin-bto-hover margin-t-10" to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link class="skin-bto-hover margin-t-10" to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
        </ul>
    </div>
</template>

<script>
import banner1 from './image/wallpoint-6.jpg'
import classImg from './image/wallcloth-1.jpg'
export default {
    data () {
        return {
            classImg,
            banner1
        }
    }
}
</script>

<style lang='less' scope>
@import url(./Css/search.less);
</style>
