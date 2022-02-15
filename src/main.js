import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import header from './components/Header'
import footer from './components/Footer'


Vue.component('Header', header)
Vue.component('Footer', footer)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
