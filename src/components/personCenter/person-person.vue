<template>
    <div class="padding-10">
        <p classfont-6>亲爱的 <span class="text-weight">只想随自己的心</span>，填写真实的资料，有助于好友找到你哦。</p>
        <div class="margin-t-20 margin-l-20 clearfix">
            <span class="padding-r-20 fl">当前头像:</span>
            <div class="img-touimg fl" >
                <img class="person-imgnew " src="./image/tou.jpg"/>
                <router-link to='/personCenter/Personperson/edit'><span class="edit-tou">编辑头像</span></router-link>
            </div>
            <div class="fl margin-r-20"> <router-view></router-view></div>
        </div>
        <div class="margin-t-20">
            <el-form :model="registerForms"  :rules="rules"  class="register-style" :label-position="labelPosition" label-width="100px">
                <el-form-item label="昵称" prop="name">
                 <el-input type="text" v-model="registerForms.name" :placeholder="name">只想随自己的心</el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="realname">
                    <el-input type="text"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio v-model="registerForms.sex" label="1">男</el-radio>
                    <el-radio v-model="registerForms.sex" label="2">女</el-radio>
                </el-form-item>
            </el-form>
        </div>
        <el-button class=" skin-bto-hover margin-l-30" @click="open"> 保存 </el-button>
    </div>
</template>

<script>
export default {
    data () {
        var Name = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('昵称不能为空'))
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
            name: '只想随自己的心',
            sex: '',
            labelPosition: 'right',
            registerForms: {
                name: '',
                sex: ''
            },
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
                }]
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
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
