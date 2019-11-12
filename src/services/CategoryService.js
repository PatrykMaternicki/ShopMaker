import Ajax from  '../helpers/Ajax';
import { Routes } from '../configs/Routes';

export default class ItemService {

  getCategories() {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.categories}`).then(items => resolve(items)))
  }
}