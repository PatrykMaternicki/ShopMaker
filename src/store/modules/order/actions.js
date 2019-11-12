export const orderActions = {
  addToOrder(context, payload) {
    context.commit('ADD_TO_ORDER', payload);
  },
  setSignalCleanProduct(context, payload) {
    context.commit('SET_SIGNAL_CLEAN_PRODUCT', payload);
  },
  removeItem(context, payload) {
    context.commit('REMOVE_ITEM', payload);
  },
  removeInStock(context, payload) {
    context.commit('REMOVE_IN_STOCK', payload);
  },
  addInStock(context, payload) {
    context.commit('ADD_IN_STOCK', payload);
  },
  cleanShippingCard(context, payload) {
    context.commit('CLEAN_SHIPPING_CARD');
  },
  generateOrder(context, payload) {
    context.commit('GENERATE_ORDER');
  },
  generateStripeElement(context, payload) {
    context.commit('GENERATE_STRIPE_ELEMENT');
  },
  payOrder(context, payload) {
    context.commit('PAY_ORDER', payload);
  }
};
