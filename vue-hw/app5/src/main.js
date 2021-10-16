import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import SingIn from "@/components/SingIn";
import { SignUp } from "@/components/SignUp";
import { Dashboard } from "@/components/Dashboard";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "signin", componen: SingIn },
    { path: "signup", componen: SignUp },
    { path: "dashboard", component: Dashboard },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
