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

	test('should check if radio input exist', () => {
		expect(wrapper.find('#set-adress-btn').exists()).toBe(true)
	})

	test('should check if radio button has been clicked', async () => {
		const radio = wrapper.find('#set-adress-btn')
		await radio.setChecked()
		expect(radio.element.checked).toBeTruthy()
	})

	test('should set data property value from FALSE to TRUE when click on radio button', async () => {
		const radio = wrapper.find('#set-adress-btn')
		console.log(wrapper.vm.isClicked)
		radio.setChecked()
		console.log(wrapper.vm.isClicked)
		expect(wrapper.vm.isClicked).toBe(true)
	})


	// test('should show an alert when user tries to change adress', () => {
		
	// });

// 	test('should disable the "proceed" to payment button if radio for current adress not selected', () => {
		
// 	});

// 	test('should display an alert when pressing on "proceed" to payment button', () => {
		
// 	});
// 
})