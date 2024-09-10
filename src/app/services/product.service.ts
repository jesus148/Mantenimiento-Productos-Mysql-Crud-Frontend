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



  // metodo elimina por id
  deteleProduct(id : number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }


  // metodo agrega o registra
  saveProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,product)
  }


  // metodo obtien producto por id
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }


  // metodo actualiza por id , enviar el id y el objeto
  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }



}
