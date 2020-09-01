import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/products",
  //   name: "products",
  //   component: Products,
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
