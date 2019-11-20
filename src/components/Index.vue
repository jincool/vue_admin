<template>
    <div class="pay">
            <el-container>
                <SideBar></SideBar>

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

<style>
.el-container{
    min-width: 800px;
}
.el-header {
    background-color: #545c64;
    /*background: linear-gradient(to right,#545c64, #5b535e, #5b535e);*/
    color: #ffffff;
    line-height: 50px;
    height: 56px;
}
</style>