import Vuex from "vuex"
import { mount, createLocalVue, shallowMount } from "@vue/test-utils"
import AppSideMenu from "@/components/AppSideMenu.vue"
import Products from '@/views/Products.vue';

const localVue = createLocalVue()
localVue.use(Vuex)


describe("Products", () => {
    it("Should redirect you to products page, when clicking on 'Shop', while on side-menu", () => {
        const $route = {
            path: "/products",
        };

        const wrapper = shallowMount(Products, {
            mocks: {
                $route,
            },
        });

        expect(wrapper.vm.$route.path).toBe("/products");
    });

    describe("AppSideMenu", () => {
        test('should check if side menu is visible using Vuex', () => {
            const wrapper = mount(AppSideMenu, {
                mocks: {
                    $store: {
                        state: { isOpen: true }
                    }
                }
            })

            expect(wrapper.find(".side-menu").exists()).toBe(true)
        })
    })
})