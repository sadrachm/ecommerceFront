import { Component, NgModule } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password:String = "";
  username:String="";
  constructor(private loginService:LoginService) {}
  login() {
    this.loginService.login(this.username,this.password).subscribe(data => {
      console.log(data);
    })
  }

}
