<template>
    <div id="app" >
        <Top ></Top>
        <router-view ></router-view>
        <Bottoms></Bottoms>
        <Slide></Slide>
    </div>
</template>

<script>
import Top from 'components/Common/Top/top.vue'
import Bottoms from 'components/Common/Bottom/bottom.vue'
import Slide from 'components/Common/Slide/slide.vue'
export default {
    name: 'App',
    components: {
        Top,
        Bottoms,
        Slide
    },
    data () {
        return {
            num: ''
        }
    },
    methods: {
    },
    mounted () {
        // window.addEventListener('beforeunload', e => {
        //     window.localStorage.removeItem('token')
        // })
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
    max-width: 1920px;
}
div.v-modal{
  z-index: 2 !important;
}
.index-slide{
    position: fixed;
    right: 0;
    top:40%;
}
</style>
