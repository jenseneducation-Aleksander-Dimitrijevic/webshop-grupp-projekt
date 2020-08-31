import Products from "@/components/Products.vue";
import { shallowMount } from "@vue/test-utils";
jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ name: "Vans Black Edition" }] }),
}));

describe("Products.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Products);
  });

  test("return one product name to be Vans Black Edition", async () => {
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.products).toEqual([{ name: "Vans Black Edition" }]);
    });
  });
});
