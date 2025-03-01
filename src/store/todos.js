export default {
  namespaced: true,
  //准备actions对象——响应组件中用户的动作
  actions: {
    // 增：添加一个todo
    addTodo({ commit }, todoObj) {
      commit('ADD_TODO', todoObj);
    },
  },

  //准备mutations对象——修改state中的数据
  mutations: {
    /* header */
    // （增加一个对象）：添加一个todo
    ADD_TODO(state, todoObj) {
      state.myTodos.unshift(todoObj);
    },

    /* footer */
    // （删除所有对象）：清除所有已经完成的todo
    CLEAR_ALL_TODO(state) {
      state.myTodos = state.myTodos.filter((todo) => !todo.done);
    },
    // （修改全部对象的done属性）：全选or取消全选
    CHECK_ALL_TODO(state, done) {
      state.myTodos.forEach((todo) => {
        todo.done = done;
      });
    },

    /* item */
    // （修改一个对象的done属性）：勾选or取消勾选一个todo
    CHECK_TODO(state, id) {
      state.myTodos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // （删除一个对象）：删除一个todo
    DELETE_TODO(state, id) {
      if (confirm('确定删除吗？')) {
        state.myTodos = state.myTodos.filter((todo) => todo.id !== id);
      }
    },
    // （修改一个对象的title属性）：更新todo
    UPDATE_TODO(state, payload) {
      const { id, title } = payload;
      state.myTodos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    },
    // （修改一个对象的isEdit属性）：更新todo
    EDIT_TODO(state, payload) {
      const { id, isEdit } = payload;
      state.myTodos.forEach((todo) => {
        if (todo.id === id) {
          todo.isEdit = isEdit;
        }
      });
    },
  },

  //准备state对象——保存具体的数据
  state: {
    myTodos: JSON.parse(localStorage.getItem('myTodos')) || [],
  },

  //准备getters——用于将state中的数据进行加工
  getters: {
    total(state) {
      return state.myTodos.length;
    },
    doneTotal(state) {
      return state.myTodos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll(state, getters) {
      return getters.doneTotal === getters.total && getters.total > 0;
    },
  },
};
