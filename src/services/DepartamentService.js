import Ajax from  '../helpers/Ajax';
import { Routes } from '../configs/Routes';

export default class DepartamentService {

  getDepartaments() {
    return new Promise((resolve, reject) => Ajax.get(`${Routes.departaments}`).then(items => resolve(items)))
  }
}