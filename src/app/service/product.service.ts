import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Array<Product> = []

  constructor(private http:HttpClient) {
    
   }
  
  getAllProducts() : Observable<Array<Product>> {
    let header:HttpHeaders = new HttpHeaders();
    header.append("accept","text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Array<Product>>("http://localhost:9000/products", {headers:header});
  }
}
