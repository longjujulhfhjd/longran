<template>
    <div class="padding-50 margin-50" style="border:1px dashed rgb(223, 222, 222);">
        <p class="padding-10 text-red "><span class="el-icon-warning padding-r-10"></span>亲，请核对订单信息</p>
        <div class="clearfix padding-10">
            <img class="revise-touimg fl" src="./image/tou.jpg"/>
            <div class="fl margin-l-15 margin-t-20">
                <p  class="padding-10 text-weight">{{goodsname}}</p>
                <p  class="padding-10">共<span>{{num}}</span>商品，合计￥<span>{{goodsprice}}</span></p>
            </div>
        </div>
        <p class="padding-10">姓名：<input style="border:none;padding-left:10px;" placeholder="龙菊"/></p>
        <p class="padding-10">电话：<input style="border:none;padding-left:10px;" placeholder="18286792321"/></p>
        <p class="padding-10">地址：<span>贵州省 毕节市 七星关区 麻园街道 30米大道三江依山雅苑</span> <router-link to=''><span @click="dialogTableVisible = true" class="padding-l-20">修改</span></router-link> </p>
        <router-link to='/personCenter/personshipped'> <p class="skin-bto-hover   margin-10"  @click="open">确认</p></router-link>
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
                <el-table-column property="name" label="姓名" width="100"></el-table-column>
                <el-table-column property="tel" label="电话" width="150"></el-table-column>
                <el-table-column property="address" label="地址" width="400"></el-table-column>
                <el-table-column label="操作" width="100">
                    <span class="skin-bto-hover">选择</span>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            gridData: [{
                tel: '18286792321',
                name: '龙菊',
                address: '贵州省 毕节市 七星关区 麻园街道 30米大道三江依山雅苑'
            }, {
                tel: '18286792321',
                name: '龙菊',
                address: '贵州省 毕节市 七星关区 麻园街道 贵州工程应用技术学院'
            }, {
                tel: '18286792321',
                name: '龙菊',
                address: '重庆 重庆市 沙坪坝区 西永街道 永顺路7号菁英公寓11号楼'
            }, {
                tel: '18286792321',
                name: '龙菊',
                address: '贵州省 毕节市 纳雍县 雍熙街道 中岭镇水泥厂'
            }],
            dialogTableVisible: false,
            formLabelWidth: '120px',
            goodsprice: '',
            goodsname: '',
            num: ''
        }
    },
    methods: {
        open () {
            this.$confirm('是否确认修改订单信息', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '修改',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'info',
                    message: '修改信息成功'
                })
            }).catch(action => {
                this.$message({
                    type: 'info',
                    message: action === 'cancel'
                        ? '已取消修改' : '停留在当前页面'
                })
            })
        }
    },
    mounted () {
        let goodsname = window.localStorage.getItem('ordersname')
        let num = window.localStorage.getItem('num')
        this.goodsname = goodsname
        this.num = num
        let goodsprice = JSON.parse(window.localStorage.getItem('ordersprice'))
        this.goodsprice = goodsprice
    },
    computed: {
        getgooddetaillist () {
            return this.$store.state.wall.goodsdetaillist
        }
    }
}
</script>

<style lang="less" scoped>
@import './Css/progress.less';
</style>
