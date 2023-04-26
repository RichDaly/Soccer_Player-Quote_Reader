import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteProvider } from '../../providers/remote/remote';

@IonicPage()
@Component({
  selector: 'page-country-id',
  templateUrl: 'country-id.html',
})
export class CountryIdPage {
  data: {"country_id": string, "name": string}[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private rp: RemoteProvider) {
  }

  ionViewDidLoad() {
    this.rp.getCountryIdPage().subscribe(json => {
      this.data = json.data;
    });
  }

}
