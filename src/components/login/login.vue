<template>
    <div class="longran-Login">
        <p class="font-28">登 录</p>
        <el-form class="login-style"  :rules="rules"  :label-position="labelPosition" label-width="80px" :model="loginForms">
            <el-form-item label="用户名" prop="email">
                <el-input type="text" v-model="loginForms.email" :placeholder="email"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="pwd">
                <el-input type="password" v-model="loginForms.pwd" :placeholder="pwd"></el-input>
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
        <router-link  to="/">
                <span  class="skin-bto btn-reginster">登录</span>
        </router-link>
         <router-link  class="skin-bto margin-l-20 btn-reginster" to="/register">
                立即注册
        </router-link>
    </div>
</template>

<script>
import {regEmail, regPwd} from './js/reg.js'
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
            loginForms: {
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
    }
}
</script>

<style lang="less" scoped>
@import './Css/login.less';

</style>
