import { orderActions } from './actions';
import { orderMutations } from './mutations';
import { orderGetters } from './getters';
import { orderStates } from './states';

export const OrderModule = {
  actions: orderActions,
  getters: orderGetters,
  mutations: orderMutations,
  states: orderStates,
}