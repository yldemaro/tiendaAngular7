import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get('assets/apis/api.json');
  }
}
