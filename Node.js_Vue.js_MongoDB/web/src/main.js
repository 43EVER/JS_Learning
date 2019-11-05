import Vue from 'vue'

import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */);

import Card from './components/Card.vue';
Vue.component('m-card', Card);

import ListCard from './components/ListCard.vue';
Vue.component('m-list-card', ListCard);

import http from './http';
Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
