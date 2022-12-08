import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id?: number;
  params?: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private os: OneSignal) {
    this.params = route.snapshot.params;
    this.id = this.params.id;
   }

  ngOnInit(): void {
    this.os.on('subscriptionChange', function(isSubscribed) {
      console.log("The user's subscription state is now:", isSubscribed);
    });
  }

  info(): void{
    this.router.navigate(['/home/comedero/' + this.id])
  }

  alimentar(): void{
    this.router.navigate(['/home/alimentar/' + this.id])
  }
  
  onHandleTag(tag: any) {
    console.log('Tagging');
    this.os.sendTag("tech", tag).then(() => {
      console.log("Sent tag: " + tag);
    });
  }

}
