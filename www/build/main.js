webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_remote__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryIdPage = /** @class */ (function () {
    function CountryIdPage(navCtrl, navParams, rp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rp = rp;
        this.data = [];
    }
    CountryIdPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.rp.getCountryIdPage().subscribe(function (json) {
            _this.data = json.data;
        });
    };
    CountryIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-country-id',template:/*ion-inline-start:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\country-id\country-id.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Country ID\'s</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid border="1">\n    <ion-row *ngFor="let d of data, let i = index">\n      <ion-col>{{ data[i].name }}</ion-col>\n      <ion-col>{{ data[i].country_id }}</ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>'/*ion-inline-end:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\country-id\country-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_remote__["a" /* RemoteProvider */]])
    ], CountryIdPage);
    return CountryIdPage;
}());

//# sourceMappingURL=country-id.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_remote__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtraInfoPage = /** @class */ (function () {
    function ExtraInfoPage(navCtrl, navParams, rp, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rp = rp;
        this.loadingCtrl = loadingCtrl;
        this.playerData = [];
    }
    ExtraInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        this.rp.getPlayers().subscribe(function (json) {
            _this.playerData = json.data;
        });
    };
    ExtraInfoPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait loading...",
            duration: 2000
        });
        loader.present();
    };
    ExtraInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-extra-info',template:/*ion-inline-start:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\extra-info\extra-info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Extra Player Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let p of playerData" center>\n\n      <p><b>{{ p.firstname }} {{ p.lastname }}</b></p>\n      <p>DOB: {{ p.birthday }}</p>\n      <p>Age: {{ p.age }}</p>\n      <p>Weight: {{ p.weight }}</p>\n      <p>Height: {{ p.height }}</p>\n      <ion-thumbnail item-start>\n        <img src="{{ p.img }}" onerror="this.onerror=null; this.src=\'../../assets/imgs/default.png\'">\n      </ion-thumbnail>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\extra-info\extra-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_remote__["a" /* RemoteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ExtraInfoPage);
    return ExtraInfoPage;
}());

