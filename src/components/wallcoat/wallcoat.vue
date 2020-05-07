<template>
    <div>
        <p class="wall-title" ><span >墙衣</span> > </p>
        <el-carousel class="wallpaper-banner">
            <el-carousel-item v-for="item in wallcoatList" :key="item">
                <img :src='item'/>
            </el-carousel-item>
        </el-carousel>
        <div class="clearfix padding-30">
            <ul class="wallpaper-list float-l" >
                <li class="wallpaper-lists" v-for="(item, index) in getclasslists" :key="index" @click="classListtwo(item.class_id)">{{item.class_name}}</li>
            </ul>
            <div class="float-r class-wallpaper">
                 <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import banner1 from './image/wallcoat-1.jpg'
import banner2 from './image/wallcoat-2.jpg'
import banner3 from './image/wallcoat-3.jpg'
import banner4 from './image/wallcoat-4.jpg'
import banner5 from './image/wallcoat-5.jpg'
import banner6 from './image/wallcoat-6.jpg'
export default {
    data () {
        return {
            wallcoatList: [banner1, banner2, banner3, banner4, banner5, banner6]
        }
    },
    computed: {
        getclasslists () {
            return this.$store.state.wall.classlist
        }
    },
    methods: {
        classListtwo (id) {
            this.$store.dispatch('getclasslisttwo', id)
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/wallcoat.less';

</style>
