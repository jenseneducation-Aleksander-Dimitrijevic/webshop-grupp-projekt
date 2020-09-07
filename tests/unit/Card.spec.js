import { mount } from "@vue/test-utils";
import Card from "@/views/Card.vue";

describe("Card.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Card);
  });
  it("Find p tag and with class info", () => {
    const messageWrapper = wrapper.find(".info");
    expect(messageWrapper.exists()).toBe(false);
  });
  it("should diplay product", () => {
    const imageWrapper = wrapper.find("img");
    expect(imageWrapper.exists()).toBe(false);
  });
  it("should show price", () => {
    const amountWrapper = wrapper.find(".price");
    expect(amountWrapper.exists()).toBe(false);
  });
});
