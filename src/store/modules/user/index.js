import { userActions } from './actions';
import { userMutations } from './mutations';
import { userGetters } from './getters';
import { userStates } from './states';

export const UserModule = {
  actions: userActions,
  getters: userGetters,
  mutations: userMutations,
  states: userStates,
}