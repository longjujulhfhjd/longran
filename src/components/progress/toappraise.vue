<template>
    <div class="toappraise-Longran">
        <span class="padding-r-10 el-icon-circle-check text-green">交易已经成功</span>
        <div class="margin-20"  v-for="(item, index) in orderlist" :key="index">
            <p class="padding-20" @click="getgoosdetail(item.goods_id)">查看收货商品详情</p>
            <div v-for="(items, index) in goodslist" :key="index">
               <div  v-show="item.goods_id == items.goods_id">
                    <div class="toappraise clearfix">
                        <img class="fl" :src="'http://127.0.0.1:3000/' + items.goods_img"/>
                        <div class="margin-l-20 fl" style="width:60%;" >
                            <p class=" font-16 margin-tb-10 " style="overflow:hidden;height:44px;">{{items.goods_name}}</p>
                            <p class=" margin-tb-10 " style="overflow:hidden;height:44px;">￥<span class="text-red  padding-lr-10 font-18">{{items.goods_price}}</span>元/平方米</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <router-link to="/personCenter/personappraise"><span class="skin-bto-hover">去评价</span></router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
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
        let id = window.localStorage.getItem('shouhuoid')
        this.$store.dispatch('orderget', id)
    }
}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
