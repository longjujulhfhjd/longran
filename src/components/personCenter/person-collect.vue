<template>
    <div>
        <p class="person-title">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">我的收藏</span>
        </p>
        <ul v-infinite-scroll  class="listshop-list text-c padding-t-10" style="height:500px;overflow:auto">
            <div class="fl margin-l-5 clearfix"  v-for="(item, index) in collectlist"  :key="index" style="width:24%;">
                <p class="padding-10" style="width:100%;" @click="getgoodslist(item.goods_id)">点击获取收藏商品{{++index}}详情</p>
                <div  v-for="(items, index) in goodslists" :key="index">
                    <div  v-show="item.goods_id == items.goods_id">
                        <div class="listshop-lists clearfix" style="width:100%;" >
                            <img class="listshop-image padding-10" :src="'http://127.0.0.1:3000/' + items.goods_img"/>
                            <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">{{items.goods_name}}</p>
                            <p class="margin-t-10 font-12"><span class="text-red font-20">￥{{items.goods_price}}</span> 元 / 平方米</p>
                            <p class=" font-12 padding-tb-10" style="color:rgb(250, 206, 124);">已有人点赞</p>
                            <div class="list-cover"></div>
                            <p class="listshop-btn listjoin-cart"  @click="sendcart(items.goods_id)">加入购物车</p>
                            <router-link  to='/detail'><p class="listshop-btn list-detail"  @click="getgoodsdetail(items.goods_id)">立即购买</p></router-link>
                            <p title="移出收藏夹"  @click="deletecollectgoods(items.goods_id)" class=" el-icon-delete  shoucang" ></p>
                            <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        // 商品详情
        getgoodsdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 获取商品信息 商品id获取
        getgoodslist (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 删除收藏夹商品
        deletecollectgoods (id) {
            // 删除完成 再重新请求渲染
            this.$store.dispatch('deletecollectgoods', id)
            let ids = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getcollect', ids)
        },
        // 加入购物车
        sendcart (ids) {
            axios({
                params: {
                    goods_id: ids,
                    user_id: JSON.parse(window.localStorage.getItem('userinfo')).id
                },
                method: 'get',
                url: 'http://127.0.0.1:3000/addcart'
            }).then((res) => {
                if (res.data.status === 200) {
                    // 一加入购物车就获取购物车列表,根据user_id获取购物车
                    this.$store.commit('getcartlist', res.data.data)
                    this.$message({
                        message: '加入购物车成功',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    // 一加入购物车就获取购物车列表根据user_id获取购物车
                    this.$message({
                        message: '该商品已加入购物车',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    },
    computed: {
        collectlist () {
            // 获取存储在server里的state里的serverlist的数据，拿到页面上渲染
            return this.$store.state.wall.collectlist
        },
        goodslists () {
            return this.$store.state.wall.goodsdetaillist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
