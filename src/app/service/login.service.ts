import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {userModel} from "../model/userModel"

let userTemplate : userModel = {
  username:"",
  password:"",
  id:0,
  products:new Array()
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userInfo : userModel = userTemplate;

  constructor(private http:HttpClient){ 
    let userID = localStorage.getItem("userID")
    if (userID !== null) {
      this.getUser(userID as unknown as number).subscribe(data => {
        this.userInfo = data;

      })
    } else {
      console.log("No previous User Data")
    }
  }
  register(username:String, password:String) : Observable<userModel>  {
     let header:HttpHeaders = new HttpHeaders();
     header.append("accept","text/json");
     header.append("Access-Control-Allow-Origin", "*");
     return this.http.post<userModel>("http://localhost:9000/user", {username, password}, {headers:header});
  }
  login(username:String, password:String) : Observable<userModel>  {
     let header:HttpHeaders = new HttpHeaders();
     header.append("accept","text/json");
     header.append("Access-Control-Allow-Origin", "*");
     return this.http.post<userModel>("http://localhost:9000/login", {username, password}, {headers:header});
  }
  logout() {
    this.userInfo = userTemplate;
    localStorage.removeItem("userID");
  }
  getUser(userId : number) {
    let header:HttpHeaders = new HttpHeaders();
    header.append("accept","text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<userModel>("http://localhost:9000/user/"+userId, {headers:header});

  }

}
