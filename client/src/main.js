// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

library.add(faFacebook, faLinkedin, faQuoteLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
