import { StripeApi } from '../configs/StripeApi';

var StripeClient = null;
export default class StripeClientProvider {
  static getClient() {
    !StripeClient && this.setClient();
    return StripeClient;
  }

  static setClient() {
    StripeClient = Stripe(StripeApi.public_key);
  }
}