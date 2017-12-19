import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../home/home';

import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import { Satuan } from '../../../models/satuan/satuan.interface'
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-satuankonfirmasi',
  templateUrl: 'satuankonfirmasi.html',
})
export class SatuankonfirmasiPage {

  reqSatuan = {} as Satuan;
  satuanRef$: FirebaseListObservable<Satuan[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.satuanRef$ = this.database.list('reqSatuan');
  }

  terimaSatuan() {
    this.navCtrl.push(HomePage);
  }

}
