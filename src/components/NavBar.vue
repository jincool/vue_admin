<template>
    <div id="navBar">
        <el-row :gutter="10">
            <el-col :xs="2" :sm="2" :md="1" class="hidden-xs-only">
                <div class="title" @click="collapse"><i :class="iconFold"></i></div>
            </el-col>
            <el-col :xs="2" :sm="2" :md="1" class="hidden-sm-and-up">
                <div class="title" @click="drawer = true"><i :class="iconFold"></i></div>
            </el-col>
            <el-col :xs="18" :sm="12" :md="18" >
                <div class="title" ><i class="el-icon-eleme">管理平台</i></div>
            </el-col>
            <el-col :xs="4" :sm="10" :md="4">
                <span class="hidden-xs-only"><i class="el-icon-s-custom"></i>{{user}}</span>
                <el-dropdown>
                    <i class="el-icon-switch-button" style="color:#fff; margin-left: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>

        </el-row>
        <el-drawer
                title="我是抽屉板"
                size="202px"
                direction="ltr"
                :visible.sync="drawer"
                :with-header="false">
            <SideBar></SideBar>
        </el-drawer>
    </div>
</template>

<script>
    import SideBar from './SideBar';
    export default {
        name: "NavBar",
        components:{SideBar},
        data(){
            return{
                user:'',
                drawer:false,
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

<style lang="scss">
    #navBar .el-drawer__body {
        background-color: $--color-primary;
    }
</style>
<style scoped>
    .title{
        font-size: 1.8rem;
    }
    @media only screen and (max-width:767px){
        .title{
            font-size: 1.1rem;
        }
    }
</style>