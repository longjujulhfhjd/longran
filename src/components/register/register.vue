<template>
    <div class="longran-Register">
        <p class="font-28 text-c">注册</p>
        <el-form :model="registerForms"  ref='registerForms' :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
            <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="registerForms.email" :placeholder="email"></el-input>
            </el-form-item>
             <el-form-item label="电话" prop="tel">
                <el-input type="text" v-model="registerForms.tel" :placeholder="tel"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="pwd">
                <el-input type="password" v-model="registerForms.pwd" :placeholder="pwd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"  prop="repwd">
                <el-input type="password" v-model="registerForms.repwd" :placeholder="repwd"></el-input>
            </el-form-item>
            <el-form-item label="昵称"  prop="name">
                <el-input type="text" v-model="registerForms.name" :placeholder="name"></el-input>
            </el-form-item>
            <el-form-item label="校验证" class="code-style"  prop="checkcode" >
                <el-input type="text" v-model="registerForms.checkcode" :placeholder="checkcode"></el-input>
                <Verifi></Verifi>
            </el-form-item>
            <el-form-item label="短信验证码"  class="code-style" prop="code">
                <el-input type="text"  v-model="registerForms.code" :placeholder="code"></el-input>
                <div class="skin-bto code-btn" @click="getCode()">获取验证码</div>
            </el-form-item>
        </el-form>
        <p class="text-c text-red">*请妥善保管账户密码信息，勿随意泄露,手机号为识别及验证账户身份的唯一依据</p>
        <div class="margin-auto register-box ">
            <p class="font-28 register-btn  text-c"  @click="sendregister('registerForms')" >注册</p>
            <router-link skin-bto class="fr" to="/login">
                去登录?
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Verifi from './code'
import {
    regEmail,
    regPwd,
    regTel
} from './js/reg'
export default {
    components: {
        Verifi
    },
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
        var Tel = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入电话'))
            } else if (!regTel.test(value)) {
                callback(new Error('电话格式不正确'))
            } else {
                callback()
            }
        }
        var rePwd = (rule, value, callback) => {
            if (this.registerForms.pwd !== this.registerForms.repwd) {
                callback(new Error('密码不一致'))
            } else if (!value) {
                callback(new Error('请确认密码'))
            } else {
                callback()
            }
        }
        var Email = (rule, value, callback) => {
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
        var Checkcode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('校验码不能为空'))
            } else {
                callback()
            }
        }
        var Name = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('昵称不能为空'))
            } else {
                callback()
            }
        }
        return {
            loding: false,
            email: '请输入邮箱',
            tel: '请输入电话',
            pwd: '请输入密码',
            checkcode: '请输入效验码',
            repwd: '请再次确认密码',
            code: '短信验证码',
            name: '请输入一个昵称',
            labelPosition: 'right',
            radio: '',
            rules: {
                email: [{
                    validator: Email,
                    required: true,
                    trigger: 'blur'
                }],
                name: [{
                    validator: Name,
                    required: true,
                    trigger: 'blur'
                }],
                tel: [{
                    validator: Tel,
                    required: true,
                    trigger: 'blur'
                }],
                pwd: [{
                    validator: Pwd,
                    required: true,
                    trigger: 'blur'
                }],
                repwd: [{
                    validator: rePwd,
                    required: true,
                    trigger: 'blur'
                }],
                code: [{
                    validator: Code,
                    required: true,
                    trigger: 'blur'
                }],
                checkcode: [{
                    validator: Checkcode,
                    required: true,
                    trigger: 'blur'
                }]
            },
            registerForms: {
                email: '',
                pwd: '',
                repwd: '',
                name: '',
                tel: '',
                checkcode: '',
                code: ''
            }
        }
    },
    methods: {
        // 获取验证码
        getCode () {
            // 获取验证码
            let email = this.registerForms.email
            axios({
                url: 'http://127.0.0.1:3000/sendcode',
                method: 'get',
                params: {
                    email
                }
            }).then((res) => {
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
        // 提交注册信息
        sendregister (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 注册
                    let data = {
                        email: this.registerForms.email,
                        tel: this.registerForms.tel,
                        pwd: this.registerForms.pwd,
                        // pwd: this.$md5(this.registerForms.pwd),
                        name: this.registerForms.name,
                        code: this.registerForms.code,
                        checkcode: this.registerForms.checkcode
                    }
                    axios({
                        url: 'http://127.0.0.1:3000/register',
                        method: 'post',
                        params: {
                            data
                        }
                    }).then((res) => {
                        console.log(res)
                        if (res.data.status === 200) {
                            window.location.href = '/login'
                            this.$message({
                                message: '注册成功',
                                center: true,
                                type: 'success',
                                duration: 2000,
                                // 关闭提示信息的回调
                                onClose: () => {
                                }
                            })
                        } else {
                            this.$message({
                                message: '注册失败',
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
    }
}
</script>

<style lang="less" scoped>
@import './Css/register.less';

</style>
