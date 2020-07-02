export interface User{
    apiKey: string;
    id: number;
    firstName: string;
    lastName:string;
    mobile:any;
    userType: string;
    email: string;
}
 export interface UserResolved{
     User: User;
     error?:any;
 }