import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  STATE_KEY = '__state__';

  constructor() { }

  saveState(state) {
    localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
  }

  getState() {
    return JSON.parse(localStorage.getItem(this.STATE_KEY) || '{}');
  }
}
