import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "@/components/About.vue";
import Data from "@/components/Data";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/about", component: About },
  { path: "/data/:type", component: Data }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.mixin({
  mounted() {
    // console.log("hello from global mixin");
  }
});

export const EventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
