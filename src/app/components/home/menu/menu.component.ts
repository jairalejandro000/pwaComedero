import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id?: number;
  params?: any;
  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.params = route.snapshot.params;
    this.id = this.params.id;
   }

  ngOnInit(): void {
  }

  info(): void{
    this.router.navigate(['/home/comedero/' + this.id])
  }

  alimentar(): void{
    this.router.navigate(['/home/alimentar/' + this.id])
  }

}
