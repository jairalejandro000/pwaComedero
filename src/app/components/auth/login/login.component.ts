import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { loginValidationMessages } from 'src/app/exports/validationMessages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup={} as FormGroup;
  user: any;
  hide = true;
  validationMessages = loginValidationMessages;

  constructor(private authService: AuthService) {
   }

  ngOnInit(): void {
    this.formBuilder();
  }

  login(){
    this.user = {
      email: this.formLogin.get('email').value,
      password: this.formLogin.get('password').value
    }
    console.log(this.user);
    this.authService.login(this.user).subscribe(response => {
      localStorage.setItem('token', response.data);
      
    },
    (error) => {
      console.log("no jaloo:((" + error.status);
      console.log(error.data);
    });
  }

  formBuilder(): void{
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

}
