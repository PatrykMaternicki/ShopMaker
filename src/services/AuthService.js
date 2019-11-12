import { Authorize } from '../dictionary/authorize';

export default class AuthService {
  setCookies(data) {
    let date = new Date();
    let expiredDate = date.setDate(date.getDate() + 1);
    document.cookie = `shopmaker_user_id=${data.customer.customer_id}; expires=${new Date(expiredDate)}`
    document.cookie = `shopmaker_login=${data.customer.name}; expires=${new Date(expiredDate)}`
    document.cookie = `shopmaker_auth_token=${data.accessToken}; expires=${new Date(expiredDate)}`
  }

  removeCookies(data) {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() - (1000*60*60*24));
    let expires = "expires=" + currentDate.toGMTString();
    document.cookie = `shopmaker_user_id=''; expires=${expires}`;
    document.cookie = `shopmaker_login=''; expires=${expires}`;
    document.cookie = `shopmaker_auth_token=''; expires=${expires}`;
  }

  isLogged() {
    let cookies = document.cookie.split('; ');
    return cookies.findIndex(cookie => cookie.includes('shopmaker_auth_token')) > -1;
  }

  getLogin() {
    let cookies = document.cookie.split('; ');
    let index = cookies.findIndex(cookie => cookie.includes('shopmaker_login'));
    return cookies[index].split('=')[1];
  }

  getAuthToken() {
    let cookies = document.cookie.split('; ');
    let index = cookies.findIndex(cookie => cookie.includes('shopmaker_auth_token'));
    return cookies[index].split('=')[1];
  }

  isAuthorize(path) {
    let indexExist = Authorize.findIndex(row => path === row) > -1;
    return indexExist ? this.isLogged() : true;
  }
}