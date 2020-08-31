import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Card);
  });
  it("Find p tag and with class info", () => {
    const messageWrapper = wrapper.find(".info");
    expect(messageWrapper.exists()).toBe(true);
  });
  it("should diplay product", () => {
    const imageWrapper = wrapper.find("img");
    expect(imageWrapper.exists()).toBe(true);
  });
  it("should show price", () => {
    const amountWrapper = wrapper.find(".price");
    expect(amountWrapper.exists()).toBe(true);
  });
  it("should send the order to basket", async () => {
    const buttonClicked = wrapper.find("button");
    await buttonClicked.trigger("click");
    expect(buttonClicked.exists()).toBe(true);
  });
});
