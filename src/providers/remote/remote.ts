import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class RemoteProvider {
  countryIdUrl: string;
  playerUrl: string;

  constructor(public http: HttpClient) {

  }

  getQuoteData(): Observable<any> {
    return this.http.get("https://api.quotable.io/random");
  }

  updateCountryURL(id: string) {
    let urlStart: string = "https://app.sportdataapi.com/api/v1/soccer/countries/";
    let urlEnd: string = "?apikey=022af160-7704-11ed-be7d-cfcd3b6cdb8c";
    let urlComplete: string = urlStart.concat(id).concat(urlEnd);
    this.countryIdUrl = urlComplete;
  }

  getCountryId(): Observable<any> {
    return this.http.get(this.countryIdUrl);
  }

  updatePlayerURL(id: string, min: number, max: number) {
    let urlStart: string = "https://app.sportdataapi.com/api/v1/soccer/players?apikey=022af160-7704-11ed-be7d-cfcd3b6cdb8c&country_id=";
    let urlMin: string = "";
    let urlMax: string = "";
    if (min >= 0) {
      urlMin = "&min_age=" + min;
    }
    if (max >= 0) {
      urlMax = "&max_age=" + max;
    }
    let urlComplete: string = urlStart.concat(id).concat(urlMin).concat(urlMax);
    this.playerUrl = urlComplete;
  }

  getPlayers(): Observable<any> {
    return this.http.get(this.playerUrl);
  }

  getCountryIdPage(): Observable<any> {
    return this.http.get("https://app.sportdataapi.com/api/v1/soccer/countries/?apikey=022af160-7704-11ed-be7d-cfcd3b6cdb8c");
  }
}
