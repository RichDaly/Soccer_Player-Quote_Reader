import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryIdPage } from './country-id';

@NgModule({
  declarations: [
    CountryIdPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryIdPage),
  ],
})
export class CountryIdPageModule {}
