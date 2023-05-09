import { shallowMount } from '@vue/test-utils'
import CategoriesBar from '@/components/CategoriesBar.vue'

describe('CategoriesBar.vue', () => {
  const wrapper = shallowMount(CategoriesBar)
  it('is a component', () => {
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
