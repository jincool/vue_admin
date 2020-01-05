<template>
  <div id="app">
      我是其他模块页面
    <router-view/>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
<style>
    .dataAllBorder01{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px #0174f5 solid;
        padding: 1px;
        box-sizing: border-box;
    }
    .dataAllBorder02{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border:2px solid #016ae0;
        border-radius: 10px;
    }
    .data_tit1{
        width: 46%;
        height: 10%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin:0 auto;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
    }
</style>
