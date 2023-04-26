import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RemoteProvider } from '../providers/remote/remote';
import { SettingsPage } from '../pages/settings/settings';
import { CountryIdPage } from '../pages/country-id/country-id';
import { ExtraInfoPage } from '../pages/extra-info/extra-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    CountryIdPage,
    ExtraInfoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    CountryIdPage,
    ExtraInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteProvider
  ]
})
export class AppModule {}
