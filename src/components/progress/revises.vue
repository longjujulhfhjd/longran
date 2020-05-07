<template>
    <div class="padding-50 margin-50" style="border:1px dashed rgb(223, 222, 222);" >
        <div class="padding-30" style="border:1px solid #ccc;">
            <p class="padding-10 text-red "><span class="el-icon-warning padding-r-10"></span>亲，请核对订单信息</p>
            <div class="clearfix padding-10"  v-for="(item, index) in orderlist" :key="index"  >
                <img class="revise-touimg fl"   :src="'http://127.0.0.1:3000/'+ item.goods_img" />
                <div class="fl margin-l-15 margin-t-20">
                    <p  class="padding-10 text-weight">{{item.goods_name}}</p>
                    <p  class="padding-10">共<span>{{num}}</span>商品，合计￥<span>{{orderstotal}}</span></p>
                </div>
            </div>
            <p class="padding-10">订单备注：<span class="text-red">{{orderdescript}}</span></p>
            <div  v-for="(item, index) in okaddresslist" :key="index">
                <p class="padding-10">姓名：<span>{{item.address_name}}</span></p>
                <p class="padding-10">电话：<span>{{item.address_tel}}</span></p>
                <p class="padding-10">地址：<span>{{item.address_area}}<span class="padding-l-5">{{item.address_add}}</span></span></p>
            </div>
        </div>
        <router-link to='/personCenter/personshipped'> <p class="skin-bto-hover   margin-10" >确认</p></router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            orderdescript: '',
            orderstotal: '',
            gridData: [{
                tel: '18286792321',
                name: '龙菊',
                address: '贵州省 毕节市 七星关区 麻园街道 30米大道三江依山雅苑'
            }, {
                tel: '18286792321',
                name: '龙菊',
                address: '贵州省 毕节市 七星关区 麻园街道 贵州工程应用技术学院'
            }, {
                tel: '18286792321',
                name: '龙菊',
                address: '重庆 重庆市 沙坪坝区 西永街道 永顺路7号菁英公寓11号楼'
            }, {
                tel: '18286792321',
                name: '龙菊',
                address: '贵州省 毕节市 纳雍县 雍熙街道 中岭镇水泥厂'
            }],
            dialogTableVisible: false,
            formLabelWidth: '120px',
            goodsprice: '',
            goodsname: '',
            num: ''
        }
    },
    methods: {
        getorderlist () {
            // 根据商品id获取商品
            let goodsid = window.localStorage.getItem('ordergoodsid')
            // 根据地址id获取收件人信息
            let addressid = window.localStorage.getItem('addressid')
            this.$store.dispatch('getgoodsdetail', goodsid)
            this.$store.dispatch('getokdetail', addressid)
        }
    },
    mounted () {
        // 确认订单信息
        this.getorderlist()
        let goodsname = window.localStorage.getItem('ordersname')
        let orderdescript = window.localStorage.getItem('orderdescript')
        this.orderdescript = orderdescript
        let num = window.localStorage.getItem('num')
        let orderstotal = window.localStorage.getItem('orderstotal')
        this.orderstotal = orderstotal
        this.goodsname = goodsname
        this.num = num
        let goodsprice = JSON.parse(window.localStorage.getItem('ordersprice'))
        this.goodsprice = goodsprice
        console.log(this.$store.state.order.orderlist)
    },
    computed: {
        getorderlists () {
            return this.$store.state.order.orderlist
        },
        // 获取选中地址信息
        okaddresslist () {
            return this.$store.state.personcenter.okaddressllist
        },
        // 获取order商品信息
        orderlist () {
            return this.$store.state.wall.goodsdetaillist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
