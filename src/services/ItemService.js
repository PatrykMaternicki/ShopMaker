import Ajax from  '../helpers/Ajax';
import { Routes } from '../configs/Routes';

export default class ItemService {

  getAllItems() {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.products}?limit=24&page=1`).then(items => resolve(items)))
  }

  findItems(val) {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.search}?limit=24&page=1&query_string=${val}`).then(items => resolve(items)))
  }

  getItemsInCategory(val) {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.products_in_category}/${val}?limit=24&page=1`).then(items => resolve(items)))
  }

  getItemsInDepartament(val) {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.products_in_departament}/${val}?limit=24&page=1`).then(items => resolve(items)))
  }

  getItemsByPage(val) {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.products}?limit=24&page=${val}`).then(items => resolve(items)))
  }
  
  getDetailAboutItem(val) {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.products}/${val}`).then(items => resolve(items)))
  }
}