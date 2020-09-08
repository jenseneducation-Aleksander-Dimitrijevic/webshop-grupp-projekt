import { shallowMount } from "@vue/test-utils";
import Checkout from "@/components/Checkout.vue"

describe('Checkout', ()=>{
	let wrapper;

	beforeEach(()=>{
		wrapper = shallowMount(Checkout)
	})

	test('should return if property isClicked exist', () => {
		expect(wrapper.vm.isClicked).toBe(true)
	})


	test('should show an alert when user tries to change adress', () => {
		
	});

// 	test('should disable the "proceed" to payment button if radio for current adress not selected', () => {
		
// 	});

// 	test('should display an alert when pressing on "proceed" to payment button', () => {
		
// 	});
// 
})