<template>
    <div class="clearfix">
        <p class="fl  padding-b-20" style="width:10%;">请选择头像</p>
        <div class="fl button change-img margin-l-50 font-36 text-grey" style="width:90%">
            <el-form :model="imgForms"    class="register-style"   label-width="100px">
                <el-form-item label="上传头像" prop="img">
                    <el-input type="file" v-model="imgForms.img"></el-input>
                </el-form-item>
            </el-form>
            <p class="skin-bto-hover upload-btn " @click="uploadimg">上传</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            imgForms: {
                img: ''
            }
        }
    },
    methods: {
        uploadimg () {
            // 登录请求
            let id = JSON.parse(window.localStorage.getItem('userinfo')).id
            let data = {
                id: id,
                img: this.imgForms.img
            }
            axios({
                url: 'http://127.0.0.1:3000/uptouimg',
                method: 'post',
                params: {
                    data
                }
            }).then((res) => {
                if (res.data.status === 200) {
                    // window.location.href = '/personCenter'
                    this.$message({
                        message: '上传成功！',
                        center: true,
                        type: 'success',
                        duration: 2000
                    })
                } else {
                    this.$message({
                        message: '上传出错',
                        center: true,
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
