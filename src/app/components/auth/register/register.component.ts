import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { registerValidationMessages } from 'src/app/exports/validationMessages';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup={} as FormGroup;
  user?: IUser;
  hide = true;
  hide2 = true;
  validationMessages = registerValidationMessages;
  
  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    }

  ngOnInit(): void {
    this.formBuilder();
  }

  register(){
    this.user = {
      username: this.formRegister.get('username')?.value,
      name: this.formRegister.get('name')?.value,
      lastname: this.formRegister.get('lastname')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value
    }
    this.authService.register(this.user).subscribe({
      next: (v) => this.toastr.success('Ya jalaaan', 'Titulo perron', { timeOut: 3000 }),
      error: (e) => {
        this.toastr.error('no mameeeeesss', 'adios', { timeOut: 3000 })
        this.formRegister.reset()
      },
      complete: () => {
        this.router.navigate(['/'])
      }
    });
  }

  formBuilder(): void {
    this.formRegister = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      lastname: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
      //confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
    })
  }

}
