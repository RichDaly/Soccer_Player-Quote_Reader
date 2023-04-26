import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ExtraInfoPage } from '../extra-info/extra-info';
import { RemoteProvider } from '../../providers/remote/remote';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  author: string;
  tags: string[];
  quote: string;

  data: { "country_id": string, "name": string, "country_code": string, "continent": string }[] = [];
  playerData: any[] = [];
  middleIsMessage: string;
  countryName: string;
  elementHidden: boolean = true;

  countryID: any;

  detailsEntered: boolean;
  reset: boolean;


  constructor(public navCtrl: NavController, private rp: RemoteProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.rp.getQuoteData().subscribe(json => {
      this.author = json.author;
      this.tags = json.tags;
      this.quote = json.content;
    });
    this.detailsEntered = false;
    this.reset = false;
    this.countryName = " doesn't exist";
  }

  ionViewWillEnter() {
    
    this.storage.get("detailsEntered")
      .then((val) => {
        this.detailsEntered = val;
      }).catch((error) => {
        alert("Error Accessing Storage");
      });
    this.storage.get("reset")
      .then((val) => {
        this.reset = val;
      }).catch((error) => {
        alert("Error Accessing Storage");
      });
  }

  ionViewDidEnter() {
    if (this.detailsEntered == true) {
      this.elementHidden = false;
      this.middleIsMessage = " is ";
      this.getCountryDetails();
      this.getPlayerDetails();
    }
    if (this.reset == true) {
      this.resetCountry();
    }
  }

  getCountryDetails() {
    this.storage.get("countryID")
      .then((val) => {
        this.countryID = val;
      }).catch((error) => {
        alert("Error Accessing Storage");
      });
    this.rp.getCountryId().subscribe(json => {
      this.countryName = json.data.name;
      this.data = json.data;
    });
  }

  resetCountry() {
    this.elementHidden = true;
    this.middleIsMessage = "";
    this.countryName = " doesn't exist";
    this.countryID = "";
    this.data = [];
  }

  getPlayerDetails() {
    this.rp.getPlayers().subscribe(json => {
      this.playerData = json.data;
    })
  }

  reload() {
    this.rp.getQuoteData().subscribe(json => {
      this.author = json.author;
      this.tags = json.tags;
      this.quote = json.content;
    });
  }

  pushSettings() {
    this.navCtrl.push(SettingsPage);
  }

  pushExtraInfo() {
    this.navCtrl.push(ExtraInfoPage);
  }
}
