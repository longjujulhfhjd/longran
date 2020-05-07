<template>
    <div class="longran-Slide text-white">
        <ul class="slide-lists">
            <li title="打开购物车"   @click="getcart"  class="slide-list"  style="float:none;">
                <i class="font-18 el-icon-shopping-cart-full"  @click="drawer = true"></i>
            </li>
           <el-drawer
            title="我的购物车"
            :visible.sync="drawer"
            :append-to-body="true"
            :before-close="cartClose"
            size="30%">
            <ul v-infinite-scroll  class="cart-box clearfix infinite-list slide-cart-list" style="overflow:auto">
                <li  class="slide-cart-lists  infinite-list-item clearfix" v-for="(item, index) in cartlists" :key="index" >
                    <p class="padding-10 bto-cart-title " title="点击获取商品信息" @click="getgoodslist(item.goods_id)">购物车商品{{++index}}</p>
                    <div class="clearfix margin-t-10" v-for="(items, index) in goodslists" :key="index">
                        <div  v-show="item.goods_id == items.goods_id">
                            <div class="fl slide-cart-img " style="width:40%;height:100%;">
                                <img style="width:100%;height:100%;" :src="'http://127.0.0.1:3000/' + items.goods_img"/>
                            </div>
                            <div class="fr slide-cart-con" style="width:60%;height:100%;">
                                <p class="slide-cart-title text-ellipsis">{{items.goods_name}}</p>
                                <p class="slide-cart-price margin-t-20">
                                    <span class="text-red font-16">￥{{items.goods_price}}<span class="text-black">元/平方米</span></span>
                                    <span class="float-r delete-slidecart" @click="deletecartgoods(items.goods_id)">删除</span>
                                </p>
                            </div>
                        </div>
                   </div>
                </li>
                <!-- <div class="margin-t-10 clearfix padding-lr-10">
                    <p class="fl padding-l-30">总共有<span class="text-red font-16" v-for="(item, index) in cartlists" :key="index">{{item.length}}</span>件商品</p>
                    <div class="skin-bto-hover fr ">去结算</div>
                </div> -->
            </ul>
            </el-drawer>
            <li  title="打开客服会话"   class="slide-list server-bto"   @click="drawert = true" style="float:none;" >
                <i class="font-18 el-icon-service"></i>
            </li>
            <el-drawer
                class="text-c"
                title="客服会话"
                :visible.sync="drawert"
                direction='ltr'
                :append-to-body="true"
                :before-close="serverClose"
                @close='closedsever'
                size="30%">
                <ul class="server-box clearfix" style="height:450px;overflow:auto" v-infinite-scroll>
                    <li class="clearfix" style="width:100%;float:none;">
                       <img class="fl sever-img" src="./images/eyes-img3.png"/>
                       <div class="server-con">请问有什么可以帮助你的？客服小龙为您服务</div>
                   </li>
                    <li class="clearfix margin-t-10"  style="width:100%;float:none;"  :key="index" v-for="(item,index) in serverlists">
                       <img class="fl sever-img" src="./images/eyes-img3.png"/>
                       <div class="server-con">{{item.server_content}}</div>
                   </li>
                </ul>
                <div class="send-info">
                    <el-form :model="serverForms" :rules="rules"  ref="serverForms" style="width:70% !important;float:left;"  class="register-style margin-t-10" label-width="70px">
                        <el-form-item label="咨询"  prop="content">
                            <el-input type="text"  clearable v-model="serverForms.content" :placeholder="content">发送</el-input>
                        </el-form-item>
                    </el-form>
                    <span class="server-send skin-bto-hover margin-t-10" @click="qtsendserver('serverForms')">发送</span>
                </div>
            </el-drawer>
            <li title="收藏夹"   @click="getcollects" class="slide-list text-white" style="float:none;"><i @click="drawers = true" class="font-18 el-icon-star-off"></i></li>
            <el-drawer
            title="我的收藏夹"
            :visible.sync="drawers"
            :append-to-body="true"
            :before-close="collectClose"
            size="30%">
            <ul v-infinite-scroll  class="cart-box clearfix infinite-list slide-cart-list" style="overflow:auto">
                <li  class="slide-cart-lists  infinite-list-item clearfix" v-for="(item, index) in collectlists" :key="index" >
                    <p class="padding-10 bto-cart-title " title="点击获取商品信息" @click="getgoodslist(item.goods_id)">收藏商品{{++index}}</p>
                    <div class="clearfix margin-t-10" v-for="(items, index) in goodslists" :key="index">
                        <div  v-show="item.goods_id == items.goods_id">
                            <div class="fl slide-cart-img " style="width:40%;height:100%;">
                                <img style="width:100%;height:100%;" :src="'http://127.0.0.1:3000/' + items.goods_img"/>
                            </div>
                            <div class="fr slide-cart-con" style="width:60%;height:100%;">
                                <p class="slide-cart-title text-ellipsis">{{items.goods_name}}</p>
                                <p class="slide-cart-price margin-t-20">
                                    <span class="text-red font-16">￥{{items.goods_price}}<span class="text-black">元/平方米</span></span>
                                    <span class="float-r delete-slidecart" @click="deletecollectgoods(items.goods_id)">删除</span>
                                </p>
                            </div>
                        </div>
                   </div>
                </li>
            </ul>
            </el-drawer>
            <li title="回到顶部"  class="slide-list slide-list-returntop" @click="returnTop" style="float:none;">
                <i class="font-18 el-icon-thumb"></i>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        var Content = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('内容不能为空'))
            } else {
                callback()
            }
        }
        return {
            length: '',
            drawers: false,
            drawer: false,
            drawert: false,
            count: 0,
            content: '请输入......',
            serverForms: {
                content: ''
            },
            rules: {
                content: [{
                    validator: Content,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        // 获取商品信息 商品id获取
        getgoodslist (id) {
            this.$store.dispatch('getgoodsdetail', id)
        },
        // 删除购物车商品
        deletecartgoods (id) {
            // 删除完成 再重新请求渲染
            this.$store.dispatch('deletecartgoods', id)
            let ids = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getcartlist', ids)
        },
        // 删除收藏夹商品
        deletecollectgoods (id) {
            // 删除完成 再重新请求渲染
            this.$store.dispatch('deletecollectgoods', id)
            let ids = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getcollect', ids)
        },
        // 获取购物车
        getcart () {
            let id = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getcartlist', id)
            this.drawers = false
            this.drawert = false
        },
        // 获取收藏夹
        getcollects () {
            let id = JSON.parse(window.localStorage.getItem('userinfo')).id
            this.$store.dispatch('getcollect', id)
            this.drawer = false
            this.drawert = false
        },
        collectClose (done) {
            this.$confirm('确定关闭收藏吗？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
        },
        // 关闭购物车
        cartClose (done) {
            this.$confirm('确定关闭购物车吗？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
        },
        // 关闭客服
        serverClose (done) {
            this.$confirm('确定关闭客服会话吗？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
        },
        closedsever () {
        },
        // 返回顶部
        returnTop () {
            let returetop = document.body.scrollTop || document.documentElement.scrollTop
            var time = setInterval(function () {
                returetop = returetop - 50
                document.body.scrollTop = returetop
                document.documentElement.scrollTop = returetop
                if (returetop <= 0) {
                    clearInterval(time)
                }
            }, 1)
        },
        // 发送会话信息
        qtsendserver (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                    let name = JSON.parse(window.localStorage.getItem('userinfo')).name
                    let img = JSON.parse(window.localStorage.getItem('userinfo')).img
                    let data = {
                        id: id,
                        name: name,
                        img: img,
                        content: this.serverForms.content
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/qtsendserver',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        console.log(res)
                        if (res.data.status === 200) {
                            this.$message({
                                message: '信息发送成功',
                                center: true,
                                type: 'success',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                }
                            })
                        } else {
                            this.$message({
                                message: '发送信息失败',
                                center: true,
                                type: 'error',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                }
                            })
                        }
                    })
                } else {
                    this.$message({
                        message: '请输入咨询内容',
                        center: true,
                        type: 'error',
                        duration: 2000,
                        // 关闭提示信息的回调
                        onClose: () => {
                        }
                    })
                    return false
                }
                return setTimeout(() => {
                    // 触发getserver方法去发送请求
                    let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                    this.$store.dispatch('qtgetserver', id)
                }, 1000)
            })
        },
        getscrool () {
            var Top = document.body.scrollTop || document.documentElement.scrollTop
            let divs = document.querySelector('.longran-Slide')
            if (Top > 500) {
                divs.style.display = 'block'
            } else {
                divs.style.display = 'none'
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.getscrool)
        // let id = JSON.parse(window.localStorage.getItem('userinfo')).id
        // this.$store.dispatch('qtgetserver', id)
    },
    computed: {
        serverlists () {
            // 获取存储在server里的state里的serverlist的数据，拿到页面上渲染
            return this.$store.state.server.serverlist
        },
        cartlists () {
            // 获取存储在server里的state里的serverlist的数据，拿到页面上渲染
            return this.$store.state.wall.cartlist
        },
        goodslists () {
            return this.$store.state.wall.goodsdetaillist
        },
        collectlists () {
            // 获取存储在server里的state里的serverlist的数据，拿到页面上渲染
            return this.$store.state.wall.collectlist
        }
    }
}
</script>
<style lang="less" scoped>
@import './Css/slide.less';

</style>
