<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in myTodos" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
import MyItem from './MyItem';
import { mapState } from 'vuex';

export default {
  name: 'MyList',
  components: { MyItem },
  computed: {
    ...mapState('todos', ['myTodos']),
  },
};
</script>

<style scoped>
/*list*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
