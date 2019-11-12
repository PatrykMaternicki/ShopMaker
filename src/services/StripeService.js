import { StripeApi } from '../configs/StripeApi';
import Ajax from  '../helpers/Ajax';
import { Routes } from '../configs/Routes';
import Charge from '../models/Charge';
import StripeClientProvider from '../providers/StripeClientProvider';

export default class StripeService {
  generateStripeElement() {
    let stripeElement = StripeClientProvider.getClient().elements();
    return stripeElement.create('card', {style: StripeApi.style});
  }

  generateStripeToken(card) {
    return new Promise((resolve, reject) => {
      let stripeClient = StripeClientProvider.getClient();
      stripeClient.createToken(card).then(function(result) {
        if (result.error) {
          let errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          resolve(result.token);
        }
      });
    });
  }

  payOrder(data) {
    Ajax.post(Routes.charge_stripe, new Charge(data));
  }
}