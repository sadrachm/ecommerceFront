import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartComponent } from './cart.component';
import { LoginService } from 'src/app/service/login.service';
import { ProductService } from 'src/app/service/product.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        BrowserAnimationsModule, HttpClientTestingModule,MatFormFieldModule, FormsModule, MatInputModule, 
      ], 
      providers: [LoginService, ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should sum to 24.43', () => {
    let x = component.sum([])
    expect(x).toEqual(0);
  });
  it ('should sum to 15', () => {
    let x = component.sum([
      {"price":"5.50", "id":1, "product":"test", "description":"test"}, 
      {"price":"5.50", "id":1, "product":"test", "description":"test"},
      {"price":"12.43", "id":1, "product":"test", "description":"test"},
      {"price":"1", "id":1, "product":"test", "description":"test"},
    ])
    expect(x).toEqual(24.43);
  })
});
