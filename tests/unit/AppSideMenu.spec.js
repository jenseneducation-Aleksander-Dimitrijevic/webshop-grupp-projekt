import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import AppSideMenu from "@/components/AppSideMenu.vue"

const localVue = createLocalVue()
localVue.use(Vuex)


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