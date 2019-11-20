<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="2" :sm="2" :md="1">
                <div class="title" @click="collapse"><i :class="iconFold"></i></div>
            </el-col>
            <el-col :xs="10" :sm="12" :md="18" >
                <div class="title" ><i class="el-icon-eleme"></i></div>
            </el-col>
            <el-col :xs=12 :sm="10" :md="4">
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
                collapseStatus:false,
                iconFold:"el-icon-s-fold",
            }
        },
        methods:{
            // 退出是清空sessionStorage信息
            logout () {
                sessionStorage.removeItem('routes')
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('menuData')
                this.$router.push('/login')
            },
            //更改菜单栏收卷状态
            collapse(){
                this.$store.commit('CHANGE_COLLAPSE');//提交菜单栏收卷状态
                let status = this.$store.state.collapse.collapse;
                this.iconFold = status?'el-icon-s-unfold':'el-icon-s-fold';//更改收缩图标
            }
        },
        created () {
           this.user = JSON.parse(sessionStorage.getItem('user')).name


        }
    }
</script>

<style >
    .title{
        font-size: 28px;
    }

</style>