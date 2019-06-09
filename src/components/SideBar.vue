<template>
    <div>
        <el-aside width="200px">
            <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    default-active="index_info"
                    router
                    active-text-color="#ffd04b">
                <el-submenu v-for="(child, index) in currentNavItems" :index="child.id" :key="index">
                    <template slot="title"><i class="el-icon-menu"></i>{{child.menu_title}}</template>
                    <el-menu-item-group>
                        <el-menu-item  v-for="item in child.subs" :index="item.url">{{item.sub_title}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data(){
            return{
                currentNavItems: [],
            }
        },
        methods:{
        },
        created () {
            // 从sessionStorage得到menuData
            this.currentNavItems = JSON.parse(sessionStorage.getItem('menuData'));
        }
    }
</script>

<style scoped>

</style>