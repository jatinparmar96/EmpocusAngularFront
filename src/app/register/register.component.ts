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
   errors:any;
   isProcessing:boolean = false;
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
    this.isProcessing= true;
  	 this.authService.signupUser(user.value).then((data)=>{
         let user:any = data;
         if (user==='success') {
            this.router.navigateByUrl('/dashboard');
         }
     })
     .catch((error)=>{
       this.isProcessing= false;
        this.errors = error.statusText;
     })
     
     
     
          
  }
}
