import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setItemToLocalStorage(DataArray: Array<string>) {
    return localStorage.setItem('status', JSON.stringify(DataArray));
  }

  getItemFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  clearLocalStorage() {
    localStorage.removeItem('status');
  }
}
