import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CountryIdPage } from '../country-id/country-id';
import { RemoteProvider } from '../../providers/remote/remote';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  countryID: any;
  minAge: number;
  maxAge: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage, private rp: RemoteProvider,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.storage.get("countryID")
      .then((val) => {
        this.countryID = val;
      }).catch((error) => {
        alert("Error Accessing Storage");
      });
    this.storage.get("minAge")
      .then((val) => {
        this.minAge = val;
      }).catch((error) => {
        alert("Error Accessing Storage");
      });
    this.storage.get("maxAge")
      .then((val) => {
        this.maxAge = val;
      }).catch((error) => {
        alert("Error Accessing Storage");
      });
  }

  save() {
    if (this.countryID == "") {
      alert("INFO: Please enter a Country ID");
      return;
    }
    if (this.countryID < 0 || this.countryID > 132) {
      this.storage.set("countryID", this.countryID);
      this.storage.set("reset", true);
      console.log("ID was not found");
    } else {
      this.storage.set("reset", false);
    }
    this.storage.set("detailsEntered", true);
    this.storage.set("countryID", this.countryID);
    this.storage.set("minAge", this.minAge);
    this.storage.set("maxAge", this.maxAge);
    this.rp.updateCountryURL(this.countryID);
    this.rp.updatePlayerURL(this.countryID, this.minAge, this.maxAge);
    this.navCtrl.pop();
  }

  reset() {
    this.storage.set("detailsEntered", false);
    this.storage.set("reset", true);
    this.storage.set("countryID", "");
    this.storage.set("minAge", "");
    this.storage.set("maxAge", "");
    this.rp.updateCountryURL(this.countryID);
    this.rp.updatePlayerURL(this.countryID, this.minAge, this.maxAge);
    this.navCtrl.pop();
    alert("INFO: Settings have been reset.");
  }

  // https://ionicframework.com/docs/v3/components/#loading
  // https://ionicframework.com/docs/v3/api/components/loading/LoadingController/
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait loading...",
      duration: 3000
    });
    loader.present();
  }

  cancel() {
    this.navCtrl.pop();
  }

  pushCountryID() {
    this.navCtrl.push(CountryIdPage);
  }

  ngOnDestroy(){
    this.presentLoading();
  }

}
