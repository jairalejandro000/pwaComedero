import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IComedero } from 'src/app/interfaces/comedero';
import { ISensor } from 'src/app/interfaces/sensor';
import { ComederoService } from 'src/app/services/comedero.service';

@Component({
  selector: 'app-comedero-dialog',
  templateUrl: './comedero-dialog.component.html',
  styleUrls: ['./comedero-dialog.component.css']
})
export class ComederoDialogComponent implements OnInit {
  historyValues?: any[];
  constructor(@Inject(MAT_DIALOG_DATA) public sensor: ISensor,
  private comederoService: ComederoService) { }

  ngOnInit(): void {
    if(this.sensor.id == 5){
      this.history();
    }
  }

  history(){
    this.comederoService.history(this.sensor.id).subscribe({
      next: (v: any) => {
        let response = v.data;
        this.historyValues = response;
      }
    })
  }


}
