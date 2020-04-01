<template>
    <div class="longran-Aboutus">
        <div class="aboutus-api">
            <img class="aboutus-img" src="./image/map.png"/>
        </div>
        <p class="padding-10 padding-l-20 font-18 text-red text-weight"><span class="el-icon-location-outline"></span>贵州省纳雍县阳光星城大唐果酒店上行30米(复制地址点击搜索)</p>
        <a href="https://map.baidu.com/mobile/webapp/index/index/" class="serch-about skin-bto-hover">搜索</a>
        <div class="leave-message clearfix">
            <p class="font-18 padding-l-10">请留言:</p>
            <p class="margin-tb-20 maybe-like text-c text-red" style="position:relative;"><span class="xiantiao"></span><span class="text-red icontent font-18 ">给我们的建议与意见 <i class="font-18 text-red icon-jianyishu iconfont"></i></span></p>
            <el-form :model="registerForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="registerForms.email" :placeholder="email"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input type="text" v-model="registerForms.tel" :placeholder="电话号码"></el-input>
                </el-form-item>
                <el-form-item label="内容" prop="info">
                    <el-input type="textarea" v-model="registerForms.info" :placeholder="请输入留言内容"></el-input>
                </el-form-item>
            </el-form>
            <p class="skin-bto-hover submit-message">提交留言</p>
            <p class="margin-tb-20 maybe-like text-c text-red" style="position:relative;"><span class="xiantiao"></span><span class="text-red icontent font-18 ">留言 <i class="font-18 text-red icon-jianyishu iconfont"></i></span></p>
            <ul class="message-detail-list clearfix">
                <li class="message-detail-lists">
                    <p><span class="text-red font-16">留言的内容：</span></p>
                    <p class="padding-10">gjdjklgjdljgjgsdhfglsdhfj;sdh</p>
                    <div class="text-r">留言的时间：<span>2020.3.31</span></div>
                </li>
                <li class="message-detail-lists">
                    <p><span class="text-red font-16">留言的内容：</span></p>
                    <p class="padding-10">gjdjklgjdljgjgsdhfglsdhfj;sdh</p>
                    <div class="text-r">留言的时间：<span>2020.3.31</span></div>
                </li>
                <li class="message-detail-lists">
                    <p><span class="text-red font-16">留言的内容：</span></p>
                    <p class="padding-10">gjdjklgjdljgjgsdhfglsdhfj;sdh</p>
                    <div class="text-r">留言的时间：<span>2020.3.31</span></div>
                </li>
                <li class="message-detail-lists">
                    <p><span class="text-red font-16">留言的内容：</span></p>
                    <p class="padding-10">gjdjklgjdljgjgsdhfglsdhfj;sdh</p>
                    <div class="text-r">留言的时间：<span>2020.3.31</span></div>
                </li>
                <li class="message-detail-lists">
                    <p><span class="text-red font-16">留言的内容：</span></p>
                    <p class="padding-10">gjdjklgjdljgjgsdhfglsdhfj;sdh</p>
                    <div class="text-r">留言的时间：<span>2020.3.31</span></div>
                </li>
                <li class="message-detail-lists">
                    <p><span class="text-red font-16">留言的内容：</span></p>
                    <p class="padding-10">gjdjklgjdljgjgsdhfglsdhfj;sdh</p>
                    <div class="text-r">留言的时间：<span class="">2020.3.31</span></div>
                </li>
            </ul>
           <div class="margin-t-20 padding-r-50 fr">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
           </div>
        </div>
    </div>
</template>

<script>
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
        return {
            email: '请输入邮箱',
            tel: '请输入电话号码',
            info: '请输入留言内容',
            labelPosition: 'right',
            registerForms: {
                email: '',
                tel: '',
                info: ''
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
                }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/aboutUs.less';

</style>
