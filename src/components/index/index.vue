<template>
    <div class="longran-Index">
        <el-carousel class="banner1">
            <el-carousel-item v-for="item in bannerImg" :key="item">
                <img :src='item'/>
            </el-carousel-item>
        </el-carousel>
        <!-- tab切换 -->
        <div class="change margin-30-top  content clearfix text-l">
            <div class="change-title-list font-18 clearfix  tab-box">
                    <a class="float-l chanbox-title active">推荐商品</a>
                    <a class="float-l chanbox-title">新品推荐</a>
                    <a class="float-l chanbox-title">活动商品</a>
                    <span class="float-r clearfix  padding-r-30">换一批</span>
                    <span class="el-icon-refresh-right float-r padding-r-10 padding-t-20"></span>
            </div>
            <div class="clearfix tab-changebox" >
                <!-- 推荐商品 -->
                <ul class="change-list-padding tabul1 tab-list  active clearfix">
                    <li class="change-lists ">
                        <img class="tab-img" :src="banner1" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">推荐商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">热</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists ">
                        <img class="tab-img" :src="banner1" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">推荐商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">热</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists ">
                        <img class="tab-img" :src="banner1" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">推荐商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">热</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists ">
                        <img class="tab-img" :src="banner1" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">推荐商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">热</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists ">
                        <img class="tab-img" :src="banner1" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">推荐商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">热</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                </ul>
                <!-- 新品推荐 -->
                <ul class="change-list-padding tab-list tabul2 clearfix">
                    <li class="change-lists float-l ">
                        <img class="" :src="banner2" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">新品推荐</div>
                            <div class="text-main font-22">¥88.88</div>
                             <p class=" tab-cover">新</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner2" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">新品推荐</div>
                            <div class="text-main font-22">¥88.88</div>
                             <p class=" tab-cover">新</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner2" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">新品推荐</div>
                            <div class="text-main font-22">¥88.88</div>
                             <p class=" tab-cover">新</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner2" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">新品推荐</div>
                            <div class="text-main font-22">¥88.88</div>
                             <p class=" tab-cover">新</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner2" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">新品推荐</div>
                            <div class="text-main font-22">¥88.88</div>
                             <p class=" tab-cover">新</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                </ul>
                <!-- 活动商品 -->
                <ul class="change-list-padding tab-list tabul3 clearfix">
                    <li class="change-lists float-l ">
                        <img class="" :src="banner3" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">活动商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">促</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                   <li class="change-lists float-l ">
                        <img class="" :src="banner3" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">活动商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">促</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner3" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">活动商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">促</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner3" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">活动商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">促</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                    <li class="change-lists float-l ">
                        <img class="" :src="banner3" />
                        <div class="chang-text font-14">
                            <div class="text-ellipsis font-16">活动商品</div>
                            <div class="text-main font-22">¥88.88</div>
                            <p class=" tab-cover">促</p>
                        </div>
                        <router-link  class="detail-btn font-16" to='/detail'> 商品详情</router-link>
                    </li>
                </ul>
            </div>
        </div>
         <!-- 限时秒杀 -->
        <div class="seckill margin-t-50">
            <div class="seckill-time color-white fl text-c">
                <div class="font-28">龙冉秒杀</div>
                <div class="color font-16 padding-t-30">倒计时</div>
                <div class="color time-down padding-t-40">
                    <span>0</span>
                    <span>0</span>
                    :
                    <span>0</span>
                    <span>0</span>
                    :
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
           <div class="seckill-list-box fl">
                <ul class="seckill-lists ">
                    <li class="seckill-list">
                        <img :src="banner1"/>
                        <p class="text-overflow padding-t-20 font-16">无无缝墙纸无缝墙纸无缝墙纸缝墙纸无缝墙纸无缝墙纸无缝墙纸缝墙纸</p>
                        <p class=" margin-t-20 seckill-money font-20">
                            <span class="yuanjia color-white">￥48.00</span>
                            <span class="xianjia ">￥ 48.00</span>
                        </p>
                    </li>
                     <li class="seckill-list">
                        <img :src="banner1"/>
                        <p class="text-overflow padding-t-20 font-16">无无缝墙纸无缝墙纸无缝墙纸缝墙纸无缝墙纸无缝墙纸无缝墙纸缝墙纸</p>
                        <p class=" margin-t-20 seckill-money font-20">
                            <span class="yuanjia color-white">￥48.00</span>
                            <span class="xianjia ">￥ 48.00</span>
                        </p>
                    </li>
                     <li class="seckill-list">
                        <img :src="banner1"/>
                        <p class="text-overflow padding-t-20 font-16">无无缝墙纸无缝墙纸无缝墙纸缝墙纸无缝墙纸无缝墙纸无缝墙纸缝墙纸</p>
                        <p class=" margin-t-20 seckill-money font-20">
                            <span class="yuanjia color-white">￥48.00</span>
                            <span class="xianjia ">￥ 48.00</span>
                        </p>
                    </li>
                </ul>
           </div>
        </div>
        <!-- 店面咨询 -->
        <p class="news-bigtitle margin-tb-30 font-18"><span class="icon-xinwen iconfont padding-r-10 font-20"></span> 新闻咨询</p>
        <el-table
            :data="tableData"
            height="500"
            style="width: 100%">
             <el-table-column
                class="news-title"
                prop="title"
                label="活动主题"
                width="1000px">
                </el-table-column>
                <el-table-column
                prop="date"
                label="开始时间"
                width="300px">
                </el-table-column>
        </el-table>
        <!-- 墙衣 -->
        <p class="font-36 text-c padding-tb-20">墙衣</p>
        <div class='banner2'>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in bannerImg" :key="item.g_id">
                    <div class='skin-content-box'>
                        <img :src='item'/>
                        <p class="padding-t-10">无缝墙纸</p>
                        <p  class="padding-t-10">￥560元/平方米</p>
                        <p  class="skin-bto-hover margin-t-10">立即购买</p>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 墙纸 -->
        <p class="font-36 text-c padding-tb-20">墙纸</p>
        <div class='banner2'>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in bannerImg" :key="item.g_id">
                    <div class='skin-content-box'>
                        <img :src='item'/>
                        <p class="padding-t-10">无缝墙纸</p>
                        <p  class="padding-t-10">￥560元/平方米</p>
                        <router-link class="skin-bto-hover margin-t-10" to='/detail'> 立即购买</router-link>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
          <!-- 墙画 -->
        <p class="font-36 text-c padding-tb-20">墙画</p>
        <div class='banner2'>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in bannerImg" :key="item.g_id">
                    <div class='skin-content-box'>
                        <img :src='item'/>
                        <p class="padding-t-10">无缝墙画</p>
                        <p  class="padding-t-10">￥560元/平方米</p>
                        <router-link class="skin-bto-hover margin-t-10" to='/detail'> 立即购买</router-link>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 墙布 -->
        <p class="font-36 text-c padding-tb-20">墙布</p>
        <div class='banner2'>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in bannerImg" :key="item.g_id">
                    <div class='skin-content-box'>
                        <img :src='item'/>
                        <p class="padding-t-10">无缝墙纸</p>
                        <p  class="padding-t-10">￥560元/平方米</p>
                        <p  class="skin-bto-hover margin-t-10">立即购买</p>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 买家秀 -->
        <p class="font-36 text-c padding-tb-20">买家秀</p>
        <div v-for="item in bannerImg" :key="item" class="buy-show">
            <img :src='item'/>
        </div>
    </div>
