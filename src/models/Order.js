export default class Order {
  constructor(productId, attributes, cartId) {
    this.product_id = productId;
    this.attributes = attributes;
    this.cart_id = cartId;
  }
}