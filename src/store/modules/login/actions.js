export const loginActions = {
  sendLogin(context, payload) {
    context.commit('SEND_LOGIN', payload);
  },
  toogleLoginStateForm(context, payload) {
    context.commit('TOOGLE_LOGIN_STATE_FORM', payload);
  } 
};
