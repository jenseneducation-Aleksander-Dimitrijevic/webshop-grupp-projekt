import Vuex from "vuex";
import Navbar from "@/components/Navbar.vue";
import CartModal from '@/components/CartModal.vue';
import { mount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
	state: {
		products: [{
			id: 1,
			name: "Vans Black",
			img: "vans1",
			count: 1,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			price: "799"
		}],
		cartModalOpen: false,
	},
	mutations: {
		TOGGLE_CART(state) {
			state.cartModalOpen = true;
		},
	},
	getters: {
		displayTotalAmount(state) {
			return state.products.reduce((sum, item) => {
				return (sum += item.count * item.price);
			}, 0);
		},
	}
});

describe("Navbar.vue", () => {
	test("Should be able to make a commit to TOGGLE_CART mutation", () => {
		store.commit("TOGGLE_CART");
		expect(store.state.cartModalOpen).toEqual(true);
	});

	test("Should commit TOGGLE_CART when clicking on cart icon", async () => {
		const wrapper = mount(Navbar, {
			store,
			localVue,
			stubs: ["router-link"],
		});
		await wrapper.find(".cart-btn").trigger("click");
		expect(store.state.cartModalOpen).toEqual(true);
	});
});

describe("CartModal.vue", () => {

	const wrapper = mount(CartModal, {
		store,
		localVue
	})
	const counter = wrapper.find('.counter')
	test('should increment "amount" of an item in cart', async () => {
		await wrapper.find('.increment').trigger('click')
		expect(parseInt(counter.text())).toBe(2)
	});

	test('should decrement "amount" of an item in cart', async () => {
		const sub = wrapper.find(".decrement");


		await sub.trigger("click");
		console.log(counter.text())

		expect(parseInt(counter.text())).toBe(1)
	});
})
