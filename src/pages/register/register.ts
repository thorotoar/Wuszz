import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Register } from '../../models/register/register.interface';
import { AngularFireDatabase } from 'angularfire2/database';

import { IndexPage } from '../index/index';
import {FirebaseListObservable} from "angularfire2/database-deprecated";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerData = {} as Register;

  registerRef$: FirebaseListObservable<Register[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.registerRef$ = this.database.list('dataRegister');
  }

  registerApp(registerData: Register){
    this.registerRef$.push({
      profileName: this.registerData.profileName,
      profileAdress: this.registerData.profileAdress,
      profileEmail: this.registerData.profileEmail,
      profileNumber: Number(this.registerData.profileNumber),
      profilePassword: this.registerData.profilePassword
    })

    this.registerData = {} as Register;

    this.navCtrl.pop();
  }

  loginApp(){
    this.navCtrl.push(IndexPage)
  }

}
