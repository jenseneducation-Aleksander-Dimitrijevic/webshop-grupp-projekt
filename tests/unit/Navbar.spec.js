import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import VueRouter from "vue-router";
import Products from "@/views/Products.vue";
import routes from "@/router/index.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Navbar", () => {
  test("render component via routing", async () => {
    const router = new VueRouter({ routes, mode: "history" });
    const wrapper = mount(Navbar, {
      localVue,
      router,
    });

    router.push("/products");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Products).exists()).toBe(true);
  });
});
