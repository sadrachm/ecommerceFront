import { Component, Input, Inject } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  description: string;
  price:string;
  name: string;
  url:string;
  id:number
}


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
  constructor(private productService:ProductService, public dialog: MatDialog) {}
  cart() {
    console.log(this.id)
    this.productService.addToCart(this.id).subscribe({
      next:data=> console.log(data),
      error:err=> console.log(err)
      
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(ProductDescription, {
      data: {name: this.name, price: this.price, description:"Something very long", url:this.imageLink, id:this.id},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  
  }

}
@Component({
  selector: 'productDescription',
  templateUrl: 'productDescription.html',
})
export class ProductDescription {
  constructor(
    public dialogRef: MatDialogRef<ProductDescription>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private productService:ProductService,
  ) {}
    loading = false;
  addToCart() {
    this.loading = true
    this.productService.addToCart(this.data.id).subscribe({
      next:data=> {
        console.log(data)
        this.dialogRef.close()
      },
      error:err=> console.log(err)
      
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
