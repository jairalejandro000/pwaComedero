import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComederoService } from 'src/app/services/comedero.service';

@Component({
  selector: 'app-alimentar',
  templateUrl: './alimentar.component.html',
  styleUrls: ['./alimentar.component.css']
})
export class AlimentarComponent implements OnInit {
  id?: number;
  params?: any;
  name: string = ''; 
  constructor(private route: ActivatedRoute,
    private comederoService: ComederoService,
    private toastr: ToastrService) {
    this.params = route.snapshot.params;
    this.id = this.params.id;
   }
  ngOnInit(): void {
    this.pet();
  }

  pet(): void {
    this.comederoService.pet(this.id).subscribe({
      next: (v: any) => {
        let response: any = v.data
        this.name = response.name
      },
      error: (e) => console.log(e)
    });
  }

  aguita(){
    this.toastr.success('Ya no se va a morir de sed', 'Mascota', { timeOut: 3000 })
  }

  comidita(){
    this.toastr.success('Ya no se va a morir de hambre', 'Mascota', { timeOut: 3000 })
  }

}
