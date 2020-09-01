import { shallowMount, mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import Products from "@/views/Products.vue";

describe("Card.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });
  describe("Products", () => {
    test("Should redirect you to desired page, when clicking on a link", async () => {
      const $route = {
        path: "/products",
      };

      const wrapper = shallowMount(Products, {
        mocks: {
          $route,
        },
      });
      // await wrapper.find("router-link").trigger("click");
      expect(wrapper.vm.$route.path).toBe("/products");
    });
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
