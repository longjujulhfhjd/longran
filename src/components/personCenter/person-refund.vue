<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">退货商品</span>
        </p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">退款金额 </li>
            <li class="cart-title-list" style="width:20%;">申请时间 </li>
            <li class="cart-title-list">服务类型 </li>
            <li class="cart-title-list">退款状态 </li>
            <li class="cart-title-list" style="width:8%;">操作</li>
        </ul>
        <ul class="cart-list margin-t-10" v-infinite-scroll style="height:500px;overflow:auto">
            <li class="cart-lists clearfix" v-for="(item, index) in orderlist" :key="index">
                <p class="padding-10 bto-cart-title" @click="getgoosdetail(item.goods_id)">已退款商品订单{{++index}}</p>
                <div  v-for="(items, index) in goodslist" :key="index">
                    <div v-show="item.goods_id == items.goods_id">
                        <router-link  to='/attribute'><img  @click="getgoosdetail(item.goods_id)"  class="margin-l-20 cart-listsimg margin-r-40" :src="'http://127.0.0.1:3000/' + items.goods_img"/></router-link>
                        <p class="cart-name text-ellipsis ">{{items.goods_name}}</p>
                        <p class="cart-price ">￥{{item.orders_total}}</p>
                        <p class="cart-num"  style="width:20%;">
                            {{items.tuikuan_time|dateformat('YYYY-MM-DD HH:mm:ss')}}
                        </p>
                        <p class="cart-total ">仅退款</p>
                        <p class="cart-handle text-red" >
                            <span v-show="item.orders_station == 4">等待商家退款...</span>
                            <span v-show="item.orders_station == 5">退款成功</span>
                        </p>
                         <p class="cart-price " style="width:8%;" @click="deleteunpay(item.orders_id)">删除</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        // 删除订单信息
        deleteunpay (id) {
            axios({
                params: {
                    id: id
                },
                method: 'get',
                url: 'http://127.0.0.1:3000/deleteunpaylist'
            }).then((res) => {
                if (res.data.status === 200) {
                    let ids = JSON.parse(window.localStorage.getItem('userinfo')).id
                    this.$store.dispatch('gettuikuanorderlist', ids)
                    this.$message({
                        message: '删除已退款订单成功',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$message({
                        message: '删除已退款订单失败',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        // 获取商品详情
        getgoosdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
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
        this.$store.dispatch('gettuikuanorderlist', id)
        // let length = this.$store.state.order.orderlist.length
        // this.length = length
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
