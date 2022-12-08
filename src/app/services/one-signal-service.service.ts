import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneSignalServiceService {

  constructor() { }

  async onLoad(): Promise<any> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function() {
        resolve(window.OneSignal);
      });
    });
  }
  onInit():void { 
    this.onLoad().then((OneSignal)=>{ 
      OneSignal.init({ 
        appId: '12b8d329-839f-4bfe-9b1e-bf862e646c88', 
      }); 
    }); 
  }
  
}
