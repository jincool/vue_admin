<template>
    <transition name="el-zoom-in-center">
        <div class="login-container background">
            <el-row type="flex" justify="space-around">
                <el-col :xs="12" :sm="10" :md="9">
                    <el-card class="box-card" shadow="hover">

                            <div slot="header" class="login-title">
                                <span class="title">登 录</span>
                            </div>

                        <el-input name="username" type="text" v-model="user.username" autoComplete="on"
                                  placeholder="用户名"/>
                        <br><br>
                        <el-input name="password" @keyup.enter.native="handleLogin" v-model="user.password"
                                  autoComplete="on"
                                  placeholder="密码"/>
                        <br><br>
                        <br>
                        <el-button class="button" type="primary" round :loading="loading"
                                   @click.native.prevent="handleLogin">登录
                        </el-button>
                        <br>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </transition>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'login',
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                },
                loading: false,
                navData: []//菜单数组
            }
        },
        methods: {
            ...mapActions({add_Routes: 'add_Routes'}),
            //登录处理
            handleLogin() {
                this.loading = true;
                let params={
                    'username':this.user.username, 'password':this.user.password
                };
                this.$api.post('?a=menu',params).then((res) => {
                    let {status, navData, user, routerData} = res.data;
                    console.log(res)
                    if (status === 1) {
                        // 将路由信息，菜单信息，用户信息存到sessionStorage里
                        sessionStorage.setItem('menuData', JSON.stringify(this.getMenu(navData)));
                        sessionStorage.setItem('user', JSON.stringify(user));
                        sessionStorage.setItem('routes', JSON.stringify(routerData));
                        this.add_Routes(routerData) //触发vuex里的增加路由
                    } else if (status === 0) {
                        this.loading = false;
                        this.$message.error('账号或密码错误，请重新输入');
                    }
                })
            },
            getMenu(data) {
                let navData = this.navData;
                for (var i = 0; i < data.length; i++) {
                    let navObj = {
                        "id": "",
                        "menu_title": "",
                        "subs": []
                    };
                    if (navData.length === 0) {//此步骤可以和下面的合并

                        navObj.menu_title = data[i].menu_name;
                        navObj.id = data[i].menu_id;
                        let navSubObj = {
                            "url": data[i].component,
                            "sub_title": data[i].sub_name
                        };
                        navObj.subs.push(navSubObj);
                        navData.push(navObj);
                    } else {
                        let flag = false;//编辑此一级菜单是否已经存在
                        for (var j = 0; j < navData.length; j++) {

                            if (navData[j].menu_title === data[i].menu_name) {//相同一级菜单，push子菜单
                                flag = true;
                                break;
                            }
                        }
                        if (flag) {
                            let navSubObj = {
                                "url": data[i].component,
                                "sub_title": data[i].sub_name
                            };
                            navData[j].subs.push(navSubObj);
                        } else {
                            navObj.menu_title = data[i].menu_name;
                            navObj.id = data[i].menu_id;
                            let navSubObj = {
                                "url": data[i].component,
                                "sub_title": data[i].sub_name
                            };
                            navObj.subs.push(navSubObj);
                            navData.push(navObj);
                        }
                    }
                }
                return navData;
            }
        },
    }
</script>
<style>


</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    $bg: #2d3a4b;
    $dark_gray: #889aa4;
    $light_gray: #eee;
    .login-container {
        height: 98vh;
        background-color: #ebeeef;

    }
    .login-title{

    }
    .button{
        width: 100%;
       /*background: linear-gradient(to right, #de7cf5, #c850f5); ;*/
    }
    .title{
        font-size: 2rem;
        color: white;
    }
    .box-card{
        margin-top: 20%;
    }
    .login-title{
        background-image: url("../assets/images/bg-login-title.jpg");
        position: relative;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 70px 15px 74px 15px;
    }
    .login-title::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(54, 84, 99, 0.7);
    }
</style>
