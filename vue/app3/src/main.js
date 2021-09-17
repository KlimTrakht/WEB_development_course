import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "@/components/About.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [{ path: "/about", component: About }];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
