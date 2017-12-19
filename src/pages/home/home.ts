import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { IndexPage } from '../index/index';
import { SatuanPage } from '../satuan/satuan';
import { KiloanPage } from '../kiloan/kiloan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      image: "assets/imgs/pict/p1.jpg",
    },
    {
      image: "assets/imgs/pict/p2.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }

  orderSatuan() {
    this.navCtrl.push(SatuanPage);
  }

  orderKiloan() {
    this.navCtrl.push(KiloanPage);
  }

  quitApp() {
    this.navCtrl.push(IndexPage);
  }

  showLongToast() {
    let alert = this.alerCtrl.create({
      title: 'Ketentuan Loundry!',
      message: 'Laundry akan diantar setelah 4 hari pengerjaan!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
