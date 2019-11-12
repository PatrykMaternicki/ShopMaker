import UserService from '../../../services/UserService.js';

export const registerMutations = {
  SEND(state, payload) {
    (new UserService()).registerUser(payload).then( response => {
      state.formState = true;
      state.messageState = true;
      state.stateMessage = 'Registing Complete'
    })
    .catch(error => {
      state.formState = true;
      state.messageState = false;
      state.stateMessage = error;
    })
  },
  
  TOOGLE_STATE_FORM(state, payload) {
    state.formState = undefined;
  }
};