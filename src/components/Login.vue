<template>
    <transition name="el-zoom-in-center">
        <div class="login-container background">
                    <el-row type="flex" justify="space-around">
                        <el-col :xs="24" :sm="16" :md="9">
                            <div class="title"></div>
                            <el-card  shadow="hover">
                                <div slot="header" class="login-title">
                                    <span class="title-login">登 录</span>
                                </div>

                                <el-input name="username" type="text" v-model="user.username" autoComplete="on"
                                          placeholder="用户名"/>
                                <br><br>
                                <el-input name="password" @keyup.enter.native="handleLogin" v-model="user.password"
                                          autoComplete="on"
                                          show-password
                                          placeholder="密码"/>
                                <br>
                                <br>
                                <el-checkbox v-model="checked">记住密码</el-checkbox>
                                <br><br>
                                <el-button class="button" type="primary" round :loading="loading"
                                           @click.native.prevent="handleLogin">登 录
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
                checked:false,
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
                this.$api.post('?a=login',params).then((res) => {
                    let {status, navData, user, routerData} = res.data;
                    if (status === 1) {
                        // 将路由信息，菜单信息，用户信息存到sessionStorage里
                        sessionStorage.setItem('menuData', JSON.stringify(this.getMenu(navData)));
                        sessionStorage.setItem('user', JSON.stringify(user));
                        sessionStorage.setItem('routes', JSON.stringify(routerData));
                        this.add_Routes(routerData) //触发vuex里的增加路由
                        // 储存登录信息
                        this.setUserInfo()
                    } else if (status === 0) {
                        this.loading = false;
                        this.$message.error('账号或密码错误，请重新输入');
                    }
                })
            },
            // 储存表单信息
            setUserInfo: function () {
                // 判断用户是否勾选记住密码，如果勾选，向cookie中储存登录信息，
                // 如果没有勾选，储存的信息为空
                if(this.checked){
                    this.setCookie("username",this.user.username)
                    this.setCookie("password",this.user.password)
                    this.setCookie("checked",true)
                }else{
                    this.setCookie("username","")
                    this.setCookie("password","")
                }
            },
            // 获取cookie
            getCookie: function (key) {
                if (document.cookie.length > 0) {
                    var start = document.cookie.indexOf(key + '=')
                    if (start !== -1) {
                        start = start + key.length + 1
                        var end = document.cookie.indexOf(';', start)
                        if (end === -1) end = document.cookie.length
                        return unescape(document.cookie.substring(start, end))
                    }
                }
                return ''
            },
            // 保存cookie
            setCookie: function (cName, value, expiredays) {
                var exdate = new Date()
                exdate.setDate(exdate.getDate() + expiredays)
                document.cookie = cName + '=' + decodeURIComponent(value) +
                    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
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
                        let url  =data[i].component.substring(data[i].component.indexOf("\/")+1)
                        let navSubObj = {
                            "url": url,
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
                        let url  =data[i].component.substring(data[i].component.indexOf("\/")+1)
                        if (flag) {
                            let navSubObj = {
                                "url": url,
                                "sub_title": data[i].sub_name
                            };
                            navData[j].subs.push(navSubObj);
                        } else {
                            navObj.menu_title = data[i].menu_name;
                            navObj.id = data[i].menu_id;
                            let navSubObj = {
                                "url": url,
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
        created(){
            let username = this.getCookie("username")
            let password = this.getCookie("password")
            if(username){
                this.user.username = username
                this.user.password = password
                this.checked = true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login-container {
        height: 98vh;
        background-color: #ebeeef;
        /*background-image: url("../assets/images/bg-login.jpg");*/
        /*background-repeat: no-repeat;*/
        /*background-size:100% 100%;*/
    }
    .button{
        width: 100%;
    }
    .title-login{
        font-size: 3rem;
        color: #545c64;
    }
    .title{
        font-size: 2.1rem;
        font-weight: 700;
        color: #545c64;
        text-align: center;
        margin-top: 15%;
        margin-bottom: 20px;
    }
    @media only screen and (max-width:767px){
        .title{
            font-size: 1.1rem;
        }
        .login-container {
            height: 98vh;
            background-color: #ebeeef;
            background-image: none;
        }
    }
    .login-title{
        /*background-image: url("../assets/images/bg-login-title.png");*/
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
        padding: 20px 15px 24px 15px;
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
        /*background-color: rgba(208, 204, 208, 0.7);*/
        /*background-color: rgba(54, 84, 99, 0.7);*/
    }
</style>
