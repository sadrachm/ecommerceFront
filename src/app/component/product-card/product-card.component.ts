import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name="Soap";
  @Input() price="$12.99";
  @Input() imageLink=""
  @Input() id=0;
  constructor(private productService:ProductService) {}
  cart() {
    console.log(this.id)
    this.productService.addToCart(this.id).subscribe({
      next:data=> console.log(data),
      error:err=> console.log(err)
      
    })
  }

}
