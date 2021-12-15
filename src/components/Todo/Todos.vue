<template>
  <div class="mt-10">
    <div class="flex flex-row justify-items-center justify-between my-10 mx-auto w-1/2">
      <h1 class="font-bold text-indigo-600 flex text-xl">Todo Application</h1>
      <button
        type="button"
        class="border w-75 rounded-lg font-bold bg-pink-600 text-white py-2 px-4"
        @click="enableTodo"
      >Add Todo</button>
    </div>
    <!-- add todo block -->
    <div v-show="showAddTodo">
      <div class="shadow mx-auto mt-6 p-7 w-1/2">
        <h3>Add Todo</h3>
        <form class="w-full max-auto mt-5">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="text-gray-500 font-bold text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >Todo</label>
            </div>
            <div class="md:w-2/3">
              <input
                v-model="todo"
                class="appearance-none border border-indigo-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline focus:bg-white focus:border-indigo-800"
                id="inline-todo"
                type="text"
              />
            </div>
          </div>
          <button type="button" class="w-1/4 rounded bg-indigo-500 text-white shadow-sm py-2 mx-auto" @click="addTodo()">Add</button>
          <button type="button" class="ml-4 w-1/4 rounded bg-red-500 text-white shadow-sm py-2 mx-auto" @click="close()">Close</button>
        </form>
      </div>
    </div>
    <!-- list of todos block -->
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="w-1/2 flex justify-between bg-indigo-100 text-indigo-700 mx-auto border my-2 p-3 rounded"
    >
    <p @dblclick="markAsComplete(todo)" :class="{'completed': todo.completed}" class="text-lg"> {{ todo.todo }} </p>
    
    <span><button @click="removeTodo(index)" class="text-pink-700 font-bold text-lg">x</button></span>
    </div> 
  </div>
</template>

<script>
// import getTodosData from '@/composables/displayTodos';
import { ref } from "vue";

export default {
  setup() {
    const showAddTodo = ref(false);
    const todo = ref("");
    const completed = ref(false);

    // default todo array
    const defaultTodoData = [
      {
        completed: false,
        todo: "Todo 1",
      },
      {
        completed: true,
        todo: "Todo 2",
      },
    ];

    // get todo from localstroage if set else get the default one
    const todosLists = JSON.parse(localStorage.getItem("todos")) || defaultTodoData;
    const todos = ref(todosLists);

    // add todo
    function addTodo() {
      if (todo.value) {
        todos.value.push({
          completed: false,
          todo: todo.value,
        });
        todo.value = "";
      }
      saveTodo();
    }

    // enable add todo modal
    const enableTodo = () => {
      showAddTodo.value = !showAddTodo.value;
    }

    const close = () => {
      showAddTodo.value = !showAddTodo.value;
    }

    // remove todo
    function removeTodo(index) {
      todos.value.splice(index, 1)
      saveTodo();
    }

    // mark as complete
    function markAsComplete (todo) {
      todo.completed = !todo.completed;
      completed.value = true;
      saveTodo();
    }

    // save todo in localStorage
    function saveTodo () {
      localStorage.setItem("todos", JSON.stringify(todos.value));
    }
    
    return { todos, showAddTodo, enableTodo, addTodo, markAsComplete, saveTodo, todo, removeTodo, completed,close };
  },
};
</script>

<style>
  .completed {
     text-decoration: line-through;
  }
</style>