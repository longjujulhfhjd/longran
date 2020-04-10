<template>
    <div class=" padding-30">
        <div class="padding-10">我们的招聘</div>
        <!-- <div class="block demo-basic--circle"> <el-avatar shape="square" :size="100" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar></div> -->
        <img class="application-img" src="./image/tou.jpg"/>
        <p class="padding-10">招聘者：<span>龙莎莎</span><span class="text-c padding-l-50">有意者请打：<span class="text-red font-18">13698539218</span></span></p>
        <p class="font-18 padding-10 text-weight">职位描述</p>
        <div class="font-16 padding-10">1、岗位职责：</div>
        <p class="padding-10 padding-l-20">有3年以上做工经验;能适应加班;能做背景墙;贴墙纸、墙衣、墙布、墙画;</p>
        <p class="font-16 padding-10">2、任职要求：</p>
        <p class="padding-10 padding-l-20">具备良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力，负责任</p>
        <p class="font-18 padding-10 text-weight">商家介绍</p>
        <p class="padding-10 padding-l-20">贵州鼎慧大数据科技有限公司成立于2015年1月，注册资金200万元人民币，公司位于金阳中天会展城B区，是一家专业从事智慧教育、智慧旅游、智能制造、大数据网络安全等产品开发、真正拥有自主知识产权和核心技术的高科技企业，公司以技术创新为动力、以人才培养为支撑，努力将公司建设成为国内乃至国际有影响力的大数</p>
        <p class="font-18 padding-10 text-weight">工作地址</p>
        <p class="padding-10 padding-l-20 font-18 text-orange text-weight"><span class="el-icon-location-outline"></span>贵州省纳雍县阳光星城大唐果酒店上行30米</p>
        <img style="height:500px; width:700px;" src="./image/api.png"/>
        <p class="padding-20">有意向的向我们预留个人联系，方便我们安排面试</p>
        <el-form :rules="rules"  ref='applicationruleForm'  :model="applicationruleForm" label-width="80px">
            <el-form-item label="邮箱"  prop="email">
                <el-input type="text" v-model="applicationruleForm.email" :placeholder="email" ></el-input>
            </el-form-item>
            <el-form-item label="电话号码"  prop="tel">
                <el-input type="text" v-model="applicationruleForm.tel" :placeholder="tel"></el-input>
            </el-form-item>
            <el-form-item label="工作情况"  prop="detail">
                <el-input type="textarea" v-model="applicationruleForm.detail" :placeholder="detail"></el-input>
            </el-form-item>
        </el-form>
        <el-button class="skin-bto-hover margin-l-30" @click="submitapplication('applicationruleForm')" > 提交 </el-button>
    </div>
</template>

<script>
import axios from 'axios'
import {regEmail, regTel} from './js/reg.js'
export default {
    data () {
        var Tel = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入电话号码'))
            } else if (!regTel.test(value)) {
                callback(new Error('密码格式不正确'))
            } else {
                callback()
            }
        }
        var Emali = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入邮箱'))
            } else if (!regEmail.test(value)) {
                callback(new Error('邮箱格式不正确'))
            } else {
                callback()
            }
        }
        var Detail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('该工作详情内容不能为空'))
            } else {
                callback()
            }
        }
        return {
            email: '请输入邮箱',
            tel: '请输入你的电话号码',
            detail: '请输入与该工作相关的近几年你的大体工作情况',
            labelPosition: 'right',
            applicationruleForm: {
                email: '',
                tel: '',
                detail: ''
            },
            rules: {
                email: [{
                    validator: Emali,
                    required: true,
                    trigger: 'blur'
                }],
                tel: [{
                    validator: Tel,
                    required: true,
                    trigger: 'blur'
                }],
                detail: [{
                    validator: Detail,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        // 提交应聘信息
        submitapplication (forname) {
            this.$refs[forname].validate((valid) => {
                this.loding = !this.loding
                if (valid) {
                    let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                    console.log(id.id)
                    let data = {
                        id: id,
                        email: this.applicationruleForm.email,
                        tel: this.applicationruleForm.tel,
                        info: this.applicationruleForm.info
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/sendapplication',
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
                    return false
                }
            })
        }
    },
    mounted () {
    }
}
</script>

<style lang="less" scoped>
@import './Css/application.less';
</style>
