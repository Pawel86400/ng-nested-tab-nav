import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor() { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter: LandingPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave: LandingPage');
  }

}
