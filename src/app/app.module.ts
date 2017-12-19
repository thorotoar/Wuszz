import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'
import { IndexPage } from '../pages/index/index';
import { RegisterPage } from '../pages/register/register';
import { SatuanPage } from '../pages/satuan/satuan';
import { KiloanPage } from '../pages/kiloan/kiloan';
import { KiloankonfirmasiPage } from '../pages/confirm/kiloankonfirmasi/kiloankonfirmasi';
import { SatuankonfirmasiPage } from '../pages/confirm/satuankonfirmasi/satuankonfirmasi';

import { FIREBASE_CREDENTIALS } from './firebase.credential';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    RegisterPage,
    SatuanPage,
    KiloanPage,
    KiloankonfirmasiPage,
    SatuankonfirmasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    RegisterPage,
    SatuanPage,
    KiloanPage,
    KiloankonfirmasiPage,
    SatuankonfirmasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
