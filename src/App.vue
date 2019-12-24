<template>
    <div id="app" >
        <Top></Top>
        <router-view></router-view>
        <Bottoms></Bottoms>
        <Slide></Slide>
    </div>
</template>

<script>
import Top from 'components/Common/Top/top.vue'
import Bottoms from 'components/Common/Bottom/bottom.vue'
export default {
    name: 'App',
    components: {
        Top,
        Bottoms
        // Slide,
    },
    data () {
        return {
        }
    },
    mounted () {
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}
div.v-modal{
  z-index: 2 !important;
}
</style>
