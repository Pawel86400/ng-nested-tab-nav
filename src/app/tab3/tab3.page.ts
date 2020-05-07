import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter: Tab3');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave: Tab3');
  }

}
