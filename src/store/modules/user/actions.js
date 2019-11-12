export const userActions = {
  isLogged(context, payload) {
    context.commit('IS_LOGGED');
  },

  updateCustomer(context, payload) {
    context.commit('UPDATE_USER', payload);
  },

  updateAddress(context, payload) {
    context.commit('UPDATE_ADDRESS', payload);
  },

  updateCreditCard(context, payload) {
    context.commit('UPDATE_CREDIT_CARD', payload);
  },

  toogleEditStateForm(context, payload) {
    context.commit('TOOGLE_EDIT_STATE_FORM', payload);
  },
  
  logoutUser(context, payload) {
    context.commit('LOGOUT_USER');
  }
};
