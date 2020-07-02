import { Injectable } from '@angular/core';

import { User } from './user'
import { Observable } from 'rxjs';
import{ HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser: User;
    redirectUrl: string;
    private url = 'http://localhost:3000';
    isLogged

    get isLoggedIn(): boolean{
        this.isLogged = this.getUserData();
        if(this.isLogged != null){
            return false;
        }else{
            return true;
        }
        //return !this.currentUser;
    }

    constructor(private http:HttpClient){}

    login(userData): Observable<any>{
        if(!userData.mailId || !userData.password){
            const params = new HttpParams()
                .set('email', userData.email)
                .set('password', userData.password);
            return this.http.post(`${this.url}/api/v1/users/login`,params);  
        }
    }

    setUserData(data): void{
        this.currentUser = {
        apiKey: data.authToken,    
        id : data.userDetails.userId,
        email : data.userDetails.email,
        firstName : data.userDetails.firstName,
        lastName : data.userDetails.lastName,
        mobile: data.userDetails.mobileNumber,
        userType : data.userDetails.firstName.includes('admin') ? 'admin' : 'normal_user'
        };

        localStorage.setItem('userInfo',JSON.stringify(this.currentUser));
        
    }

    getUserData(): any{
        // console.log(JSON.parse(localStorage.getItem('userInfo')));
        return JSON.parse(localStorage.getItem('userInfo'))
    }

    signUp(userData):Observable<any>{
        const params = new HttpParams()
            .set('firstName', userData.firstName)
            .set('lastName',userData.lastName)
            .set('mobileNumber',userData.mobile)
            .set('password', userData.password)
            .set('email',userData.email)
        return this.http.post(`${this.url}/api/v1/users/signup`,params)
        
    }

    logout(): void{
        window.localStorage.clear();
    }

}