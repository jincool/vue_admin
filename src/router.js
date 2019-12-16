import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
    ]
});
router.beforeEach((to, from, next) => {
    console.log(to)

    // document.body.style.background="linear-gradient(to right, #e9eaef, #e9eaef)";
    // 判断是否为外部链接，如果是则重定向outside_iframe组件
    if (to.path.indexOf('http') !== -1) {

        router.push({
            path: '/outside-iframe',
            query: {redirect: to.fullPath}
        });
        console.log(next())
        next();
    }
    // 判断是否登录
    if (!sessionStorage.getItem('user') && to.path !== '/login') {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    } else {
        next({
            // path: '/pay',
        })
    }


    next();
})
export default router
