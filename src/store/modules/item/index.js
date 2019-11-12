import { itemActions } from './actions';
import { itemMutations } from './mutations';
import { itemGetters } from './getters';
import { itemStates } from './states';

export const ItemModule = {
  actions: itemActions,
  getters: itemGetters,
  mutations: itemMutations,
  states: itemStates,
}