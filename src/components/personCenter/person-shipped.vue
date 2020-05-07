<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">待发货商品</span>
        </p>
        <p class="text-red padding-10 el-icon-warning">退款仅在4小时内有效，退款直接联系商家 电话、微信一致：18286792321</p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品单价 </li>
            <li class="cart-title-list">商品操作 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">实付款 </li>
            <li class="cart-title-list">交易状态 </li>
        </ul>
        <ul class="cart-list margin-t-10" style="height:500px;overflow:auto" v-infinite-scroll>
            <li class="cart-lists clearfix"   v-for="(item, index) in orderlist" :key="index">
                <p class="padding-10 bto-cart-title" @click="getgoosdetail(item.goods_id)">待发货订单{{++index}}</p>
                <div v-for="(items, index) in goodslist" :key="index">
                   <div v-show="item.goods_id == items.goods_id">
                        <router-link  to='/attribute'><img  @click="getgoosdetail(item.goods_id)"   class="margin-l-20 cart-listsimg margin-r-40" :src="'http://127.0.0.1:3000/' + items.goods_img"/></router-link>
                        <p class="cart-name text-ellipsis ">{{items.goods_name}}</p>
                        <p class="cart-price">￥{{items.goods_price}}</p>
                        <router-link to='/shopprogress/refund'><p class="cart-price" @click="tuikuan(item.orders_id)">退款</p></router-link>
                        <p class="cart-num">
                            <span class="padding-10">{{item.orders_mount}}</span>
                        </p>
                        <p class="cart-total ">￥{{item.orders_total}}</p>
                        <router-link to="/revises"> <p class="cart-handle">修改订单</p> </router-link>
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
            // length: ''
        }
    },
    methods: {
        // 获取商品详情
        getgoosdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 存取所需要退款的商品id
        tuikuan (id) {
            window.localStorage.setItem('tuikuanid', id)
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
        this.$store.dispatch('getdaifahuoorderlist', id)
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
