import Navbar from "@/components/Navbar.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

const wrapper = mount(Navbar, {
  stubs: {
    RouterLink: RouterLinkStub,
  },
});

describe("Products", () => {
  test("Show if router prop is set with '/' url ", () => {
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/");
  });
});
