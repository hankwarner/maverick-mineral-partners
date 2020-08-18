import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import AboutUs from '@/components/AboutUs';
import Company from '@/components/Company';
import ContactUs from '@/components/ContactUs';
import RequestOffer from '@/components/RequestOffer';
import Testimonials from '@/components/Testimonials';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs,
    },
    {
      path: '/company',
      name: 'company',
      component: Company,
    },
    {
      path: '/contact-us',
      name: 'contactus',
      component: ContactUs,
    },
    {
      path: '/request-offer',
      name: 'requestoffer',
      component: RequestOffer,
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: Testimonials,
    }
  ],
});
