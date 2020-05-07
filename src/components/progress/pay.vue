<template>
    <div class="padding-50 margin-50 ">
        <p class="el-icon-warning padding-l-10">请选择以下支付方式支付，并确认订单信息，待商家确认收到货款后处理您的订单!</p>
        <p class=" font-18 padding-l-20">您得该笔订单需支付金额<span class="padding-l-10  text-red font-36">￥{{orderstotal}}</span></p>
       <div class="clearfix">
            <div class="weixin-pay fl margin-t-10">
                <p class="font-18 margin-b-10">微信支付</p>
                <div class="weixinimg-box" ><img  src="./image/weixin.png"/></div>
            </div>
            <div class="zhifubao-pay fl margin-l-50">
                <p class=" font-18 margin-b-10">支付宝支付</p>
                <div class="zhifubaoimg-box"><img src="./image/zhifubao.jpg"/></div>
            </div>
        </div>
        <p class="padding-10 text-red">付款成功点击完成</p>
        <p class="skin-bto-hover margin-t-20 text-decoration-none" @click="unpayorder">取消付款</p>
        <router-link  class="skin-bto-hover margin-t-20 text-decoration-none" to="/revises">完成</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            orderstotal: ''
        }
    },
    mounted () {
        let orderstotal = window.localStorage.getItem('orderstotal')
        this.orderstotal = orderstotal
    },
    methods: {
        // 未付款商品订单信息
        unpayorder () {
            let ordergoodsid = window.localStorage.getItem('ordergoodsid')
            axios({
                params: {
                    id: ordergoodsid,
                    num: window.localStorage.getItem('num')
                },
                method: 'get',
                url: 'http://127.0.0.1:3000/unpayorder'
            }).then(function (res) {
                if (res.data.status === 200) {
                    window.location.href = '/personCenter/personunpaid'
                    this.$message({
                        message: '取消付款成功',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$message({
                        message: '取消付款失败',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
