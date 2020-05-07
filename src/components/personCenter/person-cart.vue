<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">我的购物车</span>
        </p>
        <ul class="cart-title-lists clearfix">
            <li class="cart-title-list">商品图片 </li>
            <li class="cart-title-list">商品名称 </li>
            <li class="cart-title-list">商品规格 </li>
            <li class="cart-title-list" style="width:12%;">商品单价 </li>
            <li class="cart-title-list">商品数量 </li>
            <li class="cart-title-list">商品金额 </li>
            <li class="cart-title-list">商品操作 </li>
        </ul>
        <ul class="cart-list margin-t-10"  style="height:500px;overflow:auto">
            <!-- 根据用户的id获取购物车里的内容，得到购物车的商品id，再去商品购物表中拿取商品信息 -->
            <li class="cart-lists" v-for="(item, index) in cartlists" :key="index">
                <p class="padding-10 bto-cart-title " title="点击获取商品信息" @click="getgoodslist(item.goods_id)">商品{{++index}}</p>
                <!-- 购物车的id与我们点开的商品id一致，才能去渲染list-->
                <div  class=" clearfix" v-for="(items, index) in goodslist" :key="index">
                    <div v-show="item.goods_id == items.goods_id">
                        <el-checkbox class="cart-checkbox"></el-checkbox>
                        <img  class="margin-l-20 cart-listsimg margin-r-40" :src="'http://127.0.0.1:3000/' + items.goods_img"/>
                        <p class="cart-name text-ellipsis ">{{items.goods_name}}</p>
                        <p class="cart-scale ">{{items.good_marque}}</p>
                        <p class="cart-price "  style="width:12%;">￥{{items.goods_price}}</p>
                        <p class="cart-num">
                            <span class=" cart-text " >-</span>
                            <span class="padding-10">1</span>
                            <span class="cart-text" >+</span>
                        </p>
                        <p class="cart-total ">￥{{items.goods_marque}}</p>
                        <p class="cart-handle  ">
                            <span class="" @click="deletecartgoods(items.goods_id)">删除 </span>
                            <router-link to='/attribute'><span @click="getgoodsdetail(item.goods_id)"> 购买 </span></router-link>
                            <span @click="addcollect(items.goods_id)"> 收藏</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            count: 0,
            num: 1,
            num1: 1,
            checkAll: false,
            isIndeterminate: true
        }
    },
    methods: {
        // 加入收藏夹
        addcollect (id) {
            axios({
                params: {
                    goods_id: id,
                    user_id: JSON.parse(window.localStorage.getItem('userinfo')).id
                },
                method: 'get',
                url: 'http://127.0.0.1:3000/addcollect'
            }).then((res) => {
                if (res.data.status === 200) {
                    // 一加入购物车就获取列表,根据user_id获取购物车
                    this.$message({
                        message: '加入收藏夹成功',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    // 一加入购物车就获取购物车列表根据user_id获取购物车
                    this.$message({
                        message: '该商品已加入过收藏夹',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        load () {
            this.count += 2
        },
        handleCheckAllChange (val) {
            this.isIndeterminate = false
        },
        getgoodslist (id) {
            console.log(id)
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 删除购物车某件商品
        deletecartgoods (id) {
            // 删除完成 再重新请求渲染
            this.$store.dispatch('deletecartgoods', id)
            let idss = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getcartlist', idss)
        }
    },
    computed: {
        cartlists () {
            return this.$store.state.wall.cartlist
        },
        goodslist () {
            return this.$store.state.wall.goodsdetaillist
        }
    },
    mounted () {
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
