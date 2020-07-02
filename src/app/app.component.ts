import { Component } from '@angular/core';
import { AuthService } from './users/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Meeting Planner ';

  constructor(private authService:AuthService,
              private routerService: Router){}

  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn
  }

  logOut(): void{
    this.authService.logout();
    this.routerService.navigate(['/welcome']);
  }

}
