<template>
    <div class="longran-newpassword  text-c">
        <p class="font-28 text-c">设置新密码</p>
        <el-form :model="forgetnewForms" :rules="rules"  ref="forgetnewForms"  class="register-style" :label-position="labelPosition" label-width="90px">
            <el-form-item label="密码"  prop="pwd">
                <el-input type="password" v-model="forgetnewForms.pwd" :placeholder="pwd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"  prop="repwd">
                <el-input type="password" v-model="forgetnewForms.repwd" :placeholder="repwd"></el-input>
            </el-form-item>
        </el-form>
        <span class="skin-bto next-btn " @click="newPassword('forgetnewForms')">
                下一步
        </span>
    </div>
</template>

<script>
import {regPwd} from './js/reg.js'
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
        var rePwd = (rule, value, callback) => {
            if (this.forgetnewForms.pwd !== this.forgetnewForms.repwd) {
                callback(new Error('密码不一致'))
            } else if (!value) {
                callback(new Error('请确认密码'))
            } else {
                callback()
            }
        }
        return {
            repwd: '请再次确认密码',
            pwd: '请输入密码',
            code: '短信验证码',
            labelPosition: 'right',
            forgetnewForms: {
                pwd: '',
                repwd: ''
            },
            rules: {
                pwd: [{
                    validator: Pwd,
                    required: true,
                    trigger: 'blur'
                }],
                repwd: [{
                    validator: rePwd,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        newPassword (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 注册
                    let email = window.localStorage.getItem('email')
                    console.log(window.localStorage.getItem('email'))
                    let data = {
                        email: email,
                        // pwd: this.$md5(this.forgetnewForms.pwd),
                        // repwd: this.$md5(this.forgetnewForms.repwd)
                        pwd: this.forgetnewForms.pwd,
                        repwd: this.forgetnewForms.repwd
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/resetpassword',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        console.log(res)
                        if (res.data.status === 200) {
                            window.location.href = '/forget/codeover'
                            window.localStorage.removeItem('email')
                            this.$message({
                                message: '设置新密码成功',
                                center: true,
                                type: 'success',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                }
                            })
                        } else {
                            this.$message({
                                message: '修改密码失败',
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
    },
    mounted () {
        let end1 = document.querySelector('.step-two')
        let end2 = document.querySelector('.steps-two')
        end1.classList.add('active')
        end2.classList.add('active')
    }
}
</script>

<style lang="less" scoped>
@import './Css/forget.less';

</style>
