//引入Vue核心库
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
//引入模块化+命名空间
import todosOptions from './todos';
//应用Vuex插件
Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
  modules: {
    todos: todosOptions,
  },
});
