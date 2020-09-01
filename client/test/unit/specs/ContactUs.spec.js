import Vue from 'vue';
import ContactUs from '@/components/ContactUs';

describe('Company.vue', () => {
  it('should render contact form', () => {
    const Constructor = Vue.extend(ContactUs);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.form-header').textContent)
      .to.equal('Contact Us')
    });
});
