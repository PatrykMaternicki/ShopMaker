import Ajax from  '../helpers/Ajax';
import { Routes } from '../configs/Routes';
import Order from '../models/Order';

export default class OrderService { 
  generateShippingCartId() {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.generate_shipping_cart}`).then(id => resolve(id)))
  }

  addProductToCart(product, cartId) {
    let attributes = `${product.color}, ${product.size}`;
    let order = new Order(product.productId, attributes, cartId);
    return new Promise((resolve, reject) => Ajax.post(`${Routes.add_product_to_cart}`, order).then(response => resolve(response.data)));
  }

  increaseQuantityProduct(product, itemId) {
    product.quantity++;
    return new Promise((resolve, reject) => Ajax.put(`${Routes.update_product}${itemId}`, product).then(response => resolve(response.data)));
  }

  decreaseQuantityProduct(product, itemId) {
    product.quantity--;
    return new Promise((resolve, reject) => Ajax.put(`${Routes.update_product}${itemId}`, product).then(response => resolve(response.data)));
  }

  removeProductInCart(itemId) {
    Ajax.delete(`${Routes.remove_product_in_cart}${itemId}`);
  }

  cleanCart(cartId) {
    return new Promise((resolve, reject) => Ajax.delete(`${Routes.clean_cart}${cartId}`).then(response => resolve(response.data)));
  }

  generateOrder(data, authToken) {
    return new Promise((resolve, reject) => Ajax.post(`${Routes.create_order}`, data, authToken).then(response => resolve(response.data)));
  }
}