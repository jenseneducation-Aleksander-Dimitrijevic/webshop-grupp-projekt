import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store/";

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
    component: () => import("@/views/About.vue"),
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
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    props: true,
    component: () => import("@/views/Checkout.vue"),
    meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const orders = store.state.products;
  if (
    to.matched.some((route) => route.meta.requiresAuth) &&
    orders.length < 1
  ) {
    next("/");
  }
  next();
});

export default router;
