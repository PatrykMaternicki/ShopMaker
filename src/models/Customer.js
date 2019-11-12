export default class Customer {
  constructor(data) {
    this.name = data.name;
    this.password = data.password;
    this.email = data.email; 
    this.address_1 =  data.address_1;
    this.address_2 = data.address_2;
    this.city = data.city;
    this.region = data.region;
    this.postal_code = data.postal_code;
    this.credit_card = data.credit_card;
    this.day_phone = data.day_phone;
    this.eve_phone = data.eve_phone;
    this.mob_phone = data.mob_phone;
  }
}