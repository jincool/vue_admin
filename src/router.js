import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
});
router.beforeEach((to, from, next) => {
    // 判断是否为外部链接，如果是则重定向External组件
    if (to.path.indexOf('http') !== -1) {
        sessionStorage.setItem('externalUrl',to.fullPath)
        router.push({
            path: '/External',
        });
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
        })
    }
    next();
})
export default router
