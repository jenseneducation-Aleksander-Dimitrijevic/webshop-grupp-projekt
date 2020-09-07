import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [{ id: 1 }],
  },
  getAllProducts(state) {
    return state.products.reduce((sum, item) => {
      return (sum += item.count);
    }, 0);
  },
});

describe("Navbar", () => {
  test("display number of items in cart", () => {
    const wrapper = mount(Navbar, {
      store,
      localVue,
      stubs: ["router-link"],
    });
    expect(Number(wrapper.find(".bubble").text())).toBe(0);
  });

  test("Show if router prop is set with '/' url ", () => {
    const $route = {
      path: "/",
    };

    const wrapper = mount(Navbar, {
      store,
      localVue,
      mocks: {
        $route,
      },
      stubs: ["router-link"],
    });
    expect(wrapper.vm.$route.path).toBe("/");
  });
});
