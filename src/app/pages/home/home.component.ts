import { Component } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:Array<Product> = [];
  constructor(private productService:ProductService) {
    
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe({
    next:data => {this.products = data; console.log(data)},
    error:err => console.log(err)
  })

  }

}
