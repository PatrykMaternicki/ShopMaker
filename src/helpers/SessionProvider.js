import Axios from 'axios';
export default class Ajax {
 static setSession(accessKey) {
   return new Promise((resolve, reject) => {
     Axios.get(url).then(response => {
       resolve(response);
      });
    });
  }
  
  static post(url, data) {
    return new Promise((resolve, reject) => {
      Axios.post(url, data).then(response => {
        resolve(response);
      });
    });
  }
}