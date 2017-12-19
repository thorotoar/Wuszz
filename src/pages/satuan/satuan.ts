import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase }  from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Satuan } from '../../models/satuan/satuan.interface';

import { SatuankonfirmasiPage } from '../confirm/satuankonfirmasi/satuankonfirmasi';

@Component({
  selector: 'page-satuan',
  templateUrl: 'satuan.html',
})
export class SatuanPage {

  reqSatuan = {} as Satuan;

  satuanRef$: FirebaseListObservable<Satuan[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.satuanRef$ = this.database.list('reqSatuan');

  }

  confirmSatuan(reqSatuan: Satuan){
    this.satuanRef$.push({
      itemTake: this.reqSatuan.itemTake,
      itemAddress: this.reqSatuan.itemAddress,
      itemNumber: this.reqSatuan.itemNumber,
      itemCelana: this.reqSatuan.itemCelana,
      itemBaju: this.reqSatuan.itemBaju,
      itemMukena: this.reqSatuan.itemMukena,
      itemJaket: this.reqSatuan.itemJaket,
      itemSprei: this.reqSatuan.itemSprei,
      itemLainya: this.reqSatuan.itemLainya
    })

    this.reqSatuan = {} as Satuan;

    this.navCtrl.push(SatuankonfirmasiPage)
  }

}
