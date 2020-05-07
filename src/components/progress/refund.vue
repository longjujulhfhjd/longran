<template>
    <div class="progress-Refund">
        <p class="text-red padding-10 el-icon-warning">超过4小时无法进行退货处理，商家已开始生产</p>
        <div  v-for="(item, index) in orderlist" :key="index">
            <p class="padding-20 " @click="getgoosdetail(item.goods_id)">查看所需要退款的商品</p>
            <div  v-for="(items, index) in goodslist" :key="index">
                <div  v-show="item.goods_id == items.goods_id">
                    <div class="clearfix padding-b-20" style="border-bottom:1px solid #ccc;">
                        <img class="fl progress-Refundimg" :src="'http://127.0.0.1:3000/' + items.goods_img"/>
                        <div class="fl margin-l-20">
                            <p class="font-18 padding-10">{{items.goods_name}}</p>
                            <p class="font-18 padding-10 text-red"><span class="color-grey">价格：</span>￥{{items.goods_price}}</p>
                            <p class="font-14 padding-10"><span class="color-grey">数量：</span>{{item.orders_mount}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <P class="font-18 padding-10">选择服务类型</P>
        <ul class="refund-class-list clearfix margin-t-30" >
            <li  class="refund-class-lists">
                <img class="fl margin-t-15" src="./image/class-one.png"/>
                <div class="fl margin-l-5" style="width:80%;">
                    <p class="font-18 text-weight padding-tb-10 ">我要退款(无需退货)</p>
                    <p class="color-grey ">没收到货，或与卖家协商同意不用退货只退款</p>
                </div>
            </li>
            <!-- <li  class="refund-class-lists">
                <img class="fl margin-t-15" src="./image/class-two.png"/>
                <div class="fl margin-l-5" style="width:80%;">
                    <p class="font-18 text-weight padding-tb-10 ">我要退货退款</p>
                    <p class="color-grey ">已收到货，需要退还收到的货物</p>
                </div>
            </li>
            <li  class="refund-class-lists">
                <img class="fl margin-t-15" src="./image/class-three.png"/>
                <div class="fl margin-l-5" style="width:80%;">
                    <p class="font-18 text-weight padding-tb-10 ">我要换货</p>
                    <p class="color-grey ">已收到货，需要更换已收到的货物</p>
                </div>
            </li> -->
        </ul>
        <div class="margin-t-20">
            <el-form :model="registerForms"  ref="registerForms" :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="退款说明" prop="descript">
                    <el-input type="textarea" v-model="registerForms.descript" :placeholder="descript"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <span class="skin-bto-hover margin-20" @click="tuikuan('registerForms')">提交</span>
        <!-- <router-link to='/returnsuccess'>
        <span class="skin-bto-hover margin-20">提交</span>
        </router-link> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        var Descript = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('退款说明不能为空'))
            } else {
                callback()
            }
        }
        return {
            descript: '请输入邮退款说明',
            labelPosition: 'right',
            registerForms: {
                descript: ''
            },
            rules: {
                descript: [{
                    validator: Descript,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        // 获取商品详情
        getgoosdetail (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        tuikuan (formName) {
            this.$refs[formName].validate((valid) => {
                console.log(window.localStorage.getItem('tuikuanid'))
                console.log(this.registerForms.descript)
                if (valid) {
                    let data = {
                        id: window.localStorage.getItem('tuikuanid'),
                        descript: this.registerForms.descript
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/sendtuikuan',
                        method: 'get',
                        params: {
                            data
                        }
                    }).then((res) => {
                        window.location.href = '/personCenter/personrefund'
                        window.localStorage.removeItem('tuikuanid')
                        if (res.data.status === 200) {
                            this.$message({
                                message: '请联系商家退款',
                                center: true,
                                type: 'success',
                                duration: 2000
                            })
                        } else {
                            // 登录失败提示信息
                            this.$message({
                                message: '退款失败，时间已超过4小时',
                                center: true,
                                type: 'error',
                                duration: 2000
                            })
                        }
                    })
                } else {
                    // 登录失败提示信息
                    this.$message({
                        message: '请填写退款原因',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
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
        let id = window.localStorage.getItem('tuikuanid')
        this.$store.dispatch('orderget', id)
    }
}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
