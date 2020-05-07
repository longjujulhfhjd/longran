<template>
    <div class="appraise-Longran">
        <div class="clearfix" v-for="(items, index) in goodslist" :key="index">
            <div class="fl appraise-image-box">
                <img class="appraise-image"  :src="'http://127.0.0.1:3000/' + items.goods_img"/>
            </div>
            <div class="fl appraise-detail">
                <p class="font-16 text-weight">{{items.goods_name}}</p>
                <p class="font-16 margin-t-10 color-grey">价格<span class="padding-l-30 font-26 text-red">{{items.goods_price}} </span> 元</p>
                <p class="font-16 margin-t-10 color-grey">配送<span  class="padding-l-30">快递:0.00 </span> 元</p>
                <ul class="clearfix margin-tb-20">
                    <li class="appraise-detail-lists">
                        <span class="text-red">*</span><span> 描述相符</span>
                        <el-rate class="margin-t-10  margin-l-10" v-model="value1" show-text> </el-rate>
                    </li>
                    <li class="appraise-detail-lists">
                        <span class="text-red">*</span><span> 卖家服务</span>
                        <el-rate class="margin-t-10" v-model="value2" show-text> </el-rate>
                    </li>
                     <li class="appraise-detail-lists">
                        <span class="text-red">*</span><span> 物流服务</span>
                        <el-rate class="margin-t-10" v-model="value3" show-text> </el-rate>
                    </li>
                </ul>
            </div>
        </div>
        <div class="margin-t-20 padding-b-50" style="border-bottom:1px solid #ccc;">
            <div class="margin-t-20 clearfix">
                <div class="title-appraise fl">评价商品</div>
                <el-input class=" fl" v-model="pingjiagoods" type="textarea"></el-input>
            </div>
            <div class="margin-t-20 clearfix">
                <div class="title-appraise fl">评价服务</div>
                <el-input class=" fl" v-model="pingjiaserver" type="textarea"></el-input>
            </div>
            <div class="margin-t-20 clearfix">
                <div class="title-appraise fl" style="height:146px;line-height:146px;">晒照片</div>
                <div class="fl margin-l-20">
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </div>
           <span class="skin-bto-hover margin-t-20 margin-l-20" @click="goodspingjias">提交</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            value1: null,
            value2: null,
            value3: null,
            pingjiaserver: '',
            pingjiagoods: '',
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        // 提交评价内容
        goodspingjias () {
            if (this.pingjiagoods != '' && this.pingjiaserver != '' && this.value1 != '' && this.value2 != '' && this.value3 != '') {
                let userid = JSON.parse(window.localStorage.getItem('userinfo')).id
                let goodsid = JSON.parse(window.localStorage.getItem('pingjiagoodsid'))
                let pingjiaorderid = JSON.parse(window.localStorage.getItem('pingjiaorderid'))
                let data = {
                    goodspingjia: this.pingjiagoods,
                    serverpingjia: this.pingjiaserver,
                    appraise_descript: this.value1,
                    appraise_server: this.value2,
                    appraise_wuliu: this.value3,
                    userid: userid,
                    goodsid: goodsid,
                    orderid: pingjiaorderid
                }
                axios({
                    // 登录接口
                    url: 'http://127.0.0.1:3000/goodspingjia',
                    method: 'get',
                    params: {
                        data
                    }
                }).then((res) => {
                    if (res.data.status === 200) {
                        axios({
                            url: 'http://127.0.0.1:3000/pingjiastation',
                            method: 'get',
                            params: {
                                id: pingjiaorderid
                            }
                        }).then((res) => {
                        })
                        // 再渲染一下页面
                        this.$message({
                            message: '提交评价成功',
                            center: true,
                            type: 'success',
                            duration: 2000
                        })
                        let id = JSON.parse(window.localStorage.getItem('pingjiagoodsid'))
                        this.$store.dispatch('getgoodsdetail', id)
                        window.location.href = '/success'
                    } else {
                        this.$message({
                            message: '评价失败',
                            center: true,
                            type: 'error',
                            duration: 2000
                        })
                    }
                })
            } else {
                this.$message({
                    message: '请填写评价内容完整！',
                    center: true,
                    type: 'error',
                    duration: 2000
                })
            }
        },
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        }
    },
    computed: {
        goodslist () {
            return this.$store.state.wall.goodsdetaillist
        }
    },
    mounted () {
        let id = JSON.parse(window.localStorage.getItem('pingjiagoodsid'))
        this.$store.dispatch('getgoodsdetail', id)
    }
}
</script>
<style lang="less" scoped>
@import './Css/progress.less';
</style>
