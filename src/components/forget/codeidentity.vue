<template>
    <div class="longran-Codeidentity text-c">
        <p class="font-28 text-c">验证身份</p>
        <el-form :model="forgetForms" ref="forgetForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="90px">
            <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="forgetForms.email" :placeholder="email"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码"  class="code-style" prop="code">
                <el-input type="text" v-model="forgetForms.code" :placeholder="code"></el-input>
                <div class="skin-bto code-btn" @click="getCode()">获取验证码</div>
            </el-form-item>
        </el-form>
        <span class="skin-bto next-btn " @click="nextNewPassword('forgetForms')">下一步</span>
    </div>
</template>

<script>
import {regEmail} from './js/reg.js'
import axios from 'axios'
export default {
    data () {
        var Emali = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入邮箱'))
            } else if (!regEmail.test(value)) {
                callback(new Error('邮箱格式不正确'))
            } else {
                callback()
            }
        }
        var Code = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('短信验证证码不能为空'))
            } else {
                callback()
            }
        }
        return {
            email: '请输入邮箱',
            code: '短信验证码',
            labelPosition: 'right',
            forgetForms: {
                email: '',
                code: ''
            },
            rules: {
                email: [{
                    validator: Emali,
                    required: true,
                    trigger: 'blur'
                }],
                code: [{
                    validator: Code,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        // 获取验证码
        getCode () {
            let email = this.forgetForms.email
            axios({
                url: 'http://127.0.0.1:3000/sendcode',
                method: 'get',
                params: {
                    email
                }
            }).then((res) => {
                console.log(res)
                if (res.data.status === 200) {
                    this.$message({
                        message: '验证码发送成功',
                        center: true,
                        type: 'success',
                        duration: 2000,
                        // 关闭提示信息的回调
                        onClose: () => {
                            // _this.change()
                        }
                    })
                } else {
                    this.$message({
                        message: '验证码发送失败',
                        center: true,
                        type: 'error',
                        duration: 2000,
                        // 关闭提示信息的回调
                        onClose: () => {
                        }
                    })
                }
            })
        },
        // 下一步设置新密码
        nextNewPassword (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    window.localStorage.setItem('email', this.forgetForms.email)
                    console.log(window.localStorage.getItem('email'))
                    // 注册
                    let data = {
                        email: this.forgetForms.email,
                        code: this.forgetForms.code
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/forget',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        console.log(res)
                        if (res.data.status === 200) {
                            window.location.href = '/forget/newpassword'
                            this.$message({
                                message: '验证成功',
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
                        message: '请将信息填写完整！',
                        center: true,
                        type: 'error',
                        duration: 2000,
                        // 关闭提示信息的回调
                        onClose: () => {
                        }
                    })
                    return false
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/forget.less';

</style>
