<template>
    <div class="longran-Detail clearfix">
        <div class="detail-img fl">
             <img :src='banner1'/>
        </div>
        <div class="detail-detail fr">
            <p class="detail-title font-16 overflow">此处为商品名称</p>
            <p class="detail-dscribe overflows margin-t-20" style="height:36px;">此处为商品描述，最多显示两排，如有超出隐此处为商品名称，最多显示一排，如有超出隐藏，如有超出隐此处为商品名称，最多显示一排，如有超出隐藏此处为商品名，如有超出隐此处为商品名称，最多显示一排，如有超出隐藏此处为商品名此处为商品名称，最多显示一排，如有超出隐藏藏</p>
            <p class="detail-dscribe overflows margin-t-20 color-grey" style="height:36px;">服务支持 <span class="color-black padding-l-10">破损包退换</span></p>
            <div class="detail-dscribe overflows margin-t-20 color-grey" style="height:36px;">
                配送致 <v-region :town="true" @values="selectLogs"></v-region>
                <input class="option-input" placeholder="请填写详细地址"/>
            </div>
            <div class="scale clearfix">
                <div class="scale-title fl padding-t-20 color-grey">颜色选择</div>
                <ul class="scale-content fl">
                    <li class="scale-option">红色</li>
                    <li class="scale-option">红色</li>
                    <li class="scale-option">红色</li>
                    <li class="scale-option">红色</li>
                </ul>
            </div>
            <p class=" margin-t-20">
                <!-- <span class="num">-</span>
                <span class="padding-l-10  padding-r-10">1</span>
                <span class="num">+</span> -->
                     <el-input-number v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
                <router-link class="margin-l-20 join-cart skin-bto-hover text-decoration-none" to='/cart'> 加入购物车</router-link>
            <p class="detail-alear  margin-t-30 color-grey">增值保障<span class="padding-l-10 color-black"><img class="inline-block padding-r-5"  :src="baoxiu"/>终身保修</span></p>
            <p class="detail-alear  margin-t-30 color-grey">温馨提示,支持7天无理由退货</p>
        </div>
    </div>
</template>

<script>
import banner1 from './img/banner_img1.jpg'
import baoxiu from './img/baoxiu.png'
export default {
    data () {
        return {
            banner1,
            baoxiu,
            num: 1
        }
    },
    methods: {
        selectLogs (data) {
            console.log(data)
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/detail.less';

</style>
