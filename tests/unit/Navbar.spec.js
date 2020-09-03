<<<<<<< HEAD
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
=======
import Navbar from "@/components/Navbar.vue";
import { mount, RouterLinkStub } from '@vue/test-utils'

const wrapper = mount(Navbar, {
    stubs: {
        RouterLink: RouterLinkStub
    }
});

describe('Products', () => {
    test("Show if router prop is set with '/' url ", () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/");
    });
})
>>>>>>> 974d1b709217865050abda3295a00d840620ab61
