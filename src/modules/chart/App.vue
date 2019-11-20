<template>
  <div id="app">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">dd</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </template>
      <el-button type="primary" icon="el-icon-edit"></el-button>

      <router-link to="/"></router-link>

      <div class="dataAllBorder01">
          <div class="dataAllBorder02">
              <div class="data_tit1">xxxxx分析</div>
          dddd
          </div>
      </div>

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
        background-image: url("../../assets/images/tit01s.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin:0 auto;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
    }
</style>
