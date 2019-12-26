<template>
    <div id="skin-Index-Bottom" class="longran-Bottom">
        <div class="bottom-skin">
            <div class="Bottom-title font-22">
                龙然壁纸销售网站
            </div>
            <ul class="bottom-lists clearfix">
                    <li class="bottom-list">
                        <img src='./images/footer-3.png'/>
                        <p>正品</p>
                        <p class="detaile">最优惠的价格</p>
                    </li>
                    <li class="bottom-list">
                        <img src='./images/footer-2.png'/>
                        <p>快递包半</p>
                        <p class="detaile">双方共同承担快递费</p>
                    </li>
                    <li class="bottom-list">
                        <img src='./images/footer-3.png'/>
                        <p>精美礼物</p>
                        <p class="detaile">活动期间有神秘礼品相送</p>
                    </li>
                    <li class="bottom-list" >
                        <img src='./images/foot-4.png'/>
                        <p>加入我们</p>
                        <p class="detaile">共创辉煌</p>
                    </li>
            </ul>
        </div>
        <div class=" bottom-skin02">
                <ul class="bottom-detail-lists clearfix font-12" >
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">关于我们</p>
                        <p class="">加入龙冉</p>
                        <p>会员中心</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">联系我们</p>
                        <p class="">线上顾问</p>
                        <p>订购热线:18286792321</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">配送即送货</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">门店查询</p>
                    </li>
                    <li class="bottom-detail-list">
                        <p class="text-white font-14">关注我们</p>
                        <p class="">
                            <span class="text-white"></span>
                            <span>门店微信</span>
                        </p>
                        <p class="">
                            <span class="text-white"></span>
                            <span>门店微博</span>
                        </p>
                    </li>
                </ul>
                <div class="bottom-Email text-l">
                    <p class="text-white"><span class=""></span>电子邮箱</p>
                    <div class="con-box margin-t-10">
                        <input  type="text" placeholder="*请输入你的邮箱"/>
                        <span class="font-12 text-white padding-l-5">确定</span>
                    </div>
                </div>
        </div>
        <div class='bottom-skin03'>
            <el-collapse  @change="handleChange">
                <el-collapse-item title="关于我们" name="1">
                    <div>加入兰蔻</div>
                    <div>会员中心</div>
                </el-collapse-item>
                <el-collapse-item title="联系我们" name="2">
                    <div>线上美容顾问</div>
                    <div>订购热线：10000</div>
                </el-collapse-item>
            </el-collapse>
            <p>配送及退货</p>
            <p>专柜查询</p>
            <p>关注我们</p>
            <p>配送及退货</p>
            <p class="text-white"><span class=""></span>电子邮箱</p>
            <div class="con-box margin-t-10">
                <input  type="text" name='email' placeholder="*请输入你的邮箱"/>
                <span class="font-12 text-white padding-l-5">确定</span>
            </div>
        </div>
        <div class="bottom-address font-12 text-c padding-t-50">
            <span class="margin-r-30">© L’Oreal China 欧莱雅（中国）有限公司版权所有</span>
            <span class="margin-r-30">中国工商 沪ICP备08100043号-34</span>
            <span class="margin-r-30">沪公网安备 31010602001526号</span>
        </div>
        <div class="text-c font-12">
             <P class="zhengce-lists padding-t-50 text-grey ">
                <span class="zhengce-list">使用条款</span>
                <span class="zhengce-list">cookies政策</span>
                <span class=" zhengce-list">隐私政策</span>
            </P>
            <P class="text-grey padding-t-20">浏览该网站表示您接受并同意我们使用cookies为您提供个性化的浏览体验。点击<a class="text-grey">Cookies政策</a>了解详情</P>
        </div>
       </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        handleChange (val) {
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/bottom.less';
</style>
