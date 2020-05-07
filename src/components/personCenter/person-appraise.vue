<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">待评价商品</span>
        </p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">订单金额 </li>
            <li class="cart-title-list">商品操作 </li>
        </ul>
        <ul class="cart-list margin-t-10" style="height:500px;overflow:auto" v-infinite-scroll>
            <li class="cart-lists clearfix"  v-for="(item, index) in orderlist" :key="index">
                <p class="padding-10 bto-cart-title" @click="getgoosdetail(item.goods_id)">等待评价订单{{++index}}<span class="text-r">订单编号：{{item.orders_id}}</span></p>
                <div  v-for="(items, index) in goodslist" :key="index">
                    <div v-show="item.goods_id == items.goods_id">
                        <router-link  to='/attribute'><img  title="点击购买商品" class="margin-l-20 cart-listsimg margin-r-40" @click="getgoosdetail(items.goods_id)"  :src="'http://127.0.0.1:3000/' + items.goods_img"/></router-link>
                        <p class="cart-name text-ellipsis ">{{items.goods_name}}</p>
                        <p class="cart-num">
                            <span class="padding-10">{{item.orders_mount}}</span>
                        </p>
                        <p class="cart-total ">￥{{item.orders_total}}</p>
                        <p class="cart-handle" @click="pingjia(item.orders_id,item.goods_id)">评价</p>
                    </div>
                </div>
             </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        // 获取商品详情
        getgoosdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 去评价
        pingjia (orderid, goodsid) {
            // 将订单的id存起来
            window.localStorage.setItem('pingjiaorderid', orderid)
            window.localStorage.setItem('pingjiagoodsid', goodsid)
            window.location.href = '/shopprogress/appraise'
        }
    },
    computed: {
        orderlist () {
            return this.$store.state.order.orderlist
        },
        goodslist () {
            return this.$store.state.wall.goodsdetaillist
        }
    },
    mounted () {
        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
        this.$store.dispatch('getpingjiaorderlist', id)
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
