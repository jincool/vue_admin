//监听侧边菜单栏是否收卷
import {CHANGE_COLLAPSE} from "./mutations_type";
const collapse = {
    state: {
        collapse: false,
    },
    mutations: {
        [CHANGE_COLLAPSE](state) {
            state.collapse = !state.collapse;
        }
    }
};
export default collapse