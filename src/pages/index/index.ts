import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateRegisterPage(){
    this.navCtrl.push(RegisterPage)
  }

  startApp() {
    this.navCtrl.push(HomePage);
  }

}
