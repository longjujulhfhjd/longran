<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">所有评价过商品</span>
        </p>
        <ul class="allappraise-list" style="height:700px;overflow:auto" v-infinite-scroll>
            <li class="allappraise-lists" v-for="(item, index) in allappraiselist" :key="index" >
                <p></p>
                <div class="clearfix">
                    <img class="allappraise-touimg"  :src="'http://127.0.0.1:3000/' + img"/>
                    <p class="fl margin-l-15 margin-t-20">{{name}}</p>
                </div>
                <p class=" margin-t-10">
                    <span class=" color-grey">{{item.appraise_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
                    <span class="padding-l-20 text-red" ><span @click="allappraise(item.goods_id);dialogTableVisible = true">点击查看评价商品详情</span></span></p>
                <p class="padding-tb-10"><span class="color-grey">评价商品：</span>{{item.goodspingjia}}</p>
                <p class="padding-tb-10"><span class="color-grey">评价服务：</span>{{item.serverpingjia}}</p>
                <ul class="clearfix margin-tb-20">
                    <li class="appraise-detail-lists">
                        <span class="text-red">*</span><span> 描述相符</span>
                        <el-rate class="margin-t-10 disabled  margin-l-10" v-model="item.appraise_descript" show-text> </el-rate>
                    </li>
                    <li class="appraise-detail-lists margin-l-20">
                        <span class="text-red">*</span><span> 卖家服务</span>
                        <el-rate class="margin-t-10" disabled v-model="item.appraise_server" show-text> </el-rate>
                    </li>
                     <li class="appraise-detail-lists  margin-l-20">
                        <span class="text-red">*</span><span> 物流服务</span>
                        <el-rate class="margin-t-10" disabled v-model="item.appraise_wuliu" show-text> </el-rate>
                    </li>
                </ul>
                <p class="margin-t-10"><i class="icon-dianzan1 iconfont" style="font-size:24px !important;"></i>点赞<span>0</span>次</p>
            </li>
            <el-dialog title="评价的商品详情" :visible.sync="dialogTableVisible" class="clearfix">
                <div v-for="(item, index) in goodslist" :key="index" >
                   <div ><span class="margin-b-30">商品图片： </span></div>
                    <router-link  to='/attribute'><img  title="点击购买商品"  class="margin-l-50 margin-t-10" style="width:150px;height:150px;" @click="getgoosdetail(item.goods_id)"  :src="'http://127.0.0.1:3000/' + item.goods_img"/></router-link>
                    <p class="padding-10">商品名称：{{item.goods_name}}</p>
                    <p class="padding-10">商品价格：￥{{item.goods_price}}</p>
                </div>
            <el-button type="submit" class="skin-bto-hover fr margin-r-20" @click="dialogTableVisible = false">关闭</el-button>
        </el-dialog>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            appraise_descript: null,
            appraise_wuliu: null,
            appraise_server: null,
            img: '',
            name: '',
            dialogTableVisible: false
        }
    },
    methods: {
        // 获取商品详情
        getgoosdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 获取已购买过的商品,就是评价过的商品
        getallappraise () {
            let id = JSON.parse(window.localStorage.getItem('userinfo')).id
            axios({
                params: {
                    id: id
                },
                method: 'get',
                url: 'http://127.0.0.1:3000/getallappraise'
            }).then((res) => {
                this.$store.commit('getAllappraiseList', res.data.data)
            })
        },
        // 获取商品的详情
        allappraise (id) {
            this.$store.dispatch('getgoodsdetail', id)
        }
    },
    mounted () {
        this.getallappraise()
        let img = JSON.parse(window.localStorage.getItem('userinfo')).img
        let name = JSON.parse(window.localStorage.getItem('userinfo')).name
        this.img = img
        this.name = name
    },
    computed: {
        allappraiselist () {
            return this.$store.state.order.allappraiselist
        },
        goodslist () {
            return this.$store.state.wall.goodsdetaillist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
