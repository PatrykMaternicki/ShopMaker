import { registerActions } from './actions';
import { registerMutations } from './mutations';
import { registerGetters } from './getters';
import { registerStates } from './states';

export const RegisterModule = {
  actions: registerActions,
  getters: registerGetters,
  mutations: registerMutations,
  states: registerStates,
}