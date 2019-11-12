import Ajax from  '../helpers/Ajax';
import { Routes } from '../configs/Routes';
import UserDataProvider from '../providers/UserDataProvider';

export default class UserService {

  registerUser(user) {
    return new Promise((resolve, reject) => Ajax.post(`${Routes.register}`, user)
      .then(response => resolve(response))
      .catch(error => reject(error)));
  }

  loginUser(user) {
    return new Promise((resolve, reject) => Ajax.post(`${Routes.login}`, user)
      .then(response => resolve(response))
      .catch(error => reject(error)));
  }

  updateUser(user, authToken) {
    return new Promise((resolve, reject) => Ajax.put(`${Routes.update_user}`, user, authToken)
    .then(response => resolve(response))
    .catch(error => reject(error)));
  }

  updateAddress(address, authToken) {
    return new Promise((resolve, reject) => Ajax.put(`${Routes.update_address}`, address, authToken)
    .then(response => resolve(response))
    .catch(error => reject(error)));
  }

  updateCreditCard(creditCard, authToken) {
    return new Promise((resolve, reject) => Ajax.put(`${Routes.update_credit_data}`, creditCard, authToken)
    .then(response => resolve(response))
    .catch(error => reject(error)));
  }

  getUserData() {
    return UserDataProvider.getUserData();
  }

  setUserData(user) {
    return UserDataProvider.setUserData(user);
  }

  cleanUserData() {
    UserDataProvider.cleanUserData();
  }
}