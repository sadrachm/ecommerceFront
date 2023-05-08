import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {userModel} from "../model/userModel"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){ }
  login(username:String, password:String) : Observable<userModel>  {
     let header:HttpHeaders = new HttpHeaders();
     header.append("accept","text/json");
     header.append("Access-Control-Allow-Origin", "*");
     return this.http.post<userModel>("http://localhost:9000/user", {username, password}, {headers:header});
  }

}
