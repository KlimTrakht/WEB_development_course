import Vue from "vue";
import VueRouter from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import App from "./App.vue";
import store from "./store";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Dashboard from "@/components/Dashboard";
import { auth } from "./firebase";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/dashboard", component: Dashboard }
  ]
});

onAuthStateChanged(auth, user => {
  if (user) {
    store.commit("signIn", user);
    if (router.currentRoute.path !== "/dashboard") {
      router.push("/dashboard");
    }
  } else {
    if (!["/signup", "/signin"].includes(router.currentRoute.path)) {
      router.replace("/signin");
    }
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
