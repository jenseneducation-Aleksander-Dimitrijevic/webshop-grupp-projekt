import Navbar from '@/components/Navbar.vue';
import Products from '@/views/Products.vue';
import { shallowMount } from '@vue/test-utils';

describe('Products', () => {

    // let wrapper;
    // beforeEach(() => {
    //     wrapper = shallowMount(Navbar);
    // });

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
    let sideMenu
    beforeEach(() => {
        wrapper = shallowMount(Navbar)
        button = wrapper.find('.burger')
        sideMenu = wrapper.find('.side-menu')

    })

    test('show if side menu is visible on startup', async () => {
        expect(sideMenu.exists()).toBe(true)

        //     const hamburgerIcon = wrapper.find('.hamburgerIcon')
        //     expect(hamburgerIcon.exists()).toBe(false)
        //     await hamburgerIcon.trigger('click')
        //     expect(hamburgerIcon).toBe(true)
        // })
    })
})
