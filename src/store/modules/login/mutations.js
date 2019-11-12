import UserService from '../../../services/UserService.js';
import AuthService from '../../../services/AuthService.js';
import Customer from '../../../models/Customer';

export const loginMutations = {
  SEND_LOGIN(state, payload) {
    const userService = new UserService();
    userService.loginUser(payload).then( response => {
      (new AuthService()).setCookies(response.data);
      state.loginMessageState = true;
      state.loginFormState = true;
      state.loginStateMessage = 'Logged';
      state.isLogged = true;
      state.login = response.data.customer.name;
      state.customer = new Customer(response.data.customer);
      userService.setUserData(response.data.customer);
    })
    .catch(error => {
      state.loginMessageState = false;
      state.loginFormState = true;
      state.isLogged = false;
      state.login = '';
      state.authToken = '';
      state.loginStateMessage = error;
    })
  },

  TOOGLE_LOGIN_STATE_FORM(state, payload) {
    state.loginFormState = undefined;
  }
};
