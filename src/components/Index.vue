<template>
    <div class="pay">
            <el-container>
                <el-header >
                    <NavBar></NavBar>
                </el-header>
                <el-container>

                    <SideBar></SideBar>
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

<style scoped>
.el-container{
    min-width: 800px;
}
</style>