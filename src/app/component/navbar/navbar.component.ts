import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn:boolean = false;
  page:String = 'Home'
  constructor(private loginService: LoginService) {}
  ngOnInit() {
    console.log(this.loginService.userInfo)
    if (this.loginService.userInfo.id == 0 && localStorage.getItem("userID") !== null) {
      this.loginService.getUser(Number(localStorage.getItem("userID"))).subscribe({
        next: data => {
          this.loginService.userInfo = data;
          console.log(data, "");
          this.loggedIn = true;
        }
      })
    } else if (this.loginService.userInfo.id !== 0) this.loggedIn = true;
    else this.loggedIn = false;
  }
  change(page:String) {
    console.log(page)
    if (page == "home" || page=="cart") {
      if (this.loginService.userInfo.id == 0 && localStorage.getItem("userID") !== null) {
        this.loginService.getUser(Number(localStorage.getItem("userID"))).subscribe({
          next: data => {
            this.loginService.userInfo = data;
            console.log(data, "");
            this.loggedIn = true;
          }
        })
      } else if (this.loginService.userInfo.id !== 0) this.loggedIn = true
      else this.loggedIn = false
    }
    this.page = page;

  }
}
