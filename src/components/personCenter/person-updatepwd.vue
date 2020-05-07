<template>
    <div>
        <p class="person-title padding-b-10">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">修改密码</span>
        </p>
        <div class="margin-t-10">
            <el-form :model="updatepwdForms" ref="updatepwdForms"    class="register-style" label-width="200px">
                <el-form-item label="原密码" prop="originalpwd">
                    <el-input type="password"  @change="getpassword" v-model="updatepwdForms.originalpwd" placeholder="原始密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpwd">
                    <el-input type="password" v-model="updatepwdForms.newpwd" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="请确认新密码" prop="renewpwd">
                    <el-input type="password" v-model="updatepwdForms.renewpwd" placeholder="请确认新密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="submit" class="skin-bto-hover fr margin-r-20" @click="updatepwd('updatepwdForms')">确认修改</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { regPwd } from './js/reg'
export default {
    data () {
        var OriPwd = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入原始密码'))
            } else if (!regPwd.test(value)) {
                callback(new Error('密码格式不正确'))
            } else {
                callback()
            }
        }
        var Newpwd = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入新密码'))
            } else if (!regPwd.test(value)) {
                callback(new Error('密码格式不正确'))
            } else {
                callback()
            }
        }
        var Renewpwd = (rule, value, callback) => {
            if (this.updatepwdForms.newpwd !== this.updatepwdForms.renewpwd) {
                callback(new Error('密码不一致'))
            } else if (!value) {
                callback(new Error('请确认密码'))
            } else {
                callback()
            }
        }
        return {
            updatepwdForms: {
                originalpwd: '',
                newpwd: '',
                renewpwd: ''
            },
            rules: {
                originalpwd: [{
                    validator: OriPwd,
                    required: true,
                    trigger: 'blur'
                }],
                newpwd: [{
                    validator: Newpwd,
                    required: true,
                    trigger: 'blur'
                }],
                renewpwd: [{
                    validator: Renewpwd,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        getpassword () {
            let email = JSON.parse(window.localStorage.getItem('userinfo')).email
            let pwd = this.updatepwdForms.originalpwd
            let data = {
                email: email,
                pwd: pwd
            }
            axios({
                // 登录接口
                url: 'http://127.0.0.1:3000/reqpwd',
                method: 'post',
                params: {
                    data
                }
            }).then((res) => {
                if (res.data.status === 200) {
                    // 登录成功提示信息
                    this.$message({
                        message: '原始密码正确',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    // 登录失败提示信息
                    this.$message({
                        message: '原始密码错误',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        },
        updatepwd (formName) {
            this.$refs[formName].validate((valid) => {
                let email = JSON.parse(window.localStorage.getItem('userinfo')).email
                let newpwd = this.updatepwdForms.newpwd
                if (valid) {
                    let data = {
                        email: email,
                        newpwd: newpwd
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/updatepwd',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            window.localStorage.removeItem('token')
                            window.localStorage.removeItem('userinfo')
                            this.$router.href('/login')
                            this.$message({
                                message: '修改密码成功',
                                center: true,
                                type: 'success',
                                duration: 2000
                            })
                        } else {
                            // 登录失败提示信息
                            this.$message({
                                message: '用户名或者密码错误',
                                center: true,
                                type: 'error',
                                duration: 2000
                            })
                        }
                    })
                } else {
                    // 登录失败提示信息
                    this.$message({
                        message: '请输入用户名或者密码',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>
