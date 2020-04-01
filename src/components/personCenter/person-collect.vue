<template>
    <div>
        <ul v-infinite-scroll="load"  class="listshop-list text-c clearfix" style="height:500px;overflow:auto">
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
             <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
             <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
             <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
            <li class="listshop-lists">
                <img class="listshop-image padding-10" src='./image/wallcloth-4.jpg' />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">商品名称商品名称商品名称商品名称商品名称</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">￥320</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <router-link to='/cart'><p class="listshop-btn listjoin-cart">加入购物车</p></router-link>
                <router-link  to='/detail'><p class="listshop-btn list-detail">查看详情</p></router-link>
                <p title="移出收藏夹" class=" el-icon-delete  shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        load () {
            this.count += 2
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