//# sourceMappingURL=extra-info.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_id_country_id__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_remote__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, rp, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rp = rp;
        this.loadingCtrl = loadingCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("countryID")
            .then(function (val) {
            _this.countryID = val;
        }).catch(function (error) {
            alert("Error Accessing Storage");
        });
        this.storage.get("minAge")
            .then(function (val) {
            _this.minAge = val;
        }).catch(function (error) {
            alert("Error Accessing Storage");
        });
        this.storage.get("maxAge")
            .then(function (val) {
            _this.maxAge = val;
        }).catch(function (error) {
            alert("Error Accessing Storage");
        });
    };
    SettingsPage.prototype.save = function () {
        if (this.countryID == "") {
            alert("INFO: Please enter a Country ID");
            return;
        }
        if (this.countryID < 0 || this.countryID > 132) {
            this.storage.set("countryID", this.countryID);
            this.storage.set("reset", true);
            console.log("ID was not found");
        }
        else {
            this.storage.set("reset", false);
        }
        this.storage.set("detailsEntered", true);
        this.storage.set("countryID", this.countryID);
        this.storage.set("minAge", this.minAge);
        this.storage.set("maxAge", this.maxAge);
        this.rp.updateCountryURL(this.countryID);
        this.rp.updatePlayerURL(this.countryID, this.minAge, this.maxAge);
        this.navCtrl.pop();
    };
    SettingsPage.prototype.reset = function () {
        this.storage.set("detailsEntered", false);
        this.storage.set("reset", true);
        this.storage.set("countryID", "");
        this.storage.set("minAge", "");
        this.storage.set("maxAge", "");
        this.rp.updateCountryURL(this.countryID);
        this.rp.updatePlayerURL(this.countryID, this.minAge, this.maxAge);
        this.navCtrl.pop();
        alert("INFO: Settings have been reset.");
    };
    // https://ionicframework.com/docs/v3/components/#loading
    // https://ionicframework.com/docs/v3/api/components/loading/LoadingController/
    SettingsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait loading...",
            duration: 3000
        });
        loader.present();
    };
    SettingsPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    SettingsPage.prototype.pushCountryID = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__country_id_country_id__["a" /* CountryIdPage */]);
    };
    SettingsPage.prototype.ngOnDestroy = function () {
        this.presentLoading();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n    <ion-buttons end>\n      <button ion-button outline (click)="pushCountryID()">\n        <ion-icon name="football-outline"></ion-icon>\n        Country ID\'s\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <p>Enter Country ID <input [(ngModel)]="countryID"></p>\n\n  <p>Player Ages:</p>\n\n  <p>Minimum <input [(ngModel)]="minAge"></p>\n  <p>Maximum <input [(ngModel)]="maxAge"></p>\n\n  <button ion-button (click)="save()">Save</button>\n  <button ion-button (click)="reset()">Reset</button>\n  <button ion-button (click)="cancel()">Cancel</button>\n\n</ion-content>'/*ion-inline-end:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_remote_remote__["a" /* RemoteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_remote_remote__["a" /* RemoteProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/country-id/country-id.module": [
		281,
		2
	],
	"../pages/extra-info/extra-info.module": [
		282,
		1
	],
	"../pages/settings/settings.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extra_info_extra_info__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_remote_remote__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, rp, storage) {
        this.navCtrl = navCtrl;
        this.rp = rp;
        this.storage = storage;
        this.data = [];
        this.playerData = [];
        this.elementHidden = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.rp.getQuoteData().subscribe(function (json) {
            _this.author = json.author;
            _this.tags = json.tags;
            _this.quote = json.content;
        });
        this.detailsEntered = false;
        this.reset = false;
        this.countryName = " doesn't exist";
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("detailsEntered")
            .then(function (val) {
            _this.detailsEntered = val;
        }).catch(function (error) {
            alert("Error Accessing Storage");
        });
        this.storage.get("reset")
            .then(function (val) {
            _this.reset = val;
        }).catch(function (error) {
            alert("Error Accessing Storage");
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (this.detailsEntered == true) {
            this.elementHidden = false;
            this.middleIsMessage = " is ";
            this.getCountryDetails();
            this.getPlayerDetails();
        }
        if (this.reset == true) {
            this.resetCountry();
        }
    };
    HomePage.prototype.getCountryDetails = function () {
        var _this = this;
        this.storage.get("countryID")
            .then(function (val) {
            _this.countryID = val;
        }).catch(function (error) {
            alert("Error Accessing Storage");
        });
        this.rp.getCountryId().subscribe(function (json) {
            _this.countryName = json.data.name;
            _this.data = json.data;
        });
    };
    HomePage.prototype.resetCountry = function () {
        this.elementHidden = true;
        this.middleIsMessage = "";
        this.countryName = " doesn't exist";
        this.countryID = "";
        this.data = [];
    };
    HomePage.prototype.getPlayerDetails = function () {
        var _this = this;
        this.rp.getPlayers().subscribe(function (json) {
            _this.playerData = json.data;
        });
    };
    HomePage.prototype.reload = function () {
        var _this = this;
        this.rp.getQuoteData().subscribe(function (json) {
            _this.author = json.author;
            _this.tags = json.tags;
            _this.quote = json.content;
        });
    };
    HomePage.prototype.pushSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.pushExtraInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__extra_info_extra_info__["a" /* ExtraInfoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>\n      G00246442\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button outline (click)="reload()">\n        <ion-icon name="bulb-outline"></ion-icon>New Quote\n      </button>\n      <button ion-button icon-only (click)="pushSettings()">\n        <!-- https://ionic.io/ionicons/usage, https://ionic.io/ionicons -->\n        <ion-icon name="settings-sharp"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h2>Quote from {{ author }} about:</h2>\n  <ul>\n    <li *ngFor="let tag of tags">{{ tag }}</li>\n  </ul>\n  <h3>{{ quote }}</h3>\n  <hr>\n\n  <h2>Country ID {{ countryID }}{{ middleIsMessage }}{{ countryName }}</h2>\n  <!--https://angular.io/api/common/UpperCasePipe-->\n  <img [hidden]="elementHidden" src="https://flagsapi.com/{{data.country_code | uppercase}}/shiny/64.png">\n\n  <!-- https://ionicframework.com/docs/v3/api/components/scroll/Scroll/ -->\n  <!-- https://stackoverflow.com/questions/49813846/ionic-3-scrollable-content -->\n\n  <ion-scroll scrollX="true" scrollY="true">\n    <table border="1" [hidden]="elementHidden">\n\n      <tr>\n        <th>First Name</th>\n        <th>Surname</th>\n        <th>Age</th>\n        <th>Height</th>\n      </tr>\n\n      <tr *ngFor="let p of playerData, let i = index">\n        <td>{{ playerData[i].firstname }}</td>\n        <td>{{ playerData[i].lastname }}</td>\n        <td>{{ playerData[i].age }}</td>\n        <td>{{ playerData[i].height }}</td>\n      </tr>\n\n    </table>\n  </ion-scroll>\n\n  <button ion-button [hidden]="elementHidden" (click)="pushExtraInfo()" full>Extra Player Info</button>\n\n</ion-content>'/*ion-inline-end:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_remote__["a" /* RemoteProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_remote__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_country_id_country_id__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_extra_info_extra_info__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_country_id_country_id__["a" /* CountryIdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_extra_info_extra_info__["a" /* ExtraInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/country-id/country-id.module#CountryIdPageModule', name: 'CountryIdPage', segment: 'country-id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extra-info/extra-info.module#ExtraInfoPageModule', name: 'ExtraInfoPage', segment: 'extra-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_country_id_country_id__["a" /* CountryIdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_extra_info_extra_info__["a" /* ExtraInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_remote_remote__["a" /* RemoteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\GMIT Software Development\Mobile Application Development\Ionic_WorkSpace\G00246442\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoteProvider = /** @class */ (function () {
    function RemoteProvider(http) {
        this.http = http;
    }
    RemoteProvider.prototype.getQuoteData = function () {
        return this.http.get("https://api.quotable.io/random");
    };
    RemoteProvider.prototype.updateCountryURL = function (id) {
        var urlStart = "https://app.sportdataapi.com/api/v1/soccer/countries/";
        var urlEnd = "?apikey=022af160-7704-11ed-be7d-cfcd3b6cdb8c";
        var urlComplete = urlStart.concat(id).concat(urlEnd);
        this.countryIdUrl = urlComplete;
    };
    RemoteProvider.prototype.getCountryId = function () {
        return this.http.get(this.countryIdUrl);
    };
    RemoteProvider.prototype.updatePlayerURL = function (id, min, max) {
        var urlStart = "https://app.sportdataapi.com/api/v1/soccer/players?apikey=022af160-7704-11ed-be7d-cfcd3b6cdb8c&country_id=";
        var urlMin = "";
        var urlMax = "";
        if (min >= 0) {
            urlMin = "&min_age=" + min;
        }
        if (max >= 0) {
            urlMax = "&max_age=" + max;
        }
        var urlComplete = urlStart.concat(id).concat(urlMin).concat(urlMax);
        this.playerUrl = urlComplete;
    };
    RemoteProvider.prototype.getPlayers = function () {
        return this.http.get(this.playerUrl);
    };
    RemoteProvider.prototype.getCountryIdPage = function () {
        return this.http.get("https://app.sportdataapi.com/api/v1/soccer/countries/?apikey=022af160-7704-11ed-be7d-cfcd3b6cdb8c");
    };
    RemoteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RemoteProvider);
    return RemoteProvider;
}());

//# sourceMappingURL=remote.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map