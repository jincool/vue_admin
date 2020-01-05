import {ADD_ROUTES} from './mutations_type'
import Menufilter from './menufilter'
import router from '../router'
const addRoutes = {
    state: {
        routeData: []
    },
    mutations: {
        [ADD_ROUTES](state, addrouter) {
            let routes = []
            Menufilter(routes, addrouter) // 将后台的路由数据components转化成组件
            routes[0].children.push({path: '*', component: () => import("@/components/404")});//添加404页面
            router.addRoutes(routes)  // 添加路由
            router.push('/index')
        }
    },
    actions: {
        add_Routes({commit}, addrouter) {
            commit(ADD_ROUTES, addrouter)
        }
    }
};
export default addRoutes