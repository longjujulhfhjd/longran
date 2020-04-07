<template>
    <div class="longran-Login">
        <p class="font-28">登 录</p>
        <el-form class="login-style"  ref='loginFrom'  :rules="rules"  :label-position="labelPosition" label-width="80px" :model="loginFrom">
            <el-form-item label="用户名" prop="email">
                <el-input type="text" v-model="loginFrom.email" :placeholder="email"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="pwd">
                <el-input type="password" v-model="loginFrom.pwd" :placeholder="pwd"></el-input>
            </el-form-item>
        </el-form>
        <div class="forget-pwd clearfix margin-auto">
            <label class="fl login-label">
                <input type="checkbox" class="remember">
                是否记住密码?
            </label>
            <router-link skin-bto class="fr" to="/forget">
                忘记密码?
            </router-link>
        </div>
        <span  class="skin-bto btn-reginster" @click="tologin('loginFrom')" >登录</span>
        <router-link  class="skin-bto margin-l-20 btn-reginster" to="/register">
                立即注册
        </router-link>
    </div>
</template>

<script>
import {regEmail, regPwd} from './js/reg.js'
import axios from 'axios'
export default {
    data () {
        var Pwd = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入密码'))
            } else if (!regPwd.test(value)) {
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
        return {
            email: '请输入邮箱',
            pwd: '请输入密码',
            labelPosition: 'right',
            loginFrom: {
                email: '',
                pwd: ''
            },
            rules: {
                email: [{
                    validator: Emali,
                    required: true,
                    trigger: 'blur'
                }],
                pwd: [{
                    validator: Pwd,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        // 用户登录
        tologin (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 登录请求
                    let data = {
                        email: this.loginFrom.email,
                        pwd: this.loginFrom.pwd
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/login',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            window.location.href = '/personCenter'
                            // window.localStorage.setItem('userinfo', JSON.stringify(res.data.data.info))
                            // window.localStorage.setItem('token', JSON.stringify(res.data.data.token))
                            // this.$store.commit('changeInfo', res.data.data)
                            this.$message({
                                message: '登录成功！',
                                // message: '欢迎' + res.data.data.info.email,
                                center: true,
                                type: 'success',
                                duration: 2000
                            })
                        } else {
                            this.$message({
                                message: '登录出错',
                                center: true,
                                type: 'error',
                                duration: 2000
                            })
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/login.less';

</style>
