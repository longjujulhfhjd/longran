<template>
    <div class="longran-Codeidentity text-c">
        <p class="font-28 text-c">验证身份</p>
        <el-form :model="forgetForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="90px">
            <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="forgetForms.email" :placeholder="email"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码"  class="code-style" prop="code">
                <el-input type="text" v-model="forgetForms.code" :placeholder="code"></el-input>
                <div class="skin-bto code-btn">获取验证码</div>
            </el-form-item>
        </el-form>
        <router-link  class="skin-bto next-btn " to="/forget/newpassword">
                下一步
        </router-link>
    </div>
</template>

<script>
import {regEmail} from './js/reg.js'

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
    }
}
</script>

<style lang="less" scoped>
@import './Css/forget.less';

</style>
