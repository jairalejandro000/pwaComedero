import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UserService } from 'src/app/services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { IComedero } from 'src/app/interfaces/comedero';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewComederoDialogComponent } from './new-comedero-dialog/new-comedero-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  comederosList: IComedero[] = [];
  deviceInfo: any = null;

  constructor(private userService: UserService, 
    private breakpointObserver: BreakpointObserver,
    private router: Router, private dialog: MatDialog) {
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
                this.colSize = 1;
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
    this.comederos();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  comederos(): void {
    this.userService.comederos().subscribe({
      next: (v: any) => {
        this.comederosList = v.data;
      },
      error: (e) => console.log(e)
    });
  }

  details(id: number): void {
    this.router.navigate(['/home/menu/' + id])
  }

  new(){
    const dialogRef = this.dialog.open(NewComederoDialogComponent);
  }
}
