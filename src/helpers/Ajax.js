import Axios from 'axios';
export default class Ajax {
 static get(url) {
   return new Promise((resolve, reject) => {
     Axios.get(url).then(response => {
       resolve(response);
      }).catch(error => reject(error.response));
    });
  }
  
  static post(url, data, authToken = null) {
    return new Promise((resolve, reject) => {
      if(authToken) {
        const instance = Axios.create({
          baseURL: url,
          timeout: 1000,
          headers: {'user-key': authToken}
        });
        instance.post(url, data).then(response => {
          resolve(response);
        }).catch(error => reject(error.response.data.error.message));
        return;
      }
      Axios.post(url, data).then(response => {
        resolve(response);
      }).catch(error => reject(error.response.data.error.message));
    });
  }


  static put(url, data, authToken) {
    return new Promise((resolve, reject) => {
      const instance = Axios.create({
        baseURL: url,
        timeout: 1000,
        headers: {'user-key': authToken}
      });
      instance.put(url, data).then(response => {
        resolve(response);
      }).catch(error => reject(error.response.data.error.message));
    });
  }

  static delete(url, data) {
    return new Promise((resolve, reject) => {
      Axios.delete(url).then(response => {
        resolve(response);
      }).catch(error => reject(error.response.data.error.message));
    });
  }
}