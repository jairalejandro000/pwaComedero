import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private comederoService: ComederoService) {
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

}
