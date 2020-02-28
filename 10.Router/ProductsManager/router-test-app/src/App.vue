<template>
  <div id="app">
    <div class="menu">
      <div>
        <router-link to="/">Усі товари</router-link>
      </div>
      <div>
        <router-link to="/create">Додати товар</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.menu {
  float: left;
  border: 2px solid black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
