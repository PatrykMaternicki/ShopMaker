export default class Charge {
  constructor(data) {
    this.stripeToken = data.stripeToken;
    this.orderId = data.orderId;
    this.description = data.description;
    this.amount = data.amount;
    this.currency = data.currency;
  }
}