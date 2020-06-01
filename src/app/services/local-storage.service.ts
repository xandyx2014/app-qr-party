import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setObject(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key) {
    return localStorage.removeItem( key );
  }
  getObject(key) {
    const resp = localStorage.getItem(key);
    const data = JSON.parse(resp);
    return data;
  }
}
