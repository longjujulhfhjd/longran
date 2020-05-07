<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">待收货商品</span>
        </p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">实付款 </li>
            <li class="cart-title-list">交易操作 </li>
        </ul>
        <ul class="cart-list margin-t-10"  v-infinite-scroll style="height:500px;overflow:auto">
            <li class="cart-lists clearfix"   v-for="(item, index) in orderlist" :key="index" >
                <p class="padding-10 bto-cart-title" @click="getgoosdetail(item.goods_id)">等待收货订单{{++index}}</p>
                <div v-for="(items, index) in goodslist" :key="index">
                    <div v-show="item.goods_id == items.goods_id">
                        <router-link  to='/attribute'><img  @click="getgoosdetail(item.goods_id)"   class="margin-l-20 cart-listsimg margin-r-40" :src="'http://127.0.0.1:3000/' + items.goods_img"/></router-link>
                        <p class="cart-name text-ellipsis ">{{items.goods_name}}</p>
                        <p class="cart-num">
                            <span class="padding-10">￥{{item.orders_total}}</span>
                        </p>
                        <p class="cart-total ">{{item.orders_mount}}</p>
                        <p class="cart-handle" @click="shouhuo(item.orders_id)">确认收货</p>
                    </div>
                </div>
            </li>
            <!-- <p class="font-18 color-grey text-c" v-show=" length = 0">暂无待收货商品</p> -->
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
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
    methods: {
        // 获取商品详情
        getgoosdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 确认收货
        shouhuo (id) {
            axios({
                params: {
                    id: id
                },
                method: 'get',
                url: 'http://127.0.0.1:3000/handshouhuo'
            }).then((res) => {
                if (res.data.status === 200) {
                    // 再渲染一下页面
                    window.localStorage.setItem('shouhuoid', id)
                    let ids = JSON.parse(window.localStorage.getItem('userinfo')).id
                    this.$store.dispatch('getshouhuoorderlist', ids)
                    this.$message({
                        message: '收货成功',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                    window.location.href = '/toappraise'
                } else {
                    this.$message({
                        message: '收货失败',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    },
    mounted () {
        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
        this.$store.dispatch('getshouhuoorderlist', id)
        return setTimeout(() => {
            this.$store.dispatch('getshouhuoorderlist', id)
        }, 1000)
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
