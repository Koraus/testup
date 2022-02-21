import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import Todo from "../pages/Todo.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: 'Login' }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }

});

export default router;
