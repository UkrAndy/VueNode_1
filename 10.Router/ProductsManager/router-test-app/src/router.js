import Vue from "vue";
import VueRouter from "vue-router";
//Імпортуємо компоненти-сторінки
import ProductsTable from "@/pages/ProductsTable";
import ProductEditor from "@/pages/ProductEditor";
//Підключаємо модуль до Vue
Vue.use(VueRouter);

//Встановлюємо відповідність між шляхами і компонентами-сторінками
const routes = [
  { path: "/", component: ProductsTable },
  { path: "/create", component: ProductEditor }
];

//Створюєм екземпляр роутера
const router = new VueRouter({
  mode: "history",
  routes
});

//Експортуємо екземпляр роутера
export default router;
