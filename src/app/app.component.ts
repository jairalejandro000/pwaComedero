import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwaComedero';
  constructor() {
  }
  // onInit() {
  //   var OneSignal = window['OneSignal'] || [];
  //   console.log("Init OneSignal");
  //   OneSignal.push(["init", {
  //     appId: "a154900d-36a5-40e3-99f7-ed895c533552",
  //     autoRegister: false,
  //     allowLocalhostAsSecureOrigin: true,
  //     notifyButton: {
  //       enable: false
  //     }
  //   }]);
  //   console.log('OneSignal Initialized');
  //   OneSignal.push(function () {
  //     console.log('Register For Push');
  //     OneSignal.push(["registerForPushNotifications"])
  //   });
  //   // OneSignal.push(function () {
  //   //   // Occurs when the user's subscription changes to a new value.
  //   //   OneSignal.on('subscriptionChange', function (isSubscribed) {
  //   //     console.log("The user's subscription state is now:", isSubscribed);
  //   //     OneSignal.getUserId().then(function (userId) {
  //   //       console.log("User ID is", userId);
  //   //     });
  //   //   });
  //   // });
  // }
}
