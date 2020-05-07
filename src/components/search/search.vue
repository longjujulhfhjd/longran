<template>
    <div class="padding-20">
        <div class="input-search padding-l-20">
            <span class="el-icon-search margin-r-20 font-22"></span>
            <input class="padding-l-10 search-input" type="input" placeholder="请输入所需要的商品名称"/>
            <span class="float-r search-btn" @click="sendsearch">搜索</span>
        </div>
        <p class="margin-t-20">查询结果如下:</p>
        <div class="margin-tb-20 maybe-like text-c text-red" style="position:relative;"><span class="xiantiao"></span><span class="text-red icontent font-18 ">你可能会喜欢 <i class="font-18 text-red icon-xihuan2 iconfont"></i></span></div>
        <router-view></router-view>
        <ul class="listshop-list text-c  clearfix">
            <li class="listshop-lists"   :key="index" v-for="(item,index) in goodslist">
                <img class="listshop-image padding-10" :src="'http://127.0.0.1:3000/'+ item.goods_img" />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">{{item.goods_name}}</p>
                <p class="margin-tb-10 font-12"><span class="text-red font-20">￥{{item.goods_price}}</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <p class="listshop-btn listjoin-cart"   @click="sendcart(item.goods_id)">加入购物车</p>
                <router-link  to='/attribute'><p class="listshop-btn list-detail"  @click="getgoodsdetail(item.goods_id)">立即购买</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang "></p>
                <p title="点赞" class="icon-xihuan iconfont dianzan "></p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import banner1 from './image/wallpoint-6.jpg'
import classImg from './image/wallcloth-1.jpg'
export default {
    data () {
        return {
            classImg,
            banner1
        }
    },
    methods: {
        // 商品详情
        getgoodsdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
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
        },
        sendsearch () {
            let htmls = document.querySelector('.search-input').value
            let data = {
                text: htmls
            }
            // 登录请求
            axios({
                // 登录接口
                url: 'http://127.0.0.1:3000/search',
                method: 'get',
                params: {
                    data
                }
            }).then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data.data)
                    this.$store.commit('getgoodslists', res.data.data)
                    // 登录成功提示信息
                    this.$message({
                        message: '搜索商品如下',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    // 登录失败提示信息
                    this.$message({
                        message: '没有搜索到该商品',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    },
    computed: {
        goodslist () {
            return this.$store.state.wall.goodslist
        }
    },
    mounted () {
        this.$store.dispatch('getgoodslist')
        return setTimeout(() => {
            this.$store.dispatch('getgoodslist')
        }, 1000)
    }
}
</script>

<style lang='less' scope>
@import url(./Css/search.less);
</style>
