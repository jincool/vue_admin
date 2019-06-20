<template>
    <div>
        <el-row>
            <el-col :span="20">
                <span class="title">后 台 管 理 系 统</span>
            </el-col>
            <el-col :span="4">
                <span><i class="el-icon-s-custom"></i>{{user}}</span>
                <el-dropdown>
                    <i class="el-icon-switch-button" style="color:#fff; margin-left: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
                user:'',
            }
        },
        methods:{
            // 退出是清空sessionStorage信息
            logout () {
                sessionStorage.removeItem('routes')
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('menuData')
                this.$router.push('/login')
            }
        },
        created () {
            this.user = sessionStorage.getItem('user')
        }
    }
</script>

<style >
    .el-header {
        /*background-color: #409EFF;*/
        background: linear-gradient(to right,#545c64, #681969, #b330f5);
        color: #ffffff;
        line-height: 60px;
    }
    .title{
        font-size: 30px;
    }
</style>