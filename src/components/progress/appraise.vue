<template>
    <div class="appraise-Longran">
        <div class="clearfix">
            <div class="fl appraise-image-box">
                <img class="appraise-image" src="./image/wallcloth-4.jpg"/>
            </div>
            <div class="fl appraise-detail">
                <p class="font-16 text-weight">两枚装韩国尔木萄丝绒气垫粉扑定妆散粉粉饼圆形绒面不卡粉粉底扑</p>
                <p class="font-16 margin-t-10 color-grey">价格<span class="padding-l-30 font-26 text-red">45.80 </span> 元</p>
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
                <el-input class=" fl" type="textarea"></el-input>
            </div>
            <div class="margin-t-20 clearfix">
                <div class="title-appraise fl">评价服务</div>
                <el-input class=" fl" type="textarea"></el-input>
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
            <router-link to='/success'><span class="skin-bto-hover margin-t-20 margin-l-20" @click="open">提交</span></router-link>
        </div>
        <p class="margin-20">全部评价</p>
        <ul class="content-detail-list clearfix">
            <li class="content-detail-lists">
               <ul class="clearfix" style="height:110px;" >
                   <li class="content-list"> <img class="content-image" src="./image/wallcloth-4.jpg"/></li>
                   <li class="content-list"> <img class="content-image" src="./image/wallcloth-4.jpg"/></li>
                   <li class="content-list"> <img class="content-image" src="./image/wallcloth-4.jpg"/></li>
                   <li class="content-list"> <img class="content-image" src="./image/wallcloth-4.jpg"/></li>
                   <li class="content-list"> <img class="content-image" src="./image/wallcloth-4.jpg"/></li>
               </ul>
                <p class="padding-tb-20 font-16">好小啊 但是放进散粉又刚刚好</p>
                <p class="padding-tb-10">商品分类:<span>墙纸/清新</span></p>
                <p class="text-r padding-tb-10 padding-r-30">商品编号:<span>32520378</span></p>
                <p class="text-r padding-tb-10  padding-r-30">2020/04/01</p>
            </li>
            <li class="content-detail-lists">
                <p class="padding-tb-10 font-16">好小啊 但是放进散粉又刚刚好</p>
                <p class="padding-tb-10">商品分类:<span>墙纸/清新</span></p>
                <p class="text-r padding-tb-10 padding-r-30">商品编号:<span>32520378</span></p>
                <p class="text-r padding-tb-10  padding-r-30">2020/04/01</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: null,
            value2: null,
            value3: null,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        open () {
            this.$confirm('是否确认收货？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '确认',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'info',
                    message: '确认收货成功'
                })
            }).catch(action => {
                this.$message({
                    type: 'info',
                    message: action === 'cancel'
                        ? '已取消收货操作' : '已取消收货操作'
                })
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import './Css/progress.less';
</style>
