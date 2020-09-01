import Navbar from '@/components/Navbar.vue';
import Products from '@/views/Products.vue';
import { shallowMount } from '@vue/test-utils';

describe('Products', () => {

    test('Should redirect you to desired page, when clicking on a link', () => {
        const $route = {
            path: '/products'
        }
        const wrapper = shallowMount(Products, {
            mocks: {
                $route
            }
        })
        expect(wrapper.vm.$route.path).toBe('/products')
    });

})

describe('Navbar', () => {
    let wrapper;
    let button
    beforeEach(() => {
        wrapper = shallowMount(Navbar)
        button = wrapper.find('button')
    })

    test('Show if side menu is visible on startup', async () => {

        await wrapper.setData({
            isOpen: true
        })

        expect(wrapper.find('.side-menu').exists()).toBe(true)
    })

    test('when clicking on hamburger button, show side menu component', async () => {
        await button.trigger('click')
        expect(wrapper.find('.side-menu').exists()).toBe(true)
    })

    test('show name in products component, using route params, when clicking on router link', () => {
        const name = "Elam"
        const wrapper = shallowMount(Products, {
            mocks: {
                $route: {
                    params: { name }
                }
            }
        })

        expect(wrapper.find(".name").text()).toBe(name)
    })

})




