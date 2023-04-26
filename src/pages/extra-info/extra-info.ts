import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteProvider } from '../../providers/remote/remote';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-extra-info',
  templateUrl: 'extra-info.html',
})
export class ExtraInfoPage {
  playerData: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private rp: RemoteProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.rp.getPlayers().subscribe(json => {
      this.playerData = json.data;
    })
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait loading...",
      duration: 2000
    });
    loader.present();
  }

}
