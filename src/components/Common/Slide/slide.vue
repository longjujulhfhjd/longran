<template>
    <div class="longran-Slide text-white">
        <ul class="slide-lists">
            <li  class="slide-list slide-list-returntop" @click="returnTop" style="float:none;">
                <i class="font-18 el-icon-thumb"></i>
            </li>
            <li  class="slide-list" @click="opencart"  style="float:none;">
                <i class="font-18 el-icon-shopping-cart-full"></i>
            </li>
            <div class="slide-shopcon">
                <div class="cart-cartcon">购物车内容</div>
            </div>
            <li  class="slide-list" @click="openservice" style="float:none;">
                <i class="font-18 el-icon-service"></i>
            </li>
            <div class="slide-servicecon">
                <p class="service-con-title">
                    <span>客服</span>
                    <span><i class="el-icon-remove-outline"></i></span>
                </p>
                <div class="service-con">
                </div>
            </div>
        </ul>

    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        opencart () {
            let servicecon = document.querySelector('.slide-servicecon')
            let cartcon = document.querySelector('.slide-shopcon')
            console.log(cartcon)
            cartcon.style.display = 'block'
            servicecon.style.display = 'none'
        },
        openservice () {
            let servicecon = document.querySelector('.slide-servicecon')
            let cartcon = document.querySelector('.slide-shopcon')
            console.log(servicecon)
            servicecon.style.display = 'block'
            cartcon.style.display = 'none'
        },
        returnTop () {
            let returetop = document.body.scrollTop || document.documentElement.scrollTop
            var time = setInterval(function () {
                returetop = returetop - 50
                document.body.scrollTop = returetop
                document.documentElement.scrollTop = returetop
                if (returetop <= 0) {
                    clearInterval(time)
                }
            }, 1)
        },
        getscrool () {
            var Top = document.body.scrollTop || document.documentElement.scrollTop
            let divs = document.querySelector('.longran-Slide')
            if (Top > 500) {
                divs.style.display = 'block'
            } else {
                divs.style.display = 'none'
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.getscrool)
    }
}
</script>
<style lang="less" scoped>
@import './Css/slide.less';
</style>
