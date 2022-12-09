import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { comederoValidationMessages } from 'src/app/exports/validationMessages';
import { IComedero } from 'src/app/interfaces/comedero';
import { ComederoService } from 'src/app/services/comedero.service';

@Component({
  selector: 'app-new-comedero-dialog',
  templateUrl: './new-comedero-dialog.component.html',
  styleUrls: ['./new-comedero-dialog.component.css']
})
export class NewComederoDialogComponent implements OnInit {
  formComedero: FormGroup={} as FormGroup;
  comedero?: IComedero;
  validationMessages = comederoValidationMessages;

  constructor(private toastr: ToastrService,
    private comederoServiece: ComederoService,
    private router: Router) { }

  ngOnInit(): void {
    this.formBuilder();
    
  }

  formBuilder(): void{
    this.formComedero = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      code: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    });
  }

  addComedero(){
    this.comedero = {
      name: this.formComedero.get('name')?.value
    }
    this.comederoServiece.new(this.comedero).subscribe({
      next: (v: any) => {
        this.toastr.success('Ahora podra acceder al comedero de su mascota', 'Comedero agregado', { timeOut: 3000 })
        let response: any = v.data
        this.addSensors(response.id)
      },
      error: (e) => {
        this.formComedero.reset()
        this.toastr.error('Su comedero no se ha podido registrar', 'Ocurrió un error', { timeOut: 3000 })
      },
    });
  }

  addSensors(id?: number): void{
    this.comederoServiece.addSensors(id).subscribe({
      next: (v) => {
        window.location.reload();
      }
    });
  }
}
