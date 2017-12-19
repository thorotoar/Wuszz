import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../home/home';

@Component({
  selector: 'page-kiloankonfirmasi',
  templateUrl: 'kiloankonfirmasi.html',
})
export class KiloankonfirmasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  terimaKiloan() {
    this.navCtrl.push(HomePage);
  }

}