</template>

<script>
import banner1 from './img/banner_img1.jpg'
import banner2 from './img/banner_img2.jpg'
import banner3 from './img/banner_img3.jpg'
import banner4 from './img/banner_img4.jpg'
import banner5 from './img/banner_img5.jpg'
import banner6 from './img/banner_img6.jpg'
import banner7 from './img/banner_img7.jpg'
export default {
    data () {
        return {
            banner1,
            banner2,
            banner3,
            bannerImg: [banner1, banner2, banner3, banner4, banner5, banner6, banner7],
            tableData: [{
                date: '2016-05-03',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                title: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                title: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    mounted () {
        this.tabchange()
        return setTimeout(() => {
            this.isLogin()
        }, 5000)
    },
    methods: {
        // 验证是否登录
        isLogin () {
            let token = window.localStorage.getItem('token')
            if (!token) {
                this.$router.push('/login')
            }
        },
        tabchange () {
            var chanBoxTitle = document.querySelectorAll('.chanbox-title')
            for (var i = 0; i < chanBoxTitle.length; i++) {
                // 给chanBoxTitle添加下标
                chanBoxTitle[i].index = i
                chanBoxTitle[i].onmouseenter = function () {
                    var parent = this.parentNode.nextElementSibling
                    var tablists = parent.children
                    for (var j = 0; j < chanBoxTitle.length; j++) {
                        chanBoxTitle[j].classList.remove('active') // 循环去掉active,只有一个被添加active,一个被选中
                        tablists[j].classList.remove('active') // 循环去掉active,只有一个被添加active,一个被选中
                    }
                    this.classList.add('active')
                    tablists[this.index].classList.add('active')
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/index.less';
</style>
