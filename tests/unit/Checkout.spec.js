import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Checkout from "@/views/Checkout.vue";

window.alert = jest.fn();

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    displayTotalAmount(state) {
      return state.products.reduce((sum, item) => {
        return (sum += item.count * item.price);
      }, 0);
    },
  },
});

describe("Checkout", () => {
  let wrapper = mount(Checkout, { store, localVue });
  window.alert.mockClear();

  // RADIO TESTS

  test("should check if radio input exist", () => {
    expect(wrapper.find("#set-adress-btn").exists()).toBe(true);
  });

  test("should check if radio button has been clicked", async () => {
    const radio = wrapper.find("#set-adress-btn");
    await radio.setChecked();
    expect(radio.element.checked).toBeTruthy();
  });

  test("should set data property value from FALSE to TRUE when click on radio button", async () => {
    const radio = wrapper.find("#set-adress-btn");
    console.log(wrapper.vm.isClicked);
    radio.setChecked();
    console.log(wrapper.vm.isClicked);
    expect(wrapper.vm.isClicked).toBe(true);
  });

  // ADRESS TESTS

  test('Should return if <p> tag exist and when clicked, display message "You have successfully changed adress!"', async () => {
    expect(wrapper.find(".changeAdress").exists()).toBe(true);
    await wrapper.find(".changeAdress").trigger("click");
    console.log(wrapper.vm.msg);
    expect(wrapper.vm.msg).toBe("You have successfully changed adress!");
  });

  // Proceed button

  test("should check if proceed button exist", () => {
    expect(wrapper.find(".proceed").exists()).toBe(true);
  });

  test('Should check if "proceed" button is disabled by default', async () => {
    const proccedButton = wrapper.find(".proceed");
    expect(proccedButton.element.hasAttribute("disabled")).toBe(false);

    console.log(proccedButton.element.hasAttribute("disabled"));

    const radio = wrapper.find("#set-adress-btn");
    await radio.setChecked();

    console.log(proccedButton.element.hasAttribute("disabled"));

    expect(proccedButton.element.hasAttribute("disabled")).toBe(false);
  });
});
