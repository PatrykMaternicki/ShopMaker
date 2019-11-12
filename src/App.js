// Miejsce inicjacji biblioteki
import Application from './App.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import routes from './routing';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import AuthService from './services/AuthService';


export class App {
  constructor(option) {
    this.hook = option.hook;
    this.props = option.props ? option.props : {};
    this.construct();
  }

  construct() {
    Vue.use(Vuetify);
    const router = new VueRouter({routes});
    router.beforeEach((to, from, next) => {
      if(to.path === '/logout') {
        store.dispatch('logoutUser');
        next('/');
      }
      (new AuthService()).isAuthorize(to.path) ? next() : next('/login');
    })
    store.dispatch('getItems');
    store.dispatch('isLogged');
    Vue.use(VueRouter);
    Vue.config.productionTip = false;
    new Vue({
      el: '#' + this.hook,
      data: this.props,
      store: store,
      router,
      render: h => h(Application),
    });
  }
}
