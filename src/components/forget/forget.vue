<template>
    <div class="longran-Forget fondstep">
        <ul class="forget-step clearfix">
            <li class="forget-step-step steps-one active">
                <p class="forget-step-numbox "><span class="forget-step-num">1</span></p>
            </li>
            <li class="forget-step-step  steps-two ">
                <p class="forget-step-numbox"><span class="forget-step-num">2</span></p>
            </li>
            <li class="forget-step-step steps-three">
                <p class="forget-step-numbox"><span class="forget-step-num">3</span></p>
            </li>
        </ul>
        <ul class="forget-stepcon clearfix padding-t-10">
            <li class="forget-step-con active">
               <span class="step-con font-16"> 验证身份</span>
            </li>
            <li class="forget-step-con step-two ">
                <span class="step-con  font-16"> 设置新密码</span>
            </li>
            <li class="forget-step-con step-three">
                <span class="step-con font-16"> 完成</span>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './Css/forget.less';

</style>
