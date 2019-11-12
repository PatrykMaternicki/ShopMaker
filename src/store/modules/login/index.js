import { loginActions } from './actions';
import { loginMutations } from './mutations';
import { loginGetters } from './getters';
import { loginStates } from './states';

export const LoginModule = {
  actions: loginActions,
  getters: loginGetters,
  mutations: loginMutations,
  states: loginStates,
}