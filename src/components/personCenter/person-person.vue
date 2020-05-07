<template>
    <div >
        <p class="person-title">
            <span class="padding-10 title-con" style="border-bottom:1px solid #D61B52;">个人资料</span>
        </p>
        <p class="font-16 padding-10">亲爱的 <span class="text-weight padding-lr-10">{{name}}</span>，填写真实的资料，有助于好友找到你哦。</p>
        <div class="margin-t-20 margin-l-20 clearfix" >
            <span class="padding-r-20 fl">当前头像:</span>
            <div class="img-touimg fl" >
                <img class="person-imgnew " :src="'http://127.0.0.1:3000/' + img"/>
            </div>
        </div>
        <div class="margin-t-20">
            <el-form :model="userForms"  v-on:submit="updateinfo"  ref="userForms"   :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="编辑头像">
                    <el-upload
                        v-model="userForms.img1"
                        :before-upload="Img1"
                        class="upload-demo"
                        ref="upload1"
                        :action="uploadurl"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取头像</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="昵称" prop="name">
                 <el-input type="text" v-model="userForms.name" :placeholder="name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                 <el-input type="text" v-model="userForms.tel" :placeholder="tel"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="realname">
                    <el-input type="text" v-model="userForms.realname"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio v-model="userForms.sex" label="1">男</el-radio>
                    <el-radio v-model="userForms.sex" label="2">女</el-radio>
                </el-form-item>
            </el-form>
        </div>
        <el-button class=" skin-bto-hover margin-l-30" @click="updateinfo"> 保存 </el-button>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data () {
        var Name = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('昵称不能为空'))
            } else {
                callback()
            }
        }
        var Tel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('不能为空'))
            } else {
                callback()
            }
        }
        var Sex = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('性别不能为空'))
            } else {
                callback()
            }
        }
        return {
            formData: {},
            // 缓存图片路径
            uploadurl: 'http://127.0.0.1:3000/changeBlog',
            name: '',
            sex: '',
            tel: '',
            img: '',
            labelPosition: 'right',
            rules: {
                name: [{
                    validator: Name,
                    required: true,
                    trigger: 'blur'
                }],
                sex: [{
                    validator: Sex,
                    required: true,
                    trigger: 'blur'
                }],
                tel: [{
                    validator: Tel,
                    required: true,
                    trigger: 'blur'
                }]
            },
            userForms: {
                name: '',
                sex: '',
                tel: '',
                realname: ''
            }
        }
    },
    methods: {
        open () {
            this.$confirm('是否保存修改？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '保存',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'info',
                    message: '修改成功'
                })
            }).catch(action => {
                this.$message({
                    type: 'info',
                    message: action === 'cancel'
                        ? '已取消修改' : '停留在当前页面'
                })
            })
        },
        updateinfo (e) {
            if (!this.userForms.name || !this.userForms.sex || !this.userForms.tel || !this.userForms.realname) {
                this.$message({
                    message: '请将信息填写完整',
                    center: true,
                    type: 'success',
                    duration: 2000
                })
            } else {
                let formData = new FormData()
                this.formData = formData
                let id = JSON.parse(window.localStorage.getItem('userinfo')).id
                this.formData.append('id', id)
                for (let item in this.userForms) {
                    this.formData.append(item, this.userForms[item])
                }
                this.$refs.upload1.submit()
                this.axiosRequest({
                    url: '/updateuser',
                    method: 'post',
                    data: formData
                }).then(res => {
                    window.location.href = '/login'
                    this.$message({
                        message: '修改信息成功！',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                }).catch(err => {
                    this.$message({
                        message: '修改信息失败！',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                    console.log(err)
                })
                e.preventDefault()
            }
            e.preventDefault()
        },
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePreview (file) {
            console.log(file)
        },
        Img1 (file) {
            this.formData.append('img1', file)
            return false
        }
    },
    mounted () {
        let img = JSON.parse(window.localStorage.getItem('userinfo')).img
        let id = JSON.parse(window.localStorage.getItem('userinfo')).id
        this.$store.dispatch('getuser', id)
        let name = JSON.parse(window.localStorage.getItem('userinfo')).name
        let tel = JSON.parse(window.localStorage.getItem('userinfo')).tel
        this.name = name
        this.tel = tel
        this.img = img
    },
    computed: {
        userlists () {
            return this.$store.state.personcenter.userlist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
