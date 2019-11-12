export const itemActions = {
  getItems(context, payload) {
    context.commit('GET_ITEMS', payload);
  },

  findItems(context, payload) {
    context.commit('FIND_ITEMS', payload);
  },

  getItemsInCategory(context, payload) {
    context.commit('GET_ITEMS_IN_CATEGORY', payload);
  },

  getItemsInDepartament(context, payload) {
    context.commit('GET_ITEMS_IN_DEPARTAMENT', payload);
  },

  getItemsByPage(context, payload) {
    context.commit('GET_ITEMS_BY_PAGE', payload);
  },

  showDetail(context, payload) {
    context.commit('SHOW_DETAIL', payload);
  }
};
