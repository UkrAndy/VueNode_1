<template>
  <div id="app">
    <add-form />
    <todo-item :task="task1">
      <template v-slot:taskTitle="{ titleData }">
        <strong>{{ titleData.text }}</strong>
      </template>

      <template v-slot:taskActions>
        <b-button type="is-primary">Виконано</b-button>
        <button>Відкладено</button>
        <!-- Вставка іконок згідно з новими правилами -->
        <font-awesome-icon icon="user-secret" />
      </template>
    </todo-item>

    <hr />
    <todo-item :task="task2">
      <template v-slot:taskTitle>
        <h1>Заголовок 2</h1>
      </template>

      <template v-slot:taskActions>
        <b-switch :value="true" type="is-success">
          Success
        </b-switch>
      </template>
    </todo-item>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
import AddForm from "./components/AddForm";
export default {
  name: "App",
  components: {
    TodoItem,
    AddForm
  },

  data() {
    return {
      task1: {
        text: "Say Hello!"
      },
      task2: {
        text: "Wait!"
      }
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
