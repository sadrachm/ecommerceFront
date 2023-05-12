import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { LoginService } from 'src/app/service/login.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  @Input() product : Array<Product> = []
  total = 0.00;
  constructor(private userService : LoginService, private router:Router){}
  ngOnInit() {
    this.product = this.userService.userInfo.products;
    console.log(this.product);
    for (let el of this.product) {
      this.total += Number(el.price) * Number(el.quantity);
    }
  }
  purchase() {
    this.userService.purchase().subscribe({
      next: data => {
        this.userService.userInfo = data;
        console.log(data);
        this.router.navigate(['/feedback'])
      }
    })
  }

}
