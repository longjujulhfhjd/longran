<template>
  <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
    <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
  </div>
</template>
<script>
export default {
    name: 'validCode',
    props: {
        width: {
            type: String,
            default: '45%'
        },
        height: {
            type: String,
            default: '40px'
        },
        length: {
            type: Number,
            default: 4
        }
    },
    data () {
        return {
            codeList: []
        }
    },
    mounted () {
        this.createdCode()
    },
    methods: {
        refreshCode () {
            this.createdCode()
        },
        createdCode () {
            let len = this.length
            let codeList = []
            let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
            let charsLen = chars.length
            // 生成
            for (let i = 0; i < len; i++) {
                let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
                codeList.push({
                    code: chars.charAt(Math.floor(Math.random() * charsLen)),
                    color: `rgb(${rgb})`,
                    fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
                    padding: `${[Math.floor(Math.random() * 10)]}px`,
                    transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
                })
            }
            // 指向
            this.codeList = codeList
            // 将当前数据派发出去
            this.$emit('update:value', codeList.map(item => item.code).join(''))
        },
        getStyle (data) {
            return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
        }
    }
}
</script>
<style scoped lang="less">
  .ValidCode{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-size: 20px;
    height: 40px;
    top: -40px;
    left: 130%;
    // border: 1px solid #cccc;
    span{
      display: inline-block;
      font-size: 20px !important;
    }
  }

  .dialog-login-register .ValidCode{
    //   left: 84%;
  }
@media (max-width: 1039px) {
     .dialog-login-register .ValidCode{
      left: 86%;
  }
}

  @media (max-width: 920px){
      .ValidCode{
          left: 90%;
      }
  }

  @media screen and (max-width: 768px) {
       .ValidCode{
          left: 110% !important;
          width: 50% !important;
      }
  }
</style>
