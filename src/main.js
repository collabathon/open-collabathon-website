import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Collabathons from "./pages/Collabathons.vue";
import "./global.css";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/collabathons", component: Collabathons },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
