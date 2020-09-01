import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
describe("Card.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it("should show h2", () => {
    const acualText = "Buy a shoe!";
    const content = wrapper.find("h2").text();
    expect(content).toBe(acualText);
  });
  it("should show h4", () => {
    const acualText = "100% SATISFACTION GUARANTEE";
    const content = wrapper.find("h4").text();
    expect(content).toBe(acualText);
  });
});
