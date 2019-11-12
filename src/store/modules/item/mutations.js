import ItemService from '../../../services/ItemService.js';

export const itemMutations = {
  GET_ITEMS(state, payload) {
    const itemService = new ItemService();
    itemService.getAllItems().then(response => {
      state.items = response.data.rows
      state.count = response.data.count;
    });
  },

  FIND_ITEMS(state, payload) {
    const itemService = new ItemService();
    itemService.findItems(payload).then(response => {
      state.items = response.data.rows;
      state.count = response.data.count;
    });
  },

  GET_ITEMS_IN_CATEGORY(state, payload) {
    const itemService = new ItemService();
    itemService.getItemsInCategory(payload).then(response => {
      state.items = response.data.rows
      state.count = response.data.count
    });
  },

  GET_ITEMS_IN_DEPARTAMENT(state, payload) {
    const itemService = new ItemService();
    itemService.getItemsInDepartament(payload).then(response => {
      state.items = response.data.rows
      state.count = response.data.count
    });
  },

  GET_ITEMS_BY_PAGE(state, payload) {
    const itemService = new ItemService();
    itemService.getItemsByPage(payload).then(response => {
      state.items = response.data.rows
      state.count = response.data.count
    });
  },

  SHOW_DETAIL(state, payload) {
    const itemService = new ItemService();
    itemService.getDetailAboutItem(payload).then(response => {
      state.showModal = true;
      state.item = response.data
    });
  }
};