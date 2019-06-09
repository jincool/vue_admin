// import BigScreen from '@/views/BigScreen.vue'
// 开启路由懒加载
// resolve=> require(['@/views/BigScreen.vue'],resolve)
export default  {
    path: '/big_screen',
    name: 'BigScreen',
    redirect: '/big_screen/activity',
    // component: BigScreen,
    component: resolve=> require(['@/views/BigScreen.vue'],resolve),
    children: [
        {
            // 活动开展
            path: 'activity',
            name:'Activity',
            component: resolve=> require(['@/views/big_screen/ActivityView.vue'],resolve)
        },
        {
            //党员队伍
            path: 'dy_info',
            name:'DyInfo',
            component: resolve=> require(['@/views/big_screen/DyInfoView.vue'],resolve)
        },
        {
            //学习教育
            path: 'education',
            name:'Education',
            component: resolve=> require(['@/views/big_screen/EducationView.vue'],resolve)
        },
        {
            //系统预警
            path: 'waring',
            name:'Waring',
            component: resolve=> require(['@/views/big_screen/WaringView.vue'],resolve)
        },
        {
            //视屏会议
            path: 'video',
            name:'Video',
            component: resolve=> require(['@/views/big_screen/VideoView.vue'],resolve)
        },
        {
            //党费缴纳
            path: 'pay',
            name:'Pay',
            component: resolve=> require(['@/views/big_screen/PayView.vue'],resolve)
        },
        {
            //组织关系转接
            path: 'zzgx',
            name:'ZzGx',
            component: resolve=> require(['@/views/big_screen/ZzGxView.vue'],resolve)
        },
    ]
}