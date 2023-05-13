import { Component, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { LoginService } from 'src/app/service/login.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products:Array<Product> = [];
  constructor(private loginService:LoginService, private productService:ProductService) {}
  info() {
    console.log(this.loginService.userInfo)
  }
  ngOnInit() {
    this.products = this.loginService.userInfo.products;
    if (this.loginService.userInfo.id !== 0) {
      this.loginService.getUser(this.loginService.userInfo.id).subscribe({
        next:data => {
          this.loginService.userInfo = data;
          this.products = data.products;
        }
      })
    }
  }
  ngOnChange(changes: SimpleChanges) {
    console.log("NANI")
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
  add(product:Product) {
    this.productService.addToCart(Number(product.productId)).subscribe({
      next: data => {
        this.loginService.userInfo.products = data;
        this.products = data;
      }
    })
  }

}
