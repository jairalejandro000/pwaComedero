import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ISensor } from 'src/app/interfaces/sensor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comedero',
  templateUrl: './comedero.component.html',
  styleUrls: ['./comedero.component.css']
})
export class ComederoComponent implements OnInit {
  id?: number;
  params?: any;
  sensorsList?: ISensor[] = [];
  destroyed = new Subject<void>();
  currentScreenSize?: string;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  colSize = 4;
  deviceInfo: any = null;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private breakpointObserver: BreakpointObserver) {
    this.params = route.snapshot.params;
    this.id = this.params.id;
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            switch(this.currentScreenSize){
              case 'XSmall':
                this.colSize = 2;
              break;
              case 'Small':
                this.colSize = 2;
              break;
              case 'Medium':
                this.colSize = 3;
              break;
              case 'Large':
                this.colSize = 4;
              break;
              default:
                this.colSize = 4;
              break;
            }
          }
        }
     });
  }

  ngOnInit(): void {
    this.sensors();
  }

  async sensors() {
    this.userService.sensors(this.id).subscribe({
      next: (v: any) => {
        let response = v.data;
        for(let x of response){
          this.sensorsList?.push(x.sensor);
        }
        this.addImage();
      },
      error: (e) => console.log(e)
    })
  }

  history(id: number): void {
    console.log(id)
  }

  addImage(): void{
    for(let x of this.sensorsList){
      switch(x.id){
        case 1:
          x.image = "croquetonas";
        break;
        case 2:
          x.image = "bocina";
        break;
        case 3:
          x.image = "videollamada";
        break;
        case 4:
          x.image = "grifo";
        break;
        case 5:
          x.image = "sensor-de-temperatura";
        break;
      }
    }
  }

}
