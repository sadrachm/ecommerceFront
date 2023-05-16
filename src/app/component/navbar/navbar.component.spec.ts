import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar.component';
import { LoginService } from 'src/app/service/login.service';
import {  MatToolbarModule } from '@angular/material/toolbar';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        BrowserAnimationsModule, HttpClientTestingModule,MatFormFieldModule, FormsModule, MatInputModule, MatToolbarModule
      ], 
      providers: [LoginService, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(component).toBeTruthy();
  });
});
