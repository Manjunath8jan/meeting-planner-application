import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import {Ng2TelInputModule} from 'ng2-tel-input';


import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2TelInputModule,
    RouterModule.forChild([
      { path:'login', component:LoginComponent, pathMatch: 'full' },
      { path:'signup', component:SignupComponent, pathMatch: 'full' }
    ])
  ]
})
export class UsersModule { }
