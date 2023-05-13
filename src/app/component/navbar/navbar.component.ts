import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private loginService: LoginService) {}
  ngOnInit() {
    console.log(this.loginService.userInfo)
    if (this.loginService.userInfo.id == 0 && localStorage.getItem("userID") !== null) {
      this.loginService.getUser(Number(localStorage.getItem("userID"))).subscribe({
        next: data => {
          this.loginService.userInfo = data;
          console.log(data, "");
        }
      })
    }
  }

}
