import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
var VueScrollTo = require("vue-scrollto");
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(VueScrollTo);

Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faSquare,
  faCalendar,
  faCircle,
  faPencilAlt,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelopeOpenText,
  faPhone,
  faEnvelope,
  faUser,
  faStar,
  faStarHalfAlt,
  faAngleRight,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faTelegramPlane,
  faFacebookF,
  faPinterestP,
  faApple,
  faFlickr
} from "@fortawesome/free-brands-svg-icons"; //fab

import { faCommentAlt, faClock } from "@fortawesome/free-regular-svg-icons"; //far

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCircle,
  faPencilAlt,
  faCalendar,
  faSquare,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelopeOpenText,
  faPhone,
  faEnvelope,
  faUser,
  faStar,
  faStarHalfAlt,
  faAngleRight,
  faAngleLeft
); //fas

library.add(faCommentAlt, faClock); //far

library.add(
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faTelegramPlane,
  faFacebookF,
  faPinterestP,
  faApple,
  faFlickr
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
