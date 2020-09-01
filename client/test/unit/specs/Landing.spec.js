import Vue from 'vue';
import Landing from '@/components/Landing';

describe('Company.vue', () => {
  it('should render company name', () => {
    const Constructor = Vue.extend(Landing);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.slogan').textContent)
      .to.equal('Maverick Mineral Partners')
    });
});
