import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  pageTitle = "Please SignUp with your details";
  selectedCountry: any = "IN";
  selectedPhoneNumber: any;
  countries: any[];
  errorMessage;

  constructor(private authService: AuthService, private router: Router) {}

  match(controlName: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      if (c.value === null || c.value.length === 0) {
        return null;
      }
      const controlToCompare = c.root.get(controlName);
      if (controlToCompare) {
        const subscription: Subscription = controlToCompare.valueChanges.subscribe(
          () => {
            c.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }
      return controlToCompare && controlToCompare.value !== c.value
        ? { compare: true }
        : null;
    };
  }

  passwordMatch(password1: string, password2: string): boolean {
    // If password not entered
    if (password1 == "") return false;
    // If confirm password not entered
    else if (password2 == "") return false;
    // If Not same return False.
    else if (password1 != password2) {
      return false;
    }

    // If same return True.
    else {
      return true;
    }
  }

  signUp(signUpForm: NgForm) {
    if (signUpForm && signUpForm.valid) {
      let userData = {
        firstName: signUpForm.form.value.firstName,
        lastName: signUpForm.form.value.lastName,
        password: signUpForm.form.value.password,
        email: signUpForm.form.value.emailId,
        mobile: signUpForm.form.value.mobileNumber
      };
      let confirmPassword = signUpForm.form.value.confirmPassword;
      if (!this.passwordMatch(userData.password, confirmPassword)) {
        this.errorMessage = "please enter a matching password";
      } else {
        this.authService.signUp(userData).subscribe((apiResponse) => {
          if(apiResponse.status === 200)
          this.router.navigateByUrl('login');
        });
        }
    } else {
      this.errorMessage = "please enter user Name and password";
    }
  }

  ngOnInit() {}
}
