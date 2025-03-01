<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAllChecked" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="CLEAR_ALL_TODO">
      清除已完成任务
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'MyFooter',
  computed: {
    ...mapGetters('todos', ['total', 'doneTotal', 'isAll']),

    isAllChecked: {
      get() {
        return this.isAll; // 使用 Vuex 的 getter
      },
      set(value) {
        this.CHECK_ALL_TODO(value);
      },
    },
  },
  methods: {
    // 勾选or取消勾选全部、清除全部
    ...mapMutations('todos', ['CHECK_ALL_TODO', 'CLEAR_ALL_TODO']),
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
