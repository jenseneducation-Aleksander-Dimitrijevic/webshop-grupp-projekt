import Navbar from '@/components/Navbar.vue';
import { shallowMount } from '@vue/test-utils'
describe('Navbar', () => {

    test('Should be able to see quantity in cart', async () => {
        const wrapper = shallowMount(Navbar)
        const count = parseInt(wrapper.find('.bubble').text())

        expect(count).toBe(1)
    })
})
