import { shallowMount } from '@vue/test-utils'
import NewsCard from '@/components/NewCard.vue'


describe('NewsCard.vue', () => {
  const wrapper = shallowMount(NewsCard)
  it('fav prop is initialised as a false value', () => {
    expect(wrapper.props().fav).toBe(false)
  })
})
describe('setItem', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(NewsCard);
      });
      it('should emit an  event', () => {
        wrapper.vm.setItem();
        
        expect(wrapper.emitted('setitem')).toBeTruthy();
        
      });

})
