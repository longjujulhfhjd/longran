<template>
    <div class="longran-Detail clearfix padding-50 margin-50" >
        <div>
            <p class="text-weight">收货地址:</p>
            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
                <ul class="received-address-list clearfix margin-t-10" >
                    <li class="received-address-lists padding-10" v-for="(item, index) in addresslist" :key="index" >
                        <P class="text-weight padding-b-10 address_id " title="点击此处选择地址" style="border-bottom:1px solid #ccc;" @click="getokaddress(item.address_id)"><span>{{item.address_area}}</span>(<span>{{item.address_name}}</span>收)</P>
                        <div class="margin-top-10 text-666 font-12">
                            <p class="padding-tb-5">{{item.address_add}}</p>
                            <p class="padding-tb-5">{{item.address_tel}}</p>
                        </div>
                        <span class="sanjiao"></span>
                        <span class="el-icon-check gou text-white"></span>
                    </li>
                </ul>
            </el-dialog>
            <div class="clearfix">
                <div class="received-address-lists fl padding-10"  v-for="(item, index) in okaddresslist" :key="index">
                    <P class="text-weight padding-b-10 " style="border-bottom:1px solid #ccc;"><span>{{item.address_area}}</span>(<span>{{item.address_name}}</span>收)</P>
                    <div class="margin-top-10 text-666 font-12">
                        <p class="padding-tb-5">{{item.address_add}}</p>
                        <p class="padding-tb-5">{{item.address_tel}}</p>
                    </div>
                    <span class="sanjiao"></span>
                    <span class="el-icon-check gou text-white"></span>
                </div>
                <p class=" margin-20 skin-bto-hover" @click="dialogTableVisible = true">选择收货地址</p>
            </div>
        </div>
        <div  v-for="(item, index) in gooddetaillist" :key="index">
            <div class="margin-t-20 clearfix">
                <img  class="fl" style="width:120px;height:120px;"  :src="'http://127.0.0.1:3000/'+ item.goods_img" />
                <div class="fl  margin-l-20" style="width:80%;">
                    <p class=" font-16 overflow padding-t-10 " id="order-goods_name">{{item.goods_name}}</p>
                    <p class=" color-grey padding-tb-10" style="height:36px;"><span class="text-red font-20 padding-l-10" >￥<span id="order-goods_price">{{item.goods_price}}</span></span></p>
                </div>
            </div>
            <p class="padding-10">购买数量：<span class="text-red padding-l-10 " >{{num}}</span></p>
            <p class="padding-10">配送方式：<span class="text-red padding-l-10 ">快递免邮</span></p>
            <div class="padding-10">
                <p class="margin-b-10">订单备注:</p>
                <el-input type="text" v-model="goods_descript" placeholder="选填，请先和商家协商一致"></el-input>
                </div>
            <p class="detail-alear  margin-t-10 color-grey">增值保障<span class="padding-l-10 color-black"><img class="inline-block padding-r-5"  :src="baoxiu"/>终身保修</span></p>
            <p class="detail-alear  margin-t-30 color-grey">温馨提示,破损包退换,一旦发货，无法退换</p>
            <p class="margin-20 text-r join-cart "><span class="color-grey">共<span></span >{{num}}件</span> 小计：<span class="text-red">￥<span id="order-goods_total">{{num * item.goods_price}}</span></span></p>
            <p class="margin-20 fr join-cart skin-bto-hover text-decoration-none" @click="sendorders(item.goods_id);getorder">提交订单</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import banner1 from './img/banner_img1.jpg'
import baoxiu from './img/baoxiu.png'
export default {
    data () {
        return {
            banner1,
            num: '',
            imgorder: '',
            goods_descript: '',
            baoxiu,
            dialogTableVisible: false
        }
    },
    methods: {
        // 提交订单信息
        sendorders (goodsid) {
            // 根据商品id 获取商品
            // 用户id获取选中的地址
            // 根据用户id获取
            let id = JSON.parse(window.localStorage.getItem('userinfo')).id
            let addressid = JSON.parse(window.localStorage.getItem('addressid'))
            let orderstotal = document.querySelector('#order-goods_total').innerHTML
            let ordersmount = window.localStorage.getItem('num')
            window.localStorage.setItem('orderstotal', orderstotal)
            window.localStorage.setItem('ordergoodsid', goodsid)
            window.localStorage.setItem('orderdescript', this.goods_descript)
            let ordersdescript = this.goods_descript
            let data = {
                // 商品的id
                goods_id: goodsid,
                user_id: id,
                address_id: addressid,
                orders_mount: ordersmount,
                orders_total: orderstotal,
                orders_descript: ordersdescript

            }
            axios({
                url: 'http://127.0.0.1:3000/sendorder',
                method: 'get',
                params: {
                    data
                }
            }).then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data.data)
                    // 根据用户的id,获取最新的一个订单信息
                    window.location.href = '/shopprogress/pay'
                    this.$message({
                        message: '正在生成订单',
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
        },
        // 获取订单信息
        getorder () {
            let id = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getorderlist', id)
        },
        selectLogs (data) {
            console.log(data)
        },
        // 获取选择的地址
        getokaddress (id) {
            this.$store.dispatch('getokdetail', id)
            this.dialogTableVisible = false
            window.localStorage.setItem('addressid', id)
        }
    },
    computed: {
        gooddetaillist () {
            return this.$store.state.wall.goodsdetaillist
        },
        // 获取地址信息
        addresslist () {
            return this.$store.state.personcenter.addresslist
        },
        // 获取选中地址信息
        okaddresslist () {
            return this.$store.state.personcenter.okaddressllist
        }
    },
    mounted () {
        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
        let num = window.localStorage.getItem('num')
        let ordersname = document.querySelector('#order-goods_name').innerHTML
        let ordersprice = document.querySelector('#order-goods_price').innerHTML
        window.localStorage.setItem('ordersname', ordersname)
        window.localStorage.setItem('ordersprice', ordersprice)
        this.num = num
        this.$store.dispatch('getaddress', id)
    }
}
</script>

<style lang="less" scoped>
@import './Css/detail.less';

</style>
