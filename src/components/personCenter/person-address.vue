<template>
    <div>
        <p class="text-red"><span class="el-icon-circle-plus padding-r-10"></span>添加我的收货地址</p>
        <div class="margin-t-20">
            <el-form :model="registerForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="地址信息" prop="area">
                    <el-input type="text" v-model="registerForms.area" :placeholder="area"></el-input>
                </el-form-item>
                <el-form-item label="请输入详细地址" prop="detail">
                    <el-input type="textarea" v-model="registerForms.detail" :placeholder="detail"></el-input>
                </el-form-item>
                 <el-form-item label="邮政编码" prop="postcode">
                    <el-input  type="text" v-model="registerForms.postcode" :placeholder="postcode"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="registerForms.email" :placeholder="email"></el-input>
                </el-form-item>
                <el-form-item label="收货人姓名" prop="name">
                    <el-input type="text" v-model="registerForms.name" :placeholder="name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input type="text" v-model="registerForms.tel" name="tel" :placeholder="tel"></el-input>
                </el-form-item>
            </el-form>
             <el-button class="skin-bto-hover margin-l-30" type="text" @click="open"> 保存 </el-button>
        </div>
        <p class="font-6 padding-tb-30">已有收货地址</p>
        <el-table :data="tableData" class="text-c" height="500" style="width: 100%">
            <el-table-column class="news-title"  prop="name" label="收货人"  width="100px"> </el-table-column>
            <el-table-column  prop="area" label="所在地区"  width="300px"> </el-table-column>
            <el-table-column  prop="detail" label="详细地址"  width="200px"> </el-table-column>
            <el-table-column  prop="code" label="邮编"  width="80px"> </el-table-column>
            <el-table-column label="操作"  width="100px">
                <span class="hand">编辑</span>
                <span class="hand">删除</span>
            </el-table-column>
            <el-table-column label="收货默认地址"  width="150px">
             <el-button class="hand begin-set" type="text" @click="opens"> 设为默认 </el-button>
                <span class="seted button">默认地址</span>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {
    regEmail,
    regTel
} from './js/reg'
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
        var Detail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('详细地址不能为空'))
            } else {
                callback()
            }
        }
        var Area = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('详细地址不能为空'))
            } else {
                callback()
            }
        }
        var Postcode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('详细地址不能为空'))
            } else {
                callback()
            }
        }
        var Name = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('详细地址不能为空'))
            } else {
                callback()
            }
        }
        return {
            email: '请输入邮箱',
            tel: '请输入电话号码',
            detail: '请输入详细地址',
            area: '请选择省/市/区',
            postcode: '请输入邮政编码',
            name: '请输入收货人姓名',
            labelPosition: 'right',
            registerForms: {
                email: '',
                tel: '',
                info: ''
            },
            tableData: [{
                name: '龙菊',
                area: '贵州省 毕节市 七星关区 麻园街道',
                detail: '贵州工程应用技术学院',
                code: '551700',
                tel: '18286792321'
            },
            {
                name: '龙菊',
                area: '贵州省 毕节市 七星关区 麻园街道',
                detail: '30米大道三江依山雅苑',
                code: '551700',
                tel: '18286792321'
            }],
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
        open () {
            this.$confirm('是否确认增加该条收货地址？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '添加',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'info',
                    message: '添加成功'
                })
            }).catch(action => {
                this.$message({
                    type: 'info',
                    message: action === 'cancel'
                        ? '已取消添加' : '停留在当前页面'
                })
            })
        },
        opens () {
            this.$confirm('是否确认设置为默认地址？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '添加',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'info',
                    message: '设置成功'
                })
            }).catch(action => {
                this.$message({
                    type: 'info',
                    message: action === 'cancel'
                        ? '放弃设置为默认收货地址' : '停留在当前页面'
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
