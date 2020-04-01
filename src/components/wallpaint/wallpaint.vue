<template>
    <div>
        <el-carousel class="wallpaper-banner">
            <el-carousel-item v-for="item in wallpaperList" :key="item">
                <img :src='item'/>
            </el-carousel-item>
        </el-carousel>
        <div class="clearfix padding-30">
            <ul class="wallpaper-list float-l">
                <li class="wallpaper-lists">清新</li>
                <li class="wallpaper-lists">清新</li>
                <li class="wallpaper-lists">儿童</li>
                <li class="wallpaper-lists">暖色</li>
                <li class="wallpaper-lists">深色</li>
                <li class="wallpaper-lists">大花</li>
                <li class="wallpaper-lists">小花</li>
                <li class="wallpaper-lists">条纹</li>
                <li class="wallpaper-lists">素色</li>
                <li class="wallpaper-lists">红色</li>
                <li class="wallpaper-lists">橙色</li>
                <li class="wallpaper-lists">黄色</li>
                <li class="wallpaper-lists">绿色</li>
                <li class="wallpaper-lists">蓝色</li>
                <li class="wallpaper-lists">紫色</li>
                <li class="wallpaper-lists">粉色</li>
                <li class="wallpaper-lists">灰色</li>
            </ul>
            <div class="float-r class-wallpaper">
                 <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import banner1 from './image/wallpoint-1.jpg'
import banner2 from './image/wallpoint-2.jpg'
import banner3 from './image/wallpoint-3.jpg'
import banner4 from './image/wallpoint-4.jpg'
import banner5 from './image/wallpoint-5.jpg'
export default {
    data () {
        return {
            wallpaperList: [banner1, banner2, banner3, banner4, banner5]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
