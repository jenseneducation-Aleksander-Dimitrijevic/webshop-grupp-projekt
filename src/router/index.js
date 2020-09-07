import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/Products.vue"),
  },
  {
    path: "/shoes/:id",
    name: "shoes",
    props: true,
    component: () => import("@/views/Card.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
