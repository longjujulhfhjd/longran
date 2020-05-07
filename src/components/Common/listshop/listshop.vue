<template>
    <div>
        <ul class="listshop-list text-c  clearfix">
            <li class="listshop-lists"  v-for="(item, index) in getclasstwolists" :key="index">
                <img class="listshop-image padding-10" :src="'http://127.0.0.1:3000/'+ item.goods_img" />
                <p class="margin-t-10 text-ellipsis padding-lr-10 padding-tb-5">{{item.goods_name}}</p>
                <p class="margin-t-10 font-12"><span class="text-red font-20">{{item.goods_price}}</span> 元 / 平方米</p>
                <div class="list-cover"></div>
                <p class="listshop-btn listjoin-cart"  @click="sendcart(item.goods_id)">加入购物车</p>
                <router-link  to='/attribute'><p class="listshop-btn list-detail"  @click="getgoodsdetail(item.goods_id)">立即购买</p></router-link>
                <p title="移入收藏夹" class="el-icon-star-off   shoucang" @click="addcollect(item.goods_id);changSemester(index)"   :class="{blue:i===index}"></p>
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
            banner1,
            i: 0
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
        changSemester (index) {
            this.i = index
        },
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
        }
    },
    mounted () {
    },
    computed: {
        // 获取二级分类列表
        getclasstwolists () {
            return this.$store.state.wall.classtwolist
        }
    }
}
</script>

<style >
.blue {
    color: red;
    border-color:red;
}
</style>
