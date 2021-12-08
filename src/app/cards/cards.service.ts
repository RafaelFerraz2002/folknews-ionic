import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getType(type) {
    return this.http.get('http://www.publico.pt/api/list/' + type);
  }
}
