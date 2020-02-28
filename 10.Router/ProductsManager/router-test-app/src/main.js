import Vue from "vue";
import App from "./App.vue";
//Імпортуємо екзепляр роутера
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router, //Підключаємо роутер до Vue
  render: h => h(App)
}).$mount("#app");
