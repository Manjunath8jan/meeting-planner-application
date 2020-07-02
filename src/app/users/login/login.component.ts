import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPageTitle='Please login to Meeting Planner';

  errorMessage: string;

  constructor(private authService: AuthService, private routerService: Router) { }

  login(loginForm:NgForm){
    if(loginForm && loginForm.valid){
      let userData = {
      email: loginForm.form.value.userName,
      password: loginForm.form.value.password
      }
      this.authService.login(userData).subscribe((apiResponse) => {
        
        if(apiResponse.status === 200){
          // if(this.authService.redirectUrl){
          //   this.routerService.navigateByUrl(this.authService.redirectUrl)
          // }else{
            this.authService.setUserData(apiResponse.data)
            this.routerService.navigate(['/calendar']);
          // }
        }
      }); 
    }else{
        this.errorMessage = 'please enter user Name and password';
      }
    }

  ngOnInit() {
  }

}
