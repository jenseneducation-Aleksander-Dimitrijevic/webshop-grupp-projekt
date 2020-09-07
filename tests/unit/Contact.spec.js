import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

describe("Contact.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Contact);
  });

  it("should show h1", () => {
    const acualText = "Contact";
    const content = wrapper.find("h1").text();
    expect(content).toBe(acualText);
  });

  it("show that the specific image exists", () => {
    const img = wrapper.findAll(".image1");
    expect(img.length).toBe(1);
  });
});
