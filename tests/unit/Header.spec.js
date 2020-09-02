import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import Products from "@/views/Products.vue";
import VueRouter from "vue-router";

describe("Header.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });

  it("should show h2", () => {
    const acualText = "Buy a shoe!";
    const content = wrapper.find("router-link").text();
    expect(content).toBe(acualText);
  });
  it("should show h4", () => {
    const acualText = "100% SATISFACTION GUARANTEE";
    const content = wrapper.find("h4").text();

    expect(content).toBe(acualText);
  });
});
describe("Products", () => {
  it("Should redirect you to desired page, when clicking on a link", () => {
    const $route = {
      path: "/products",
    };

    const wrapper = shallowMount(Header, {
      mocks: {
        $route,
      },
    });

    expect(wrapper.vm.$route.path).toBe("/products");
  });

  it("should take you to the correct component", async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const routes = [{ path: "/products", name: "products" }];

    const router = new VueRouter({
      routes,
    });

    const wrapper = shallowMount(Header, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    await wrapper.find(".button").trigger("click", {
      button: 1,
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/products");
  });
});
