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
    this.loginService.getUser(this.loginService.userInfo.id).subscribe({
      next:data => {
        this.loginService.userInfo = data;
        this.products = data.products;
      }
    })
  }
  remove(product:Product) {
    this.loginService.removeFromCart(product).subscribe({
      next: data => {
        this.loginService.userInfo = data;
        this.products = data.products;
      }
    })
  }
  removeSingle(product:Product) {
    this.loginService.removeSingleFromCart(product).subscribe({
      next: data => {
        this.loginService.userInfo = data;
        this.products = data.products;
      }
    })
  }

}
