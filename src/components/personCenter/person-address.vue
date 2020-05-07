<template>
    <div>
        <p class="person-title">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">我的收货地址</span>
        </p>
        <p class="text-red padding-t-10"><span class="el-icon-circle-plus padding-r-10"></span>添加我的收货地址</p>
        <div class="margin-t-20">
            <el-form :model="addressForms" ref="addressForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="区域信息" >
                    <v-distpicker  @selected="onSelected"></v-distpicker>
                </el-form-item>
                <el-form-item label="详细地址" prop="detail">
                    <el-input type="textarea" v-model="addressForms.detail"  :placeholder="detail"></el-input>
                </el-form-item>
                 <el-form-item label="邮政编码" prop="postcode">
                    <el-input  type="text" v-model="addressForms.postcode" :placeholder="postcode"></el-input>
                </el-form-item>
                <el-form-item label="收货人姓名" prop="name">
                    <el-input type="text" v-model="addressForms.name" :placeholder="name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input type="text" v-model="addressForms.tel" name="tel" :placeholder="tel"></el-input>
                </el-form-item>
            </el-form>
             <el-button class="skin-bto-hover margin-l-30" type="text" @click="sendaddress('addressForms')"> 保存 </el-button>
        </div>
        <p class="font-6 padding-tb-30">已有收货地址</p>
        <ul class="address-title-list">
            <li class="address-title-lists" style="width:10%;">收货人</li>
            <li class="address-title-lists" style="width:24%;">所在地区</li>
            <li class="address-title-lists" style="width:20%;">详细地址</li>
            <li class="address-title-lists" style="width:20%;">电话号码</li>
            <li class="address-title-lists" style="width:12%;">邮编</li>
            <li class="address-title-lists" style="width:14%;">操作</li>
        </ul>
        <ul class="address-list">
            <li class="address-list-li clearfix" :key="item.user_id" v-for="(item) in addresslist">
                <p class="address-lists" style="width:10%;">{{item.address_name}}</p>
                <p class="address-lists" style="width:24%;">{{item.address_area}}</p>
                <p class="address-lists" style="width:20%;">{{item.address_add}}</p>
                <p class="address-lists" style="width:20%;">{{item.address_tel}}</p>
                <p class="address-lists" style="width:12%;">{{item.address_postcode}}</p>
                <p class="address-lists" style="width:14%;"><span @click="deletes(item.address_id)" class="hand" >删除</span></p>
            </li>
        </ul>
    </div>
</template>

<script>
import {
    regTel
} from './js/reg'
import axios from 'axios'
export default {
    data () {
        var Tel = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入电话号码'))
            } else if (!regTel.test(value)) {
                callback(new Error('号码格式不正确'))
            } else {
                callback()
            }
        }
        var Detail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('详细地址不能为空'))
            } else {
                callback()
            }
        }
        var Area = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('所在地区不能为空'))
            } else {
                callback()
            }
        }
        var Postcode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('邮政编码不能为空'))
            } else {
                callback()
            }
        }
        var Name = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('收件人不能为空'))
            } else {
                callback()
            }
        }
        return {
            tel: '请输入电话号码',
            detail: '请输入街道和详细地址',
            area: '请选择省/市/区',
            postcode: '请输入邮政编码',
            name: '请输入收货人姓名',
            labelPosition: 'right',
            addressForms: {
                name: '',
                tel: '',
                postcode: '',
                detail: ''
            },
            rules: {
                tel: [{
                    validator: Tel,
                    required: true,
                    trigger: 'blur'
                }],
                detail: [{
                    validator: Detail,
                    required: true,
                    trigger: 'blur'
                }],
                area: [{
                    validator: Area,
                    required: true,
                    trigger: 'blur'
                }],
                postcode: [{
                    validator: Postcode,
                    required: true,
                    trigger: 'blur'
                }],
                name: [{
                    validator: Name,
                    required: true,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        onSelected (data) {
            this.$store.state.personcenter.citydata = data.province.value + data.city.value + data.area.value
        },
        // 删除收货地址
        deletes (id) {
            // this.$store.dispatch('deleteaddress', id)
            this.$confirm('是否删除该地址？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '删除',
                cancelButtonText: '取消'
            }).then(() => {
                axios({
                    method: 'get',
                    params: {
                        id: id
                    },
                    url: 'http://127.0.0.1:3000/deleteaddress'
                }).then((res) => {
                    if (res.data.status === 200) {
                        // aa.commit('getaddressList', res.data.data)
                        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                        this.$store.dispatch('getaddress', id)
                        this.$message({
                            message: '删除地址成功',
                            center: true,
                            type: 'success',
                            duration: 2000
                        })
                    } else {
                        this.$message({
                            message: '删除地址失败',
                            center: true,
                            type: 'error',
                            duration: 2000
                        })
                    }
                })
            })
        },
        // 添加地址信息
        sendaddress (forname) {
            this.$confirm('是否确认添加该地址？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '添加',
                cancelButtonText: '取消'
            }).then(() => {
                this.$refs[forname].validate((valid) => {
                    if (valid) {
                        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                        let area = this.$store.state.personcenter.citydata
                        console.log(this.addressForms.detail)
                        let data = {
                            id: id,
                            area: area,
                            name: this.addressForms.name,
                            add: this.addressForms.detail,
                            tel: this.addressForms.tel,
                            postcode: this.addressForms.postcode
                        }
                        axios({
                            url: 'http://127.0.0.1:3000/sendaddress',
                            method: 'post',
                            params: {
                                data
                            }
                        }).then((res) => {
                            if (res.data.status === 200) {
                                this.$message({
                                    message: '添加地址成功',
                                    center: true,
                                    type: 'success',
                                    duration: 2000
                                })
                            } else {
                                this.$message({
                                    message: '添加留言失败',
                                    center: true,
                                    type: 'error',
                                    duration: 2000
                                })
                            }
                        })
                    } else {
                        this.$message({
                            message: '请把表单信息填写完整！',
                            center: true,
                            type: 'error',
                            duration: 2000
                        })
                        return false
                    }
                    return setTimeout(() => {
                        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                        this.$store.dispatch('getaddress', id)
                    }, 1000)
                })
            })
        }
    },
    mounted () {
        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
        this.$store.dispatch('getaddress', id)
    },
    computed: {
        addresslist () {
            return this.$store.state.personcenter.addresslist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
