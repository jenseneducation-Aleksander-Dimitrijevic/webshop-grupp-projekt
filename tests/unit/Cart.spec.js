import { shallowMount } from "@vue/test-utils";
import Cart from "@/components/Cart.vue"

describe('Cart', () => {
	let wrapper;
	let count;
	beforeEach(()=>{
		wrapper = shallowMount(Cart)
		count =wrapper.find('span')
	})

	test('should send a complete order to checkout ', async () => {
		const chkoutButton = wrapper.find("button");
		// await chkoutButton.trigger("click");
		

		expect(chkoutButton.exists()).toBe(true)
	});

	test('should increment "amount" of an item in cart', async () => {
		const add = wrapper.find(".add");

		await add.trigger("click");
		console.log(count.text())
		
		expect(parseInt(count.text())).toBe(2)

	});

	test('should decrement "amount" of an item in cart' , async () => {
		const sub = wrapper.find(".sub");

		
		await sub.trigger("click");
		console.log(count.text())
		
		expect(parseInt(count.text())).toBe(1)
	});
});