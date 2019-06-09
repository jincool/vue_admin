<!--slot参数-->
<!--slot="title" 标题-->
<!--slot="main" 主题内容-->
<template>
    <div class="cool_form">
        <el-row >
            <el-col :span="24" class="cool_form_title">
                <div>
                    <slot name="title"></slot>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <transition name="el-zoom-in-top">
                <el-card v-show='show' shadow="hover">
                    <slot name="main"></slot>
                </el-card>
            </transition>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "FormFrame",
        data(){
            return{
                show:false
            }
        },
        mounted(){
            this.show = true
        }
    }
</script>

<style scoped>
    .cool_form {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border-radius: 4px
    }

    .cool_form_title {
        /*background-color: #409EFF;*/
        background: linear-gradient(to right, #de7cf5, #c850f5);
        color: #fff;
        font-size: 22px;
        text-align: center;
        height: 45px;
        border-radius: 5px;
    }
    .cool_form_title>div {
        margin-top: 10px;
    }
    .cool_form_body{
        padding: 10px;
        background-color:#fff
    }
</style>