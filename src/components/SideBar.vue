<template>
    <div>
        <el-aside :width="asideWidth">
            <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                    :default-active="$route.name"
                    unique-opened
                    :collapse="isCollapse"
                    class="el-menu-vertical"
                   >
                <el-submenu v-for="(child, index) in currentNavItems" :index="child.id" :key="index">
                    <template slot="title"><i class="el-icon-menu"></i><span slot="title">{{child.menu_title}}</span></template>
                    <el-menu-item-group>
                        <el-menu-item  v-for="(item,index) in child.subs" :key="index" :index="item.url">{{item.sub_title}}</el-menu-item>
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
                 asideWidth:'',
                activeIndex:'department-add'
            }
        },
        methods:{
        },
        created () {
            // 从sessionStorage得到menuData
            this.currentNavItems = JSON.parse(sessionStorage.getItem('menuData'));

        },
        computed:{
            isCollapse:function () {
                return  this.$store.state.collapse.collapse;//侧边栏收卷状态
            }

        }
    }
</script>

<style lang="scss">
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu{
        border-right: solid 1px $--color-primary;
    }
</style>