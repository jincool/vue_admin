<!--
绑定参数
:cool_height="200" 高度
:cool_color="'#9a18f5'" 背景颜色
slot参数
slot="title" 标题
slot="int" 数据
-->
<template>
    <div>
        <div class="card_cool" :style="style">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="7">
                    <span class="card_icon"><i class=" el-icon-s-data"></i></span>
                </el-col>
                <el-col :span="17">
                    <div>
                    <span class="card_title">
                        <slot name="title">
                        </slot>
                    </span>
                    </div>
                    <div>
                    <span class="card_int">
                         <slot name="int">
                        </slot>
                    </span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardCool",
        props:{
            // 高度
              coolHeight:{
                  type:Number,
                  default:80
              },
            //背景颜色
            coolColor:{
                type:String,
                default:"#9a18f5"
            },

        },
        data() {
            return {
                style:{'background-color':this.coolColor,
                    height:this.coolHeight + 'px'
                },
            }
        },
    }
</script>

<style scoped>
    .card_icon {
        font-size: 45px;
        color: #3fff6b;
    }

    .card_title {
        font-size: 17px;
        color: #fff;
        text-align: center;
        font-weight: 700
    }

    .card_int {
        font-size: 32px;
        color: #f4ff57;
        text-align: center;
        font-weight: 900;
        margin-left: 2%;
    }

    .card_cool {
        border-radius: 10px;
    }

</style>