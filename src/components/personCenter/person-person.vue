<template>
    <div class="padding-10">
        <p classfont-6>亲爱的 <span class="text-weight">只想随自己的心</span>，填写真实的资料，有助于好友找到你哦。</p>
        <div class="margin-t-20 clearfix">
            <span class="padding-r-20 fl">当前头像:</span>
            <div class="img-touimg fl" >
                <img class="person-imgnew " src="./image/tou.jpg"/>
                <router-link to='/personCenter/Personperson/edit'><span class="edit-tou">编辑头像</span></router-link>
            </div>
            <div class="fl margin-r-20"> <router-view></router-view></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './Css/personCenter.less';
</style>
