<template>
    <div>
        <p class="recived-title">我已收到货，同意支付宝付款</p>
        <p class="padding-20">订单信息</p>
        <ul class="shop-titlelist clearfix">
            <li class="shop-titlelsists shop-name-scale">宝贝</li>
            <li class="shop-titlelsists shop-price">单价</li>
            <li class="shop-titlelsists shop-num">数量</li>
            <li class="shop-titlelsists shop-total">商品总价</li>
            <li class="shop-titlelsists shop-fare">运费</li>
        </ul>
        <ul class="shop-conlist clearfix">
            <li class="shop-conlsists clearfix">
                <div class="shopcon shopcon-namescale padding-10 clearfix">
                    <img class="fl" src="./image/wallcloth-4.jpg"/>
                    <div class="fl text-l margin-l-20"  style="width:70%;">
                        <p style="height:36px" class="overflows" title=" 【R1SE 何洛洛推荐】美康粉黛旷野玫瑰散粉定妆粉女持久控油防水">
                            R1SE 何洛洛推荐】美康粉黛旷野玫瑰散粉
                        </p>
                        <p class="">颜色分类：<span>粉玫瑰</span></p>
                    </div>
                </div>
                <P class="shopcon shopcon-price">￥44</P>
                <P class="shopcon shopcon-num">2</P>
                <P class="shopcon shopcon-total">￥88.00</P>
                <P class="shopcon shopcon-fare">快递：<span>0.00</span></P>
             </li>
        </ul>
        <p class="text-r margin-t-30 padding-50" style="border-bottom:1px solid #ccc; height:50px;">实付款：<span class="text-red font-18">￥88.00</span></p>
        <div class="margin-t-30">
            <p class="padding-30">订单编号：<span>916950240580830139</span></p>
            <p class="padding-30">收货信息：
                <span>贵州省 毕节市 七星关区 麻园街道</span>
                <span>麻园街道30米大道三江依山雅苑</span> ，
                <span>龙菊</span>，
                <span>18286792321</span>
            </p>
        </div>
        <p class="padding-30 text-red">请收到货后，再确认收货！否则您可能钱货两空！</p>
        <router-link to='/toappraise'>   <p class="skin-bto-hover margin-30"  @click="open">确认收货</p></router-link>
    </div>
</template>

<script>
export default {
    methods: {
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
