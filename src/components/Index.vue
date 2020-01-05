<template>
    <div>
            <el-container>
                <SideBar class="hidden-xs-only"></SideBar>

                <el-container>

                    <el-header >
                        <NavBar></NavBar>
                    </el-header>
                    <el-main >
                        <router-view></router-view>
                    </el-main>
                </el-container>

        </el-container>

    </div>
</template>

<script>
    import SideBar from './SideBar';
    import NavBar from './NavBar';

    export default {
        name: "Pay",
        components:{SideBar,NavBar},
        data(){
           return{
               user:'',
           }
        },
    }
</script>

<style lang="scss">
    .el-main{
        max-height:88vh;
        overflow: auto;
    }
    .el-header {
        background-color: $--color-primary;
        color: #ffffff;
        line-height: 50px;
        height: 56px;
    }
</style>