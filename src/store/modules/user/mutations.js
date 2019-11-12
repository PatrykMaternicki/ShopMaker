import AuthService from '../../../services/AuthService.js';
import UserService from '../../../services/UserService';
import Customer from '../../../models/Customer';

export const userMutations = {
  IS_LOGGED(state, payload) {
    const authService = new AuthService();
    const userService = new UserService();
    state.isLogged = authService.isLogged();
    if (state.isLogged) {
      state.login = authService.getLogin();
      state.authToken = authService.getAuthToken();
      state.customer = userService.getUserData();
    } else {
      userService.cleanUserData()
      state.customer = {};
    }
  },

  TOOGLE_EDIT_STATE_FORM(state, payload) {
    state.formState = undefined;
  },

  UPDATE_USER(state, payload) {
    const userService = new UserService();
    userService.updateUser(payload, (new AuthService()).getAuthToken()).then(
      response => {
        state.editFormState = true;
        state.editMessageState = false;
        state.editStateMessage = 'Data updated';
        state.customer = new Customer(response.data);
        userService.setUserData(response.data);
      }
    ).catch(
      error => {
        state.formState = true;
        state.messageState = false;
        state.stateMessage = error;
      }
    );
  },

  UPDATE_ADDRESS(state, payload) {
    const userService = new UserService();
    userService.updateAddress(payload, (new AuthService()).getAuthToken()).then(
      response => {
        state.editFormState = true;
        state.editMessageState = false;
        state.editStateMessage = 'Data updated';
        state.customer = new Customer(response.data);
        userService.setUserData(response.data.customer);
      }
    ).catch(
      error => {
        state.formState = true;
        state.messageState = false;
        state.stateMessage = error;
      }
    );
  },

  UPDATE_CREDIT_CARD(state, payload) {
    const userService = new UserService();
    userService.updateCreditCard(payload, (new AuthService()).getAuthToken()).then(
      response => {
        state.editFormState = true;
        state.editMessageState = false;
        state.editStateMessage = 'Data updated';
        state.customer = new Customer(response.data);
        userService.setUserData(response.data.customer);
      }
    ).catch(
      error => {
        state.formState = true;
        state.messageState = false;
        state.stateMessage = error;
      }
    );
  },

  LOGOUT_USER(state, payload) {
    const userService = new UserService();
    (new AuthService()).removeCookies();
    userService.cleanUserData();
    state.customer= {};
    state.isLogged = false;
    state.authToken = '';
  }
};