import Vuex from 'vuex'
import { mount, createLocalVue } from "@vue/test-utils"
import Navbar from "@/components/Navbar.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [{ id: 1 }]
  }
})

describe("Navbar", () => {
  test("displays number of items in array", () => {

    const wrapper = mount(Navbar, {
      store,
      localVue,
      stubs: ['router-link']
    })
    expect(parseInt(wrapper.find(".bubble").text())).toBe(1)
  })

  test("Show if router prop is set with '/' url ", () => {
    const $route = {
      path: '/'
    }

    const wrapper = mount(Navbar, {
      store,
      localVue,
      mocks: {
        $route
      },
      stubs: ['router-link']
    })
    expect(wrapper.vm.$route.path).toBe("/");
  });
})
