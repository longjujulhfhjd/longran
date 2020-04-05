<template>
    <div class="progress-Refund">
        <div class="clearfix padding-b-20" style="border-bottom:1px solid #ccc;">
            <img class="fl progress-Refundimg" src="./image/wallcloth-4.jpg"/>
            <div class="fl margin-l-20">
                <p class="font-18 padding-10">【R1SE 何洛洛推荐】美康粉黛旷野玫瑰散粉定妆粉女持久控油防水</p>
                <p class="color-grey  padding-10">分类:<span>清新</span></p>
            </div>
        </div>
        <P class="font-18 padding-10">选择服务类型</P>
        <ul class="refund-class-list clearfix margin-t-30" >
            <li  class="refund-class-lists">
                <img class="fl margin-t-15" src="./image/class-one.png"/>
                <div class="fl margin-l-5" style="width:80%;">
                    <p class="font-18 text-weight padding-tb-10 ">我要退款(无需退货)</p>
                    <p class="color-grey ">没收到货，或与卖家协商同意不用退货只退款</p>
                </div>
            </li>
            <li  class="refund-class-lists">
                <img class="fl margin-t-15" src="./image/class-two.png"/>
                <div class="fl margin-l-5" style="width:80%;">
                    <p class="font-18 text-weight padding-tb-10 ">我要退货退款</p>
                    <p class="color-grey ">已收到货，需要退还收到的货物</p>
                </div>
            </li>
            <li  class="refund-class-lists">
                <img class="fl margin-t-15" src="./image/class-three.png"/>
                <div class="fl margin-l-5" style="width:80%;">
                    <p class="font-18 text-weight padding-tb-10 ">我要换货</p>
                    <p class="color-grey ">已收到货，需要更换已收到的货物</p>
                </div>
            </li>
        </ul>
        <div class="margin-t-20">
            <el-form :model="registerForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="退款金额" prop="many">
                    <el-input type="text" v-model="registerForms.many" :placeholder="many"></el-input>
                </el-form-item>
                <el-form-item label="退款说明" prop="descript">
                    <el-input type="textarea" v-model="registerForms.descript" :placeholder="descript"></el-input>
                </el-form-item>
                <el-form-item label="上传照片" prop="picture">
                    <el-input type="file"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <router-link to='/returnsuccess'> <span class="skin-bto-hover margin-20">提交</span></router-link>
    </div>
</template>

<script>
export default {
    data () {
        var Many = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('详细地址不能为空'))
            } else {
                callback()
            }
        }
        var Descript = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('退款说明不能为空'))
            } else {
                callback()
            }
        }
        return {
            many: '请输入邮退款金额',
            descript: '请输入邮退款说明',
            labelPosition: 'right',
            registerForms: {
                email: '',
                tel: '',
                info: ''
            },
            rules: {
                many: [{
                    validator: Many,
                    required: true,
                    trigger: 'blur'
                }],
                descript: [{
                    validator: Descript,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
