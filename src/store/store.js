import Vue from 'vue'
import Vuex from 'vuex'
import addRoutes from './addRoutes'
import collapse from './collapse'
import selectDepartment from './selectDepartment'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    addRoutes,collapse,selectDepartment
  }
});

export default store
