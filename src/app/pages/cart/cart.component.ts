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
          console.log(data);
        }
      })
    }
  }
  ngOnChange(changes: SimpleChanges) {
  }
  remove(product:Product) {
    console.log(product);
    this.loginService.removeFromCart(product).subscribe({
      next: data => {
        this.loginService.userInfo = data;
        this.products = data.products;
      },
      error:err => {
        console.log(err);
      }
    })
  }
  removeSingle(product:Product) {
    this.loginService.removeSingleFromCart(product).subscribe({
      next: data => {
        console.log(data);
        this.loginService.userInfo = data;
        this.products = data.products;
      },
      error: err => {
        console.log(err)
      }
    })
  }
  add(product:Product) {
    this.productService.addToCart(Number(product.productId)).subscribe({
      next: data => {
        console.log(data);
        this.loginService.userInfo.products = data.products;
        this.products = data.products;
      },
      error: err => {
        console.log(err)
      }
    })
  }
  sum(product:Product[]) {
    let ans = 0;
    for (let el of product) {
      ans += Number(el.price);
    }
    return ans;
  }

}
