require('./bootstrap');

import Vue from 'vue';
import router from '@/router';

import Quasar from 'quasar';
Vue.use(Quasar);

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    router,
});

export default app;
