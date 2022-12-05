import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { loginValidationMessages } from 'src/app/exports/validationMessages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup={} as FormGroup;
  user?: IUser;
  hide = true;
  validationMessages = loginValidationMessages;

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.formBuilder();
  }

  login(){
    this.user = {
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value
    }
    this.authService.login(this.user).subscribe({
      next: (v) => localStorage.setItem('token', v.data),
      error: (e) => {
        this.toastr.error('no mameeeeesss', 'adios', { timeOut: 3000 })
        this.formLogin.reset()
      },
      complete: () => {
        this.toastr.success('Ya jalaaan', 'Titulo perron', { timeOut: 3000 })
        this.router.navigate(['/home'])
      }
    });
  }

  formBuilder(): void{
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    });
  }

}
