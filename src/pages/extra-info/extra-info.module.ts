import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtraInfoPage } from './extra-info';

@NgModule({
  declarations: [
    ExtraInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtraInfoPage),
  ],
})
export class ExtraInfoPageModule {}
