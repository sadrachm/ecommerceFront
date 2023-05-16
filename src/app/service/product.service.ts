import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { userModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Array<Product> = []

  constructor(private http:HttpClient, private loginService:LoginService) {
    
   }
  
  getAllProducts() : Observable<Array<Product>> {
    let header:HttpHeaders = new HttpHeaders();
    header.append("accept","text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Array<Product>>("http://localhost:9000/products", {headers:header});
  }
  addToCart(productID:number) {    
    let header:HttpHeaders = new HttpHeaders();
    header.append("accept","text/json");
    header.append("Access-Control-Allow-Origin", "*");
    console.log("productID", productID)
    return this.http.post<userModel>("http://localhost:9000/cart/"+this.loginService.userInfo.id, {id:productID}, {headers:header});
  }
}
