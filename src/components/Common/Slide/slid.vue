<template>
    <div class="longran-Slide text-white">
        <ul class="slide-lists">
            <li title="打开购物车"   class="slide-list"   style="float:none;">
                <i class="font-18 el-icon-shopping-cart-full"  @click="drawer = true"></i>
            </li>
           <el-drawer
           title="我的购物车"
            :visible.sync="drawer"
            :append-to-body="true"
            :before-close="cartClose"
            size="30%">
            <ul v-infinite-scroll="load"  class="cart-box clearfix infinite-list slide-cart-list" style="overflow:auto">
                <li  class="slide-cart-lists  infinite-list-item clearfix">
                    <div class="fl slide-cart-img " style="width:40%;height:100%;">
                        <img style="width:100%;height:100%;" src='./images/banner-1.jpg'/>
                    </div>
                    <div class="fr slide-cart-con" style="width:60%;height:100%;">
                        <p class="slide-cart-title text-ellipsis">商品名商品名称商品名称商品名称商称商品名称商品名称商称商品名称商品名称商品名称商品名称称</p>
                        <p class="slide-cart-price margin-t-20">
                            <span class="text-red font-16">￥320<span class="text-black">元/平方米</span></span>
                            <span class="float-r delete-slidecart">删除</span>
                        </p>
                    </div>
                </li>
                <li  class="slide-cart-lists  infinite-list-item clearfix">
                    <div class="fl slide-cart-img " style="width:40%;height:100%;">
                        <img style="width:100%;height:100%;" src='./images/banner-1.jpg'/>
                    </div>
                    <div class="fr slide-cart-con" style="width:60%;height:100%;">
                        <p class="slide-cart-title text-ellipsis">商品名商品名称商品名称商品名称商称商品名称商品名称商称商品名称商品名称商品名称商品名称称</p>
                        <p class="slide-cart-price margin-t-20">
                            <span class="text-red font-16">￥320<span class="text-black">元/平方米</span></span>
                            <span class="float-r delete-slidecart">删除</span>
                        </p>
                    </div>
                </li>
                <li  class="slide-cart-lists  infinite-list-item clearfix">
                    <div class="fl slide-cart-img " style="width:40%;height:100%;">
                        <img style="width:100%;height:100%;" src='./images/banner-1.jpg'/>
                    </div>
                    <div class="fr slide-cart-con" style="width:60%;height:100%;">
                        <p class="slide-cart-title text-ellipsis">商品名商品名称商品名称商品名称商称商品名称商品名称商称商品名称商品名称商品名称商品名称称</p>
                        <p class="slide-cart-price margin-t-20">
                            <span class="text-red font-16">￥320<span class="text-black">元/平方米</span></span>
                            <span class="float-r delete-slidecart">删除</span>
                        </p>
                    </div>
                </li>
                <li  class="slide-cart-lists  infinite-list-item clearfix">
                    <div class="fl slide-cart-img " style="width:40%;height:100%;">
                        <img style="width:100%;height:100%;" src='./images/banner-1.jpg'/>
                    </div>
                    <div class="fr slide-cart-con" style="width:60%;height:100%;">
                        <p class="slide-cart-title text-ellipsis">商品名商品名称商品名称商品名称商称商品名称商品名称商称商品名称商品名称商品名称商品名称称</p>
                        <p class="slide-cart-price margin-t-20">
                            <span class="text-red font-16">￥320<span class="text-black">元/平方米</span></span>
                            <span class="float-r delete-slidecart">删除</span>
                        </p>
                    </div>
                </li>
                <li  class="slide-cart-lists  infinite-list-item clearfix">
                    <div class="fl slide-cart-img " style="width:40%;height:100%;">
                        <img style="width:100%;height:100%;" src='./images/banner-1.jpg'/>
                    </div>
                    <div class="fr slide-cart-con" style="width:60%;height:100%;">
                        <p class="slide-cart-title text-ellipsis">商品名商品名称商品名称商品名称商称商品名称商品名称商称商品名称商品名称商品名称商品名称称</p>
                        <p class="slide-cart-price margin-t-20">
                            <span class="text-red font-16">￥320<span class="text-black">元/平方米</span></span>
                            <span class="float-r delete-slidecart">删除</span>
                        </p>
                    </div>
                </li>
                <div class="margin-t-10 clearfix padding-lr-10">
                    <p class="fl padding-l-30">总共有<span class="text-red font-16">3</span>件商品</p>
                    <div class="skin-bto-hover fr ">去结算</div>
                </div>
            </ul>
            </el-drawer>
            <li  title="打开客服会话"  class="slide-list"  @click="drawert = true" style="float:none;" >
                <i class="font-18 el-icon-service"></i>
            </li>
            <el-drawer
                class="text-c"
                title="客服会话"
                :visible.sync="drawert"
                direction='ltr'
                :append-to-body="true"
                :before-close="serverClose"
                size="30%">
                <ul class="server-box clearfix" style="height:450px;overflow:auto" v-infinite-scroll="load">
                   <li class="clearfix" >
                       <img class="fl sever-img" src="./images/eyes-img3.png"/>
                       <div class="server-con">请问有什么可以帮助你的？客服小龙为您服务</div>
                   </li>
                    <li class="clearfix"  :key="index" v-for="(item,index) in serverlists">
                       <img class="fl sever-img" src="./images/eyes-img3.png"/>
                       <div class="server-con">{{item.server_content}}</div>
                   </li>
                </ul>
                <div class="send-info">
                    <el-form :model="serverForms" :rules="rules"  ref="serverForms" style="width:70% !important;float:left;"  class="register-style margin-t-10" label-width="70px">
                        <el-form-item label="咨询"  prop="content">
                            <el-input type="password" v-model="serverForms.content" :placeholder="content">发送</el-input>
                        </el-form-item>
                    </el-form>
                    <span class="server-send skin-bto-hover margin-t-10" @click="sendserver('serverForms')">发送</span>
                </div>
            </el-drawer>
            <router-link to="/collect" class="text-white"> <li title="收藏夹" class="slide-list" style="float:none;"><i class="font-18 el-icon-star-off"></i></li> </router-link>
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
            content: '请输入......',
            drawer: false,
            drawert: false,
            count: 0,
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
        sendserver (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                    let data = {
                        id: id,
                        content: this.serverForms.content
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/sendserver',
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
                                message: '验证失败',
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
                    this.$store.dispatch('getserver')
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
        this.$store.dispatch('getserver')
    },
    computed: {
        serverlists () {
            // 获取存储在server里的state里的serverlist的数据，拿到页面上渲染
            return this.$store.state.server.serverlist
        }
    }
}
</script>
<style lang="less" scoped>
@import './Css/slide.less';
</style>
