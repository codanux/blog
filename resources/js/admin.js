require('./bootstrap');
import quasar  from '@/plugins/quasar';

import Vue from 'vue';
import router from '@/router';
import store from '@/store';

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


window.App = new Vue({
    el: '#app',
    router,
    store,
    quasar
});
