import { shallowMount } from "@vue/test-utils";
import Checkout from "@/components/Checkout.vue"

describe('Checkout', ()=>{
	let wrapper;

	beforeEach(()=>{
		wrapper = shallowMount(Checkout)
	})
		// RADIO TESTS
	test('should check if property "isClicked" exist', () => {
		expect(data.exists()).toBe(true)
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


	// ADRESS TESTS

	test('Should return if <p> tag exist and when clicked, display message "You have successfully changed adress!"', async () => {
		expect(wrapper.find('.changeAdress').exists()).toBe(true)
		await wrapper.find('.changeAdress').trigger('click')
		console.log(wrapper.vm.msg)
		expect(wrapper.vm.msg).toBe('You have successfully changed adress!')
	});

	// Proceed button

	test('should check if proceed button exist', () => {
		expect(wrapper.find('.proceed').exists()).toBe(true)
	})

})