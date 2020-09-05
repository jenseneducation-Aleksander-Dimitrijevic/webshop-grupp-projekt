import Banner from "@/components/Banner.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

const wrapper = mount(Banner, {
  stubs: {
    RouterLink: RouterLinkStub,
  },
});

describe("Banner.vue", () => {
  test("should show what url is set in the to prop on a router link", () => {
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/products");
  });
});
