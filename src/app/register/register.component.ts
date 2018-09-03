import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import{AuthService} from '../shared/auth/auth.service';
import{first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	 user: FormGroup;	

  constructor(fb:FormBuilder,private authService:AuthService, private router:Router) {
  		this.user = fb.group({
  			"name":["",Validators.required],
  			"email": ["",Validators.required],
  			"mobile":["",Validators.required],
            "password": ["",Validators.required],
  			});
   }

  ngOnInit() {
  }
  register(user){
  	 this.authService.signupUser(user.value).then((data)=>{
         if (data==='success') {
            this.router.navigateByUrl('/dashboard');
         }
     })
     .catch((error)=>{
        alert('Please check the fields '+ error.statusText);
     })
     
     
     
          
  }
}
