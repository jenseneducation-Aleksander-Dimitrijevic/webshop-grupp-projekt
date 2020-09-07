import About from "@/views/About.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

const wrapper = mount(About, {
    stubs: {
        RouterLink: RouterLinkStub,
    },
});

describe("About", () => {
    test("should show what url is set in the to prop on a router link", () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/contact");
    });
});
