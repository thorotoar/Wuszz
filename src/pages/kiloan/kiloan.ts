import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {KiloankonfirmasiPage} from "../confirm/kiloankonfirmasi/kiloankonfirmasi";

import { AngularFireDatabase }  from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import {Kiloan} from "../../models/kiloan/kiloan.interface";

@Component({
  selector: 'page-kiloan',
  templateUrl: 'kiloan.html',
})
export class KiloanPage {

  reqKiloan = {} as Kiloan;

  kiloanRef$: FirebaseListObservable<Kiloan[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.kiloanRef$ = this.database.list('reqKiloan');
  }

  confirmKiloan(reqKiloan: Kiloan){
    this.kiloanRef$.push({
      itemTake: this.reqKiloan.itemTake,
      itemAddress: this.reqKiloan.itemAddress,
      itemNumber: this.reqKiloan.itemNumber
    })

    this.reqKiloan = {} as Kiloan;

    this.navCtrl.push(KiloankonfirmasiPage)
  }

}
