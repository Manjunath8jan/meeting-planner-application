import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayusersComponent } from './displayusers/displayusers.component';

import { RouterModule, Router } from '@angular/router'



@NgModule({
  declarations: [DisplayusersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'showusers',
        component:DisplayusersComponent,
        outlet:'usersdisplay'
      }
    ])
  ]
})
export class OnlineUsersModule { }
