<template>
    <div class="longran-newpassword  text-c">
        <p class="font-28 text-c">设置新密码</p>
        <el-form :model="forgetnewForms" :rules="rules"   class="register-style" :label-position="labelPosition" label-width="90px">
            <el-form-item label="密码"  prop="pwd">
                <el-input type="password" v-model="forgetnewForms.pwd" :placeholder="pwd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"  prop="repwd">
                <el-input type="password" v-model="forgetnewForms.repwd" :placeholder="repwd"></el-input>
            </el-form-item>
        </el-form>
        <router-link  class="skin-bto next-btn " to="/forget/codeover">
                下一步
        </router-link>
    </div>
</template>

<script>
import {regPwd} from './js/reg.js'
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
            if (this.forgetnewForms.pwd !== this.forgetnewForms.rePwd) {
                callback(new Error('密码不一致'))
            } else if (!value) {
                callback(new Error('请确认密码'))
            } else {
                callback()
            }
        }
        return {
            repwd: '请再次确认密码',
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
    }
}
</script>

<style lang="less" scoped>
@import './Css/forget.less';

</style>
