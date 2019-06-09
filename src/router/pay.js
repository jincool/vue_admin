// import BigScreen from '@/views/BigScreen.vue'
// 开启路由懒加载
// resolve=> require(['@/views/BigScreen.vue'],resolve)
export default  {
    path: '/pay',
    name: 'pay',
    redirect: '/pay/payregister',
    // component: BigScreen,
    component: resolve=> require(['@/views/pay_admin/Pay.vue'],resolve),
    children: [
        {
            //缴纳登记
            path: 'payregister',
            name:'PayRegister',
            component: resolve=> require(['@/components/pay/PayRegister.vue'],resolve)
        },
        {
            //上划申请
            path: 'upapply',
            name:'UpApply',
            component: resolve=> require(['@/components/pay/UpApply.vue'],resolve)
        },
        {
            //上划审核
            path: 'upcheck',
            name:'UpCheck',
            component: resolve=> require(['@/components/pay/UpCheck.vue'],resolve)
        },
        {
            //下拨申请
            path: 'downapply',
            name:'DownApply',
            component: resolve=> require(['@/components/pay/DownApply.vue'],resolve)
        },
        {
            //下拨审核
            path: 'downcheck',
            name:'DownCheck',
            component: resolve=> require(['@/components/pay/DownCheck.vue'],resolve)
        },
        {
            //党费收入
            path: 'income',
            name:'Income',
            component: resolve=> require(['@/components/pay/Income.vue'],resolve)
        },
        {
            //党费支出审核汇总
            path: 'expend',
            name:'Expend',
            component: resolve=> require(['@/components/pay/Expend.vue'],resolve)
        },
        {
            //党费支出申请
            path: 'exapply',
            name:'ExApply',
            component: resolve=> require(['@/components/pay/ExApply.vue'],resolve)
        },
        {
            //党费统计
            path: 'count',
            name:'Count',
            component: resolve=> require(['@/components/pay/Count.vue'],resolve)
        },
        {
            //党费分类统计
            path: 'countkind',
            name:'CountKind',
            component: resolve=> require(['@/components/pay/CountKind.vue'],resolve)
        },
        {
            //党费缴纳
            path: 'paymoney',
            name:'PayMoney',
            component: resolve=> require(['@/components/pay/PayMoney.vue'],resolve)
        },
    ]
}