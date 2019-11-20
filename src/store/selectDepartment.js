//监听选择的部门ID数组
import {SELECT_DEPARTMENT} from "./mutations_type";
import {TREE_DEPARTMENT} from "./mutations_type";
const department = {
    state: {
        deptId: [],//select框部门id数组
        deptTreeId: {},//树形图部门{id:1,pid:0}
    },
    mutations: {
        [SELECT_DEPARTMENT](state,deptId) {
            state.deptId = deptId;
        },
        [TREE_DEPARTMENT](state,deptTreeId){
            state.deptTreeId = deptTreeId;
        }
    }
};
export default department