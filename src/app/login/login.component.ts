import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthGuard} from '../shared/auth/auth-guard.service';
import{AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
      user: FormGroup;
  	//   profileForm = new FormGroup({
   //    email:new FormControl(''),
   //    password:new FormControl('')
   // });
  constructor(fb: FormBuilder,private router:Router,private authService:AuthService) {
          this.user = fb.group({
            "email": ["",Validators.required],
            "password": ["",Validators.required],
          });
     }

  ngOnInit() {
      
  }
  onSubmit(user) {
     this.authService.signinUser(user.value).then((data)=>{
       let user:any = data
       if (user.status) {
         this.router.navigateByUrl('/dashboard');
       }
       else{
         alert(user.message);
       }
     }).catch((error)=>{
        console.log(error);
       alert(error.message);
     });
           
    
  }
  onForgotPassword()
 {
 		alert("You forgot Password");
 }
}
