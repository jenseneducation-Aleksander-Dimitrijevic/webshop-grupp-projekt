import Vuex from "vuex";
import Navbar from "@/components/Navbar.vue";
import { mount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    cartModalOpen: false,
  },
  mutations: {
    TOGGLE_CART(state) {
      state.cartModalOpen = true;
    },
  },
});

describe("Navbar.vue", () => {
  test("Should be able to make a commit to TOGGLE_CART mutation", () => {
    store.commit("TOGGLE_CART");
    expect(store.state.cartModalOpen).toEqual(true);
  });

  test("Should commit TOGGLE_CART when clicking on cart icon", async () => {
    const wrapper = mount(Navbar, {
      store,
      localVue,
      stubs: ["router-link"],
    });
    await wrapper.find(".cart-btn").trigger("click");
    expect(store.state.cartModalOpen).toEqual(true);
  });
});
