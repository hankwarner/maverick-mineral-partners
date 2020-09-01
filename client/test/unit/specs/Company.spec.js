import Vue from 'vue';
import Company from '@/components/Company';

describe('Company.vue', () => {
  it('should render company name and bio', () => {
    const Constructor = Vue.extend(Company);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('#company-bio').textContent)
      .to.equal('Maverick Mineral Partners')
    });
});
