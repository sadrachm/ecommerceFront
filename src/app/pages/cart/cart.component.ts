import { Component } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products:Array<Product> = [];
  constructor(private loginService:LoginService) {}
  info() {
    console.log(this.loginService.userInfo)
  }
  ngOnInit() {
    console.log(this.loginService.userInfo)
    this.products = this.loginService.userInfo.products;
    console.log(this.products)
  }

}
