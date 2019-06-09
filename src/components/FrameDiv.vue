<!--
绑定参数
:cool-height="290" 高度
slot参数
slot="title" 标题
slot="echarts" echart图
-->
<template>
  <div class="frame_div" >
    <div class="left_1" :style="style">
      <div class="main_title">
        <slot name="title"></slot>
      </div>
        <slot name="echarts"></slot>
    </div>



  </div>
</template>

<script>
    export default {
        props:{
            coolHeight:{
                type:Number,
                default:290
            }
        },
        data() {
            return {
                 style:{
                     height:this.coolHeight +'px'
                 }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.frame_div>div{
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #2956a2;
  /* box-shadow: 0px 0px 10px #2956a2 inset; */
  box-shadow: -5px 0px 5px #2956a2 inset, /*å·¦è¾¹é˜´å½±*/
  0px -5px 5px #2956a2 inset, /*ä¸Šè¾¹é˜´å½±*/
  5px 0px 5px #2956a2 inset, /*å³è¾¹é˜´å½±*/
  0px 5px 5px #2956a2 inset;
  position: relative;
}
  .main_title{
    width: 220px;
    height: 32px;
    line-height: 33px;
    background-color: #2956a2;
    border-radius: 18px;
    position: absolute;
    top: -14px;
    left: 50%;
    margin-left: -105px;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    box-sizing: border-box;
    /*padding-left: 45px;*/
    z-index: 1000;
    text-align: center;
  }

</style>
