<template>
  <div class="content">
    <el-row>
      <el-col :xs="24" :md="8">
        <img width="320px" class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
      </el-col>
      <el-col :xs="24" :md="12">
        <div class="bullshit">
          <div class="bullshit__oops">页面不存在!</div>
          <div class="bullshit__headline">{{ message }}</div>
          <a href="" class="bullshit__return-home">返回</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return '这将意味着你不能进入该页面...'
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    margin-top: 10%;
  }
  .bullshit {
    position: relative;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
