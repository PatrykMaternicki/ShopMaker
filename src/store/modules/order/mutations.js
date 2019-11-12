import OrderService from '../../../services/OrderService.js';
import AuthService from '../../../services/AuthService.js';
import StripeClientProvider from '../../../providers/StripeClientProvider';
import UserDataProvider from '../../../providers/UserDataProvider';
import StripeService from '../../../services/StripeService.js';

export const orderMutations = {
  ADD_TO_ORDER(state, payload) {
    const orderService = new OrderService();
    
    if (!state.shipping_cart_id) {
      state.shipping_cart_id || orderService.generateShippingCartId().then(response => {
        state.shipping_cart_id = response.data.cart_id;
        orderService.addProductToCart(payload, state.shipping_cart_id).then(cart => {
          state.cart = cart;
          state.cost = Number.parseFloat(state.cost) + Number.parseFloat(payload.price);
          state.stock = state.cart.length;
        });
      });
    } else {
      orderService.addProductToCart(payload, state.shipping_cart_id).then(cart => {
        state.cart = cart;
        state.cost = Number.parseFloat(state.cost) + Number.parseFloat(payload.price);
        state.stock = state.cart.length;
      });
    }
  },

  SET_SIGNAL_CLEAN_PRODUCT(state, payload) {
    state.cleanProduct = payload;
  },

  REMOVE_ITEM(state, payload) {
    state.cart = state.cart.filter(item => item.item_id !== payload);
    state.stock = state.cart.length;
    (new OrderService()).removeProductInCart(payload);
    var sum = 0;
    for (let i =0; i < state.cart.length; i++) {
      sum += state.cart[i].subtotal;
    }
    state.cost = sum;
  },

  ADD_IN_STOCK(state, payload) {
    let product = state.cart.filter(item => item.item_id === payload);
    (new OrderService()).increaseQuantityProduct(product[0], payload).then(cart => {

      state.cart = cart;
      var sum = 0;
      for (let i =0; i < state.cart.length; i++) {
        sum += state.cart[i].subtotal;
      }
      state.cost = sum;
    });
  },

  REMOVE_IN_STOCK(state, payload) {
    let product = state.cart.filter(item => item.item_id === payload);
    (new OrderService()).decreaseQuantityProduct(product[0], payload).then(cart => {
      if (cart.length === 0) {
        state.cart = state.cart.filter(item => item.item_id !== payload);
      } else {
        state.cart = cart;
      }
      state.stock = state.cart.length;
      var sum = 0;
      for (let i =0; i < state.cart.length; i++) {
        sum += state.cart[i].subtotal;
      }
      state.cost = sum;
    });
  },

  CLEAN_SHIPPING_CARD(state, payload) {
    (new OrderService()).cleanCart(state.shipping_cart_id).then(cart => {
      state.cost = '0.00';
      state.cart = cart;
      state.shipping_cart_id = null;
      state.stock = 0;
    });
  },

  GENERATE_ORDER(state, payload) {
    let dataForGenerateOrder = {};
    dataForGenerateOrder.shipping_region_id = Number.parseInt(state.customer.shipping_region_id);
    dataForGenerateOrder.cart_id = state.shipping_cart_id;
    dataForGenerateOrder.tax_id = 1;
    (new OrderService()).generateOrder(dataForGenerateOrder, (new AuthService()).getAuthToken()).then(order => {
      state.orderId = order.orderId
    });
  },

  GENERATE_STRIPE_ELEMENT(state, payload) {
    state.htmlElement = new StripeService().generateStripeElement();
  },

  PAY_ORDER(state, payload) {
    const stripeService = new StripeService();
    stripeService.generateStripeToken(state.htmlElement).then(payload => {
      state.stripeToken = payload.id;
      let data = {
        'stripeToken': state.stripeToken,
        'orderId': state.orderId,
        'description': 'Order',
        'amount': 100,
        'currency': 'USD'
      };
      stripeService.payOrder(data);
    });
  }
};