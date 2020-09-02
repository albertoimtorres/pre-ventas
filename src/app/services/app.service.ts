import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

class AppService {

  url = '';
  apiData = '';

  constructor() {
    this.url = environment.apiUrl;
    this.apiData = environment.apiData;
  }

}

export { AppService };
