<template>
    <div class="longran-Aboutus">
        <div class="aboutus-api">
            <img class="aboutus-img" src="./image/map.png"/>
        </div>
        <p class="padding-10 padding-l-20 font-18 text-red text-weight"><span class="el-icon-location-outline"></span>贵州省纳雍县阳光星城大唐果酒店上行30米(复制地址点击搜索)</p>
        <a href="https://map.baidu.com/mobile/webapp/index/index/" class="serch-about skin-bto-hover">搜索</a>
        <div class="leave-message clearfix">
            <p class="font-14 padding-20">如果你想装修可以找我们，留下你的信息。</p>
            <p class="font-18 padding-l-10">请留言:</p>
            <p class="margin-tb-20 maybe-like text-c text-red" style="position:relative;"><span class="xiantiao"></span><span class="text-red icontent font-18 ">给我们的留言 <i class="font-18 text-red icon-jianyishu iconfont"></i></span></p>
            <el-form :model="ruleForm"  ref='ruleForm'  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="150px">
                <el-form-item label="姓名" prop="name">
                    <el-input type="text" v-model="ruleForm.name" :placeholder="name"></el-input>
                </el-form-item>
                <el-form-item label="常用邮箱" prop="email">
                    <el-input type="text" v-model="ruleForm.email" :placeholder="email"></el-input>
                </el-form-item>
                <el-form-item label="常用联系电话" prop="tel">
                    <el-input type="text" v-model="ruleForm.tel" :placeholder="tel"></el-input>
                </el-form-item>
                <el-form-item label="内容" prop="info">
                    <el-input type="textarea" v-model="ruleForm.info" :placeholder="info"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="skin-bto-hover skin-bto-hover submit-message margin-l-30" :loding ="loding" @click="submitmessage('ruleForm')" > 提交留言 </el-button>
            <p class="margin-tb-20 maybe-like text-c text-red" style="position:relative;"><span class="xiantiao"></span><span class="text-red icontent font-18 ">留言 <i class="font-18 text-red icon-jianyishu iconfont"></i></span></p>
            <ul v-infinite-scroll style="height:500px;overflow:auto" class="message-detail-list clearfix">
                <li class="message-detail-lists"  :key="index" v-for="(item,index) in messagelists">
                    <p><span class=" font-14">留言的内容：</span></p>
                    <p class="padding-10">{{item.message_detail}}</p>
                    <div class="text-r">留言的时间：<span>{{item.message_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {
    regEmail,
    regTel
} from './js/reg.js'
export default {
    data () {
        var Email = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入邮箱'))
            } else if (!regEmail.test(value)) {
                callback(new Error('邮箱格式不正确'))
            } else {
                callback()
            }
        }
        var Tel = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入电话号码'))
            } else if (!regTel.test(value)) {
                callback(new Error('号码格式不正确'))
            } else {
                callback()
            }
        }
        var Info = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('留言内容不能为空'))
            } else {
                callback()
            }
        }
        var Name = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('姓名不能为空！'))
            } else {
                callback()
            }
        }
        return {
            loding: false,
            email: '请输入邮箱',
            tel: '请输入电话号码',
            info: '请输入留言内容',
            name: '请填写你的真实姓名',
            labelPosition: 'right',
            ruleForm: {
                email: '',
                tel: '',
                info: '',
                name: ''
            },
            rules: {
                email: [{
                    validator: Email,
                    required: true,
                    trigger: 'blur'
                }],
                tel: [{
                    validator: Tel,
                    required: true,
                    trigger: 'blur'
                }],
                info: [{
                    validator: Info,
                    required: true,
                    trigger: 'blur'
                }],
                name: [{
                    validator: Name,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        showBox (data) {
            this.change(false)
        },
        // 提交留言
        submitmessage (forname) {
            this.$refs[forname].validate((valid) => {
                if (valid) {
                    let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                    let data = {
                        id: id,
                        email: this.ruleForm.email,
                        tel: this.ruleForm.tel,
                        info: this.ruleForm.info,
                        name: this.ruleForm.name
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/sendmessage',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            this.$message({
                                message: '留言成功',
                                center: true,
                                type: 'success',
                                duration: 2000
                            })
                        } else {
                            this.$message({
                                message: '留言失败',
                                center: true,
                                type: 'error',
                                duration: 2000
                            })
                        }
                    })
                } else {
                    this.$message({
                        message: '请把表格填写完整！',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                    // this.loding = !this.loding
                    return false
                }
                return setTimeout(() => {
                    this.$store.dispatch('getmessage')
                }, 1000)
            })
        }
    },
    mounted () {
        this.$store.dispatch('getmessage')
    },
    computed: {
        messagelists () {
            return this.$store.state.message.messagelist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/aboutUs.less';

</style>
