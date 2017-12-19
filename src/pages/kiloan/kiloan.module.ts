import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KiloanPage } from './kiloan';

@NgModule({
  declarations: [
    KiloanPage,
  ],
  imports: [
    IonicPageModule.forChild(KiloanPage),
  ],
})
export class KiloanPageModule {}
