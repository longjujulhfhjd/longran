<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">未付款商品</span>
        </p>
          <p class="text-red padding-10 el-icon-warning">取消支付的订单只能重新下单</p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">实付款 </li>
            <li class="cart-title-list">交易状态 </li>
            <li class="cart-title-list">交易操作 </li>
        </ul>
        <ul class="cart-list margin-t-10"  v-infinite-scroll style="height:500px;overflow:auto">
            <li class="cart-lists clearfix"    v-for="(item, index) in orderlist" :key="index" >
                <p class="padding-10 bto-cart-title" @click="getgoosdetail(item.goods_id)">待支付订单{{++index}}</p>
                <div v-for="(items, index) in goodslist" :key="index">
                    <div v-show="item.goods_id == items.goods_id">
                        <router-link  to='/attribute'><img  title="点击购买商品" class="margin-l-20 cart-listsimg margin-r-40" @click="getgoosdetail(items.goods_id)"  :src="'http://127.0.0.1:3000/' + items.goods_img"/></router-link>
                        <p class="cart-name text-ellipsis ">{{items.goods_name}}</p>
                        <p class="cart-num">
                            <span class="padding-10">{{item.orders_mount}}</span>
                        </p>
                        <p class="cart-total ">￥{{item.orders_total}}</p>
                        <p class="cart-handle  text-red">买家取消付款</p>
                        <p class="cart-handle ">
                            <span @click="deleteunpay(item.orders_id)">删除订单</span>
                        </p>
                    </div>
                </div>
            </li>
            <!-- <p class="font-18 color-grey text-c" v-show=" length = 0">暂无订单</p> -->
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
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
                    this.$store.dispatch('getunpayorderlist', ids)
                    this.$message({
                        message: '删除订单成功',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$message({
                        message: '留言失败',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
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
        this.$store.dispatch('getunpayorderlist', id)
        // let length = this.$store.state.order.orderlist.length
        // this.length = length
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
