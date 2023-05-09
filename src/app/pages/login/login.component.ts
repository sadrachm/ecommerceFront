import { Component, NgModule } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password:String = "123";
  username:String="Bill";
  message = "";
  constructor(private loginService:LoginService) {}
  login() {    
    this.loginService.login(this.username,this.password).subscribe({
      next: data => {        
      this.loginService.userInfo = data;
      localStorage.setItem("userID", data.id as unknown as string);
      },
      error: err => this.message = err.error.message
    })
  }
  logout() {
    this.loginService.logout();
  }
  getInfo() {
    console.log(this.loginService.userInfo);
  }
  register() {
    this.loginService.register(this.username, this.password).subscribe({
      next: (data) => {
        this.loginService.userInfo = data;
        localStorage.setItem("userID", data.id as unknown as string);
      },
      error: (err:any) => this.message = err.error.message,
      complete:()=>{}
    })
  }

}
