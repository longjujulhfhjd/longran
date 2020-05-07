<template>
    <div class="longran-Detail clearfix" >
        <p class="text-red padding-10 el-icon-warning text-c">同一品类商品，还请一次性生成订单</p>
        <div v-for="(item, index) in gooddetaillist" :key="index">
            <div class="detail-img fl">
                <img  :src="'http://127.0.0.1:3000/'+ item.goods_img" />
            </div>
            <div class="detail-detail fr" >
                <p class="detail-title margin-t-20 font-16 overflow">{{item.goods_name}}</p>
                <p class="detail-price color-grey padding-tb-20" style="height:36px;">商品价格<span class="text-red font-20 padding-l-10">￥{{item.goods_price}}</span></p>
                <p class="padding-tb-20 color-grey">商品数量说明：<span class="text-red">数量 1 = 1 平方米</span></p>
                <p class="padding-tb-20  color-grey">房屋的平方怎么量：<span class="text-red">墙面的宽度 * 墙面的高度</span> </p>
                <div class=" margin-t-20 clearfix">
                    <span class="padding-r-15  color-grey">购买数量: </span>
                    <el-input-number v-model="num" @change="numparent" :min="1" :max="200" label="描述文字"></el-input-number>
                </div>
                <router-link  to='/detail'>
                     <p class="margin-20 join-cart skin-bto-hover text-decoration-none"  @click="getgoodsdetail(item.goods_id)">
                        确定
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import banner1 from './img/banner_img1.jpg'
import baoxiu from './img/baoxiu.png'
export default {
    data () {
        return {
            banner1,
            baoxiu,
            num: 1,
            dialogTableVisible: false
        }
    },
    methods: {
        numparent () {
            window.localStorage.setItem('num', this.num)
        },
        // 获取商品详情
        getgoodsdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        selectLogs (data) {
            console.log(data)
        },
        // 获取选择的地址
        getokaddress (id) {
            this.$store.dispatch('getokdetail', id)
            this.dialogTableVisible = false
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
        this.$store.dispatch('getaddress', id)
    }
}
</script>

<style lang="less" scoped>
@import './Css/detail.less';

</style>
