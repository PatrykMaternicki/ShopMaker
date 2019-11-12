export const registerActions = {
  send(context, payload) {
    context.commit('SEND', payload);
  },
  toogleStateForm(context, payload) {
    context.commit('TOOGLE_STATE_FORM', payload);
  },
};
