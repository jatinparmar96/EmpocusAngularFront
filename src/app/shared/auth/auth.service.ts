import { Router } from '@angular/router';
import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtModule} from '@auth0/angular-jwt';
import {ApiService} from '../services/api.service';
export const endPoint= 'http://127.0.0.1:8000/api/';

@Injectable()
export class AuthService {
  token:any;
  constructor(private http:HttpClient,private apiService:ApiService) {}

  signupUser(user) {
   let registered:any =0;
     return new Promise((register,error)=>{
       console.log('Promise in Auth Service');
       this.apiService.post('auth/register',user).then((data)=>{
         console.log('User Registered '+data);
          register(data);
       }).catch((er)=>
       {
           error(er);
       }) 
     })
  }

  signinUser(user) {
    return new Promise((login,reject)=>{
      this.apiService.post('auth/login',user).then((data)=>{
        console.log(data);
        login(data);
      }).catch((error)=>{
        reject(error);
      })
    })
  }

  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    
    return true;
  }
}
