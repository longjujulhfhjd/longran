<template>
    <div class="logran-Codeover text-c">
        <p class="font-24 padding-10 text-red">恭喜您成功找回密码！</p>
        <p class="padding-10">为了保障您的账户安全，请妥善保管您的密码！</p>
        <p class="padding-10">5S 后自动跳转登录页，或者点击完成跳转登录页</p>
        <router-link  class="skin-bto next-btn margin-t-20 " to="/login">
                完成
        </router-link>
</div>
</template>

<script>
export default {
    mounted () {
        let end1 = document.querySelector('.step-three')
        let end2 = document.querySelector('.steps-three')
        end1.classList.add('active')
        end2.classList.add('active')
        let end3 = document.querySelector('.step-two')
        let end4 = document.querySelector('.steps-two')
        end3.classList.add('active')
        end4.classList.add('active')
        return setTimeout(() => {
            window.location.href = '/login'
        }, 5000)
    }
}
</script>

<style lang="less" scoped>
@import './Css/forget.less';

</style>
