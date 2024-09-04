import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // endpoint
  private myAppUrl:string;
  // metodo enpoint
  private myApiUrl:string;


  // inicia
  constructor(private http: HttpClient) {
    // seteando
    this.myAppUrl =environment.endpoint;
    this.myApiUrl = 'api/products/';
  }



  // metodo obtener data productos
  getListProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
