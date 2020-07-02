import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { from } from 'rxjs';


@NgModule({
  imports:[
        RouterModule.forRoot([
                { path: 'welcome', component: HomeComponent},
                // { path: 'products', }
                // canActivate: [AuthGuard],
                // data: { preload: true },
                //     loadChildren: () =>
                //         import('./products/product.module').then(m => m.ProductModule) },
                { path: '', redirectTo:'welcome', pathMatch: 'full' },
                { path: '**', component: PageNotFoundComponent }
         ], )
        ],
    exports:[RouterModule]
})
export class AppRoutingModule { }
