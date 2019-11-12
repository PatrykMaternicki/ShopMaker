import Customer from '../models/Customer';

export default class UserDataProvider {
  static getUserData() {
    let object = {};
    for (let prop in window.localStorage) {
      object[prop] = window.localStorage.getItem(prop);
    }
    return object;
  }

  static setUserData(data) {
    for(let prop in data) {
      window.localStorage.setItem(prop, data[prop]);
    }
  }

  static cleanUserData() {
    for (let prop in Customer) {
      window.localStorage.removeItem(prop);
    }
  }
}