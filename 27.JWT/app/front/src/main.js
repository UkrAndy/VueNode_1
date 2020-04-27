import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

//Імпортуємо  Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";

//Імпортуємо router
import router from "./router";
Vue.use(Buefy);
Vue.config.productionTip = false;

// ---- Автоматично виклається преед кожним запитом ---
axios.interceptors.request.use(function(config) {
  const isAuthenticated = store.getters["auth/isAuthenticated"]();
  if (isAuthenticated) {
    config.headers["Authorization"] =
      "Bearer " + store.getters["auth/getAccessToken"]();
  } else {
    config.headers["Authorization"] = null;
  }
  return config;
});

//----- Автоматично викликається після кожного запиту ----
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {      // Якщо сервер відповів «401»
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);
//---- Захищаємо маршрути він несанкціонованого доступу (якщо юзер не авторизований)
router.beforeEach((to, from, next) => {  
  let check =
    !store.getters["auth/isAuthenticated"]() &&
    !["/login", "/signup"].includes(to.path);

  if (check) {    // Недопускаємо до захищених роутів, якщо немає токена

    next({ path: "/login" });
    return;
  } else {
    next();
  }
});


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
