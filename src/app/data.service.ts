import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  fetchData() {
    return this.http.get('https://firstprojctangular.firebaseio.com/.json');
  }
}
