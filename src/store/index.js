import Vuex from 'vuex';
import Vue from 'vue';
import { ItemModule } from './modules/item';
import { RegisterModule } from './modules/register';
import { LoginModule } from './modules/login';
import { UserModule } from './modules/user';
import { OrderModule } from './modules/order';
import CategoryService from '../services/CategoryService.js';
import DepartamentService from '../services/DepartamentService.js';

const categoryService = new CategoryService();
const departamentService = new DepartamentService();

const state = {
  categories: [],
  departaments: [],
  count: '',
  showModal: false
};
Object.assign(state, ItemModule.states);
Object.assign(state, RegisterModule.states);
Object.assign(state, LoginModule.states);
Object.assign(state, UserModule.states);
Object.assign(state, OrderModule.states);

const getters = {
  items() {
    return state.items;
  },

  categories() {
    return state.categories;
  },

  departaments() {
    return state.departaments;
  },

  count() {
    return state.count;
  },

  showModal() {
    return state.showModal;
  },

  item() {
    return state.item;
  },

  formState() {
    return state.formState;
  },

  stateMessage() {
    return state.stateMessage;
  },

  loginFormState() {
    return state.loginFormState;
  },

  loginStateMessage() {
    return state.loginStateMessage;
  },

  editFormState() {
    return state.editFormState;
  },

  editStateMessage() {
    return state.editStateMessage;
  },

  isLogged() {
    return state.isLogged;
  },

  login() {
    return state.login;
  },

  customer() {
    return state.customer;
  },

  cost() {
    return state.cost;
  },

  cart() {
    return state.cart;
  },

  cartId() {
    return state.shipping_cart_id
  },

  stripeElement() {
    return state.stripeElement;
  }
};

Object.assign(getters, ItemModule.getters);
Object.assign(getters, RegisterModule.getters);
Object.assign(getters, LoginModule.getters);
Object.assign(getters, UserModule.getters);
Object.assign(getters, OrderModule.getters);

const mutations = {
  GET_CATEGORIES(state, payload) {
    categoryService.getCategories().then(response => state.categories = response.data.rows);
  },

  GET_DEPARTAMENTS(state, payload) {
    departamentService.getDepartaments().then(response => state.departaments = response.data);
  },

  HIDE_MODAL(state, payload) {
    state.showModal = payload;
  }
};
Object.assign(mutations, ItemModule.mutations);
Object.assign(mutations, RegisterModule.mutations);
Object.assign(mutations, LoginModule.mutations);
Object.assign(mutations, UserModule.mutations);
Object.assign(mutations, OrderModule.mutations);

const actions = {
  getCategories(context, payload) {
    context.commit('GET_CATEGORIES');
  },
  getDepartaments(context, payload) {
    context.commit('GET_DEPARTAMENTS');
  },
  hideModal(context, payload) {
    context.commit('HIDE_MODAL');
  }
};
Object.assign(actions, ItemModule.actions);
Object.assign(actions, RegisterModule.actions);
Object.assign(actions, LoginModule.actions);
Object.assign(actions, UserModule.actions);
Object.assign(actions, OrderModule.actions);

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});