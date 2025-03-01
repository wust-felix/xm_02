<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="CHECK_TODO(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="DELETE_TODO(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      v-show="!todo.isEdit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'MyItem',
  props: ['todo'],
  methods: {
    ...mapMutations('todos', [
      'CHECK_TODO',
      'DELETE_TODO',
      'UPDATE_TODO',
      'EDIT_TODO',
    ]),

    // 编辑
    handleEdit(todo) {
      this.EDIT_TODO({ id: todo.id, isEdit: true });
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点
    handleBlur(todo, e) {
      const newTitle = e.target.value.trim();
      if (!newTitle) {
        return alert('输入不能为空');
      }
      this.UPDATE_TODO({ id: todo.id, title: newTitle });
      this.EDIT_TODO({ id: todo.id, isEdit: false });
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
