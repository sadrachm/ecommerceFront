import { ComponentFixture, TestBed, } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginService } from 'src/app/service/login.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserAnimationsModule, HttpClientTestingModule,MatFormFieldModule, FormsModule, MatInputModule, 
      ], 
      providers: [LoginService, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(component).toBeTruthy();
  });
});
