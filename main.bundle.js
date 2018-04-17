webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(afAuth, db) {
        this.afAuth = afAuth;
        this.title = 'app';
        this.afAuth.auth.signInAnonymously();
        this.user = this.afAuth.authState;
        this.items = db.collection('items').valueChanges();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_toolbar_main_toolbar_component__ = __webpack_require__("../../../../../src/app/main-toolbar/main-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_sidenav_main_sidenav_component__ = __webpack_require__("../../../../../src/app/main-sidenav/main-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__events_list_page_events_list_page_component__ = __webpack_require__("../../../../../src/app/events-list-page/events-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_events_owned_page_user_events_owned_page_component__ = __webpack_require__("../../../../../src/app/user-events-owned-page/user-events-owned-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_events_joined_page_user_events_joined_page_component__ = __webpack_require__("../../../../../src/app/user-events-joined-page/user-events-joined-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_profile_page_user_profile_page_component__ = __webpack_require__("../../../../../src/app/user-profile-page/user-profile-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_page_event_page_component__ = __webpack_require__("../../../../../src/app/event-page/event-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__create_event_page_create_event_page_component__ = __webpack_require__("../../../../../src/app/create-event-page/create-event-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modal_alert_content_modal_alert_content_component__ = __webpack_require__("../../../../../src/app/modal-alert-content/modal-alert-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_modal_service__ = __webpack_require__("../../../../../src/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__("../../../../../src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__create_event_button_create_event_button_component__ = __webpack_require__("../../../../../src/app/create-event-button/create-event-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__event_listing_event_listing_component__ = __webpack_require__("../../../../../src/app/event-listing/event-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__ = __webpack_require__("../../../../../src/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_adsense__ = __webpack_require__("../../../../ng2-adsense/esm5/ng2-adsense.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'page', component: __WEBPACK_IMPORTED_MODULE_3__main_toolbar_main_toolbar_component__["a" /* MainToolbarComponent */],
        children: [
            { path: '', redirectTo: 'events', pathMatch: 'full' },
            { path: 'events', redirectTo: 'events/list', pathMatch: 'full' },
            { path: 'events/list', component: __WEBPACK_IMPORTED_MODULE_10__events_list_page_events_list_page_component__["a" /* EventsListPageComponent */] },
            { path: 'events/create', component: __WEBPACK_IMPORTED_MODULE_15__create_event_page_create_event_page_component__["a" /* CreateEventPageComponent */] },
            { path: 'events/:id', component: __WEBPACK_IMPORTED_MODULE_14__event_page_event_page_component__["a" /* EventPageComponent */] },
            { path: 'user/events', redirectTo: 'user/events/owned', pathMatch: 'full' },
            { path: 'user/events/owned', component: __WEBPACK_IMPORTED_MODULE_11__user_events_owned_page_user_events_owned_page_component__["a" /* UserEventsOwnedPageComponent */] },
            { path: 'user/events/joined', component: __WEBPACK_IMPORTED_MODULE_12__user_events_joined_page_user_events_joined_page_component__["a" /* UserEventsJoinedPageComponent */] },
            { path: 'user/profile', component: __WEBPACK_IMPORTED_MODULE_13__user_profile_page_user_profile_page_component__["a" /* UserProfilePageComponent */] }
        ] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_3__main_toolbar_main_toolbar_component__["a" /* MainToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_sidenav_main_sidenav_component__["a" /* MainSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modal_alert_content_modal_alert_content_component__["a" /* ModalAlertContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__events_list_page_events_list_page_component__["a" /* EventsListPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_events_owned_page_user_events_owned_page_component__["a" /* UserEventsOwnedPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_events_joined_page_user_events_joined_page_component__["a" /* UserEventsJoinedPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_profile_page_user_profile_page_component__["a" /* UserProfilePageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__event_page_event_page_component__["a" /* EventPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__create_event_page_create_event_page_component__["a" /* CreateEventPageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__create_event_button_create_event_button_component__["a" /* CreateEventButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__event_listing_event_listing_component__["a" /* EventListingComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__modal_alert_content_modal_alert_content_component__["a" /* ModalAlertContentComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_34_ng2_adsense__["a" /* AdsenseModule */].forRoot({
                    adClient: 'ca-pub-6702912321418369',
                    adSlot: 7259870550,
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_23__services_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_20__services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_33__interceptors_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-event-button/create-event-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-event-button/create-event-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-fab id=\"button-open-create-event-modal\" color=\"primary\" (click)=\"openCreateEventModal()\">\n  <mat-icon aria-label=\"Create New Event\">add</mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/create-event-button/create-event-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_event_page_create_event_page_component__ = __webpack_require__("../../../../../src/app/create-event-page/create-event-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_service__ = __webpack_require__("../../../../../src/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventButtonComponent = (function () {
    function CreateEventButtonComponent(modalService) {
        this.modalService = modalService;
    }
    CreateEventButtonComponent.prototype.openCreateEventModal = function () {
        var _this = this;
        this.modalService.openModal(__WEBPACK_IMPORTED_MODULE_1__create_event_page_create_event_page_component__["a" /* CreateEventPageComponent */], {}, function () {
            if (_this.onClose) {
                _this.onClose();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Function)
    ], CreateEventButtonComponent.prototype, "onClose", void 0);
    CreateEventButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-event-button',
            template: __webpack_require__("../../../../../src/app/create-event-button/create-event-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-event-button/create-event-button.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalService */]])
    ], CreateEventButtonComponent);
    return CreateEventButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-event-page/create-event-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .create-event-change-contact-checkbox .mat-checkbox-layout {\r\n  margin-bottom: 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-event-page/create-event-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-title\">Create a New Event</h2>\r\n<form>\r\n  <mat-form-field class=\"create-event-name-field\">\r\n    <input matInput required placeholder=\"Event Name\" type=\"text\" title=\"name\" name=\"name\" [(ngModel)]=\"name\">\r\n    <mat-error>Please enter a name.</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"create-event-date-field\">\r\n    <input matInput required [matDatepicker]=\"picker\" placeholder=\"Event Date\" title=\"date\" name=\"date\"\r\n           [formControl]=\"date\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n    <mat-error>Please enter a valid date.</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"create-event-time-field\">\r\n    <input matInput required placeholder=\"Event Time\" type=\"time\"  title=\"time\" name=\"time\" [formControl]=\"time\">\r\n    <mat-icon matSuffix>access_time</mat-icon>\r\n    <mat-error>Please enter a time.</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"create-event-description-field\">\r\n    <textarea matInput placeholder=\"Event Description\" type=\"text\" title=\"description\" name=\"description\"\r\n              [(ngModel)]=\"description\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"create-event-location-field\">\r\n    <mat-select placeholder=\"Event Location\" title=\"location\" [formControl]=\"location\">\r\n      <mat-option *ngFor=\"let location of PREDEFINED_EVENT_LOCATIONS\" [value]=\"location\">\r\n        {{location.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-error>Please select a location.</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-checkbox #changeContactBox class=\"create-event-change-contact-checkbox\" color=\"primary\">\r\n    Change Contact Email\r\n  </mat-checkbox>\r\n\r\n  <mat-form-field class=\"create-event-alternate-email-field\" *ngIf=\"changeContactBox.checked\">\r\n    <input matInput placeholder=\"Alternate Email\" type=\"text\" title=\"alternate-email\" name=\"alternate-email\"\r\n           [(ngModel)]=\"alternateEmail\">\r\n    <mat-error>Please enter an alternate email address.</mat-error>\r\n  </mat-form-field>\r\n\r\n  <div [ngStyle]=\"isInModal ? {'float': 'right'} : {}\">\r\n    <button mat-raised-button class=\"button-cancel-create-event\" *ngIf=\"isInModal\" (click)=\"closeModal()\">Cancel</button>\r\n    <button mat-raised-button class=\"button-create-event\" color=\"primary\" (click)=\"onSubmit()\">Submit</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/create-event-page/create-event-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("../../../../../src/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEventPageComponent = (function () {
    function CreateEventPageComponent(authService, eventService, modalService) {
        this.authService = authService;
        this.eventService = eventService;
        this.modalService = modalService;
        this.PREDEFINED_EVENT_LOCATIONS = __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */].PREDEFINED_EVENT_LOCATIONS;
        this.date = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](new Date());
        this.time = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('12:00');
        this.location = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    CreateEventPageComponent.prototype.ngOnInit = function () {
        this.isInModal = this.modalService.modelIsOpened();
    };
    CreateEventPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.name && this.date.valid && this.time.valid && this.location.valid) {
            var dateTime = new Date(this.date.value.getFullYear() + '/' + (this.date.value.getMonth() + 1) + '/'
                + this.date.value.getDate() + ' ' + this.time.value);
            this.eventService.postEvent({ name: this.name, date: dateTime, description: this.description, location: this.location.value,
                contactEmail: this.alternateEmail, ownerId: __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */].getUserId(), participantIds: [] }, function (value) {
                _this.modalService.closeTopModal();
                _this.modalService.openAlertModal('Successfully Created Event!', 'Your new event, \"' + _this.name
                    + '\" was created.');
            }, function (error) {
                _this.modalService.openAlertModal('Failed to Create New Event', 'Your new event, \"' + _this.name
                    + '\" could not be created.');
            });
        }
    };
    CreateEventPageComponent.prototype.closeModal = function () {
        this.modalService.closeTopModal();
    };
    CreateEventPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-event-page',
            template: __webpack_require__("../../../../../src/app/create-event-page/create-event-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-event-page/create-event-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */]])
    ], CreateEventPageComponent);
    return CreateEventPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event-listing/event-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".events-list-item {\r\n  height: auto;\r\n  color: gray;\r\n}\r\n\r\n.events-list-item-col1 {\r\n  width: 70%;\r\n}\r\n\r\n.events-list-item-col2 {\r\n  width: 30%;\r\n  height: 100%;\r\n}\r\n\r\n.events-list-name {\r\n  color: black;\r\n}\r\n\r\n.events-list-name,\r\n.events-list-people {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.events-list-people,\r\n.events-list-date {\r\n  margin-left: auto;\r\n  text-align: right;\r\n}\r\n\r\n.events-list-item {\r\n  padding: 20px 0 20px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-listing/event-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list-item class=\"events-list-item\" *ngIf=\"event\" (click)=\"goToEventPage()\">\n  <div class=\"events-list-item-col1\">\n    <div class=\"events-list-name\">{{event?.name}}</div>\n    <div class=\"events-list-location\">{{event?.location?.name}}</div>\n  </div>\n  <div class=\"events-list-item-col2\">\n    <div class=\"events-list-people\">{{getNumberAttending()}} RSVP'd</div>\n    <div class=\"events-list-date\">{{getFormattedDate()}}</div>\n  </div>\n</mat-list-item>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "../../../../../src/app/event-listing/event-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_event__ = __webpack_require__("../../../../../src/model/event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventListingComponent = (function () {
    function EventListingComponent(navigationService) {
        this.navigationService = navigationService;
    }
    EventListingComponent.prototype.goToEventPage = function () {
        if (this.eventId) {
            this.navigationService.navigateAndSave("/page/events/" + this.eventId);
        }
    };
    EventListingComponent.prototype.getFormattedDate = function () {
        if (this.event && this.event.date) {
            return __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */].formatDateTimeShort(this.event.date);
        }
        else {
            return '';
        }
    };
    EventListingComponent.prototype.getNumberAttending = function () {
        if (this.event && this.event.participantIds) {
            return Object.keys(this.event.participantIds).length;
        }
        else {
            return 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EventListingComponent.prototype, "eventId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__model_event__["a" /* Event */])
    ], EventListingComponent.prototype, "event", void 0);
    EventListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-listing',
            template: __webpack_require__("../../../../../src/app/event-listing/event-listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event-listing/event-listing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]])
    ], EventListingComponent);
    return EventListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event-page/event-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".event-title {\r\n  font-size: 18pt;\r\n  margin-bottom: 4px !important;\r\n}\r\n\r\n.event-body {\r\n  margin-top: 4px !important;\r\n}\r\n\r\n.event-owner {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.event-location {\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.event-date-time {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.event-participants {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.event-buttons button,\r\n.event-buttons .mat-raised-button {\r\n  display: block;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.left-event-buttons {\r\n  float: left;\r\n}\r\n\r\n.right-event-buttons {\r\n  float: right;\r\n}\r\n\r\n.right-event-buttons button,\r\n.right-event-buttons .mat-raised-button {\r\n  margin-left: auto;\r\n}\r\n\r\n.button-delete-event {\r\n  color: white;\r\n  background-color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-page/event-page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-adsense></ng-adsense>\r\n<mat-progress-spinner class=\"loading-spinner\" *ngIf=\"loading\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n</mat-progress-spinner>\r\n<h2 class=\"event-title mat-title\">{{event?.name}}</h2>\r\n<div class=\"event-body mat-body-1\" *ngIf=\"event && owner\">\r\n  <p class=\"event-owner\">{{owner?.displayName}} <span style=\"color: #bbbbbb\">Organizer</span></p>\r\n  <p class=\"event-location\">{{event?.location?.name}}</p>\r\n  <p class=\"event-date-time\">{{formattedDateTime}}</p>\r\n  <p class=\"event-description\">{{event?.description}}</p>\r\n  <p class=\"event-participants\"><b>Participants: </b>\r\n    <span *ngIf=\"!participants || participants.length <= 0\">\r\n      (none)\r\n    </span>\r\n    <span *ngIf=\"participants && participants.length > 0\">\r\n      <span *ngFor=\"let p of participants; let i = index\"><span *ngIf=\"i !== 0\">, </span>{{p.displayName}}</span>\r\n    </span>\r\n  </p>\r\n  <div class=\"event-buttons\">\r\n    <div class=\"left-event-buttons\">\r\n      <a mat-raised-button class=\"button-contact-event-owner\"\r\n         href=\"mailto:{{owner?.email ? owner.email : event?.contactEmail}}\">\r\n        Contact Organizer\r\n      </a>\r\n      <a mat-raised-button class=\"button-open-event-map\"\r\n         href=\"https://www.google.com/maps/?q={{event?.location?.longitude}},{{event?.location?.latitude}}\">\r\n        Open in Maps\r\n      </a>\r\n    </div>\r\n    <div class=\"right-event-buttons\">\r\n      <button mat-raised-button class=\"button-join-event\" color=\"primary\" *ngIf=\"!isParticipant()\"\r\n              (click)=\"joinEvent()\">\r\n        RSVP\r\n      </button>\r\n      <button mat-raised-button class=\"button-leave-event\" color=\"primary\" *ngIf=\"isParticipant()\"\r\n              (click)=\"leaveEvent()\">\r\n        Remove RSVP\r\n      </button>\r\n      <button mat-raised-button class=\"button-delete-event\" *ngIf=\"isOwner()\" (click)=\"deleteEvent()\">\r\n        Delete\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/event-page/event-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__("../../../../../src/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventPageComponent = (function () {
    function EventPageComponent(navigationService, modalService, authService, eventService, userService, activatedRoute) {
        this.navigationService = navigationService;
        this.modalService = modalService;
        this.authService = authService;
        this.eventService = eventService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.loading = false;
    }
    EventPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.setTitle(__WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */].EVENT_TITLE);
        this.activatedRoute.params.subscribe(function (params) {
            _this.eventId = params['id'];
            _this.getEvent();
        });
    };
    EventPageComponent.prototype.getEvent = function () {
        var _this = this;
        if (!this.eventId) {
            return;
        }
        this.loading = true;
        this.eventService.getEvent(this.eventId).subscribe(function (event) {
            _this.loading = false;
            if (event) {
                event.date = __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */].stringToDate(event.date.toString());
                _this.event = event;
                _this.formattedDateTime = __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */].formatDateTime(event.date);
                if (event.ownerId) {
                    _this.userService.getUser(event.ownerId).subscribe(function (owner) {
                        _this.owner = owner;
                        _this.setOwnerEventKey(owner);
                    });
                }
                if (event.participantIds) {
                    _this.participantIds = Object.keys(event.participantIds).map(function (key) { return event.participantIds[key]; });
                    _this.userService.getUsers(_this.participantIds).subscribe(function (participants) { return _this.participants = participants; });
                }
                else {
                    _this.participantIds = [];
                    _this.participants = [];
                }
            }
        }, function (error) {
            if (error.status === 401 || error.status === 403) {
                _this.navigationService.navigateToRoot();
            }
            _this.loading = false;
        });
    };
    EventPageComponent.prototype.setOwnerEventKey = function (owner) {
        if (owner.ownedEventIds) {
            for (var _i = 0, _a = Object.keys(owner.ownedEventIds); _i < _a.length; _i++) {
                var key = _a[_i];
                if (owner.ownedEventIds[key] === this.eventId) {
                    this.ownerEventKey = key;
                }
            }
        }
    };
    EventPageComponent.prototype.isOwner = function () {
        return this.event && this.event.ownerId === __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */].getUserId();
    };
    EventPageComponent.prototype.isParticipant = function () {
        return this.participantIds && this.participantIds.includes(__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */].getUserId());
    };
    EventPageComponent.prototype.joinEvent = function () {
        var _this = this;
        this.eventService.joinEvent(this.eventId).subscribe(function (value) { return _this.getEvent(); });
    };
    EventPageComponent.prototype.deleteEvent = function () {
        var _this = this;
        this.eventService.deleteEvent(this.eventId, this.ownerEventKey).subscribe(function (value) {
            var message = "Your event, " + _this.event.name + " has successfully been deleted.";
            _this.modalService.openAlertModal('Successfully Deleted Event', message, function () {
                if (_this.navigationService.canReturn()) {
                    _this.navigationService.return();
                }
                else {
                    _this.navigationService.navigate('/page/user/events/owned');
                }
            });
        }, function (error) {
            _this.modalService.openAlertModal('Failed to Delete Event');
        });
    };
    EventPageComponent.prototype.leaveEvent = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            var userId = __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */].getUserId();
            var participantKey;
            var joinedEventKey;
            if (_this.event && _this.event.participantIds) {
                for (var _i = 0, _a = Object.keys(_this.event.participantIds); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (_this.event.participantIds[key] === userId) {
                        participantKey = key;
                    }
                }
            }
            if (user && user.joinedEventIds) {
                for (var _b = 0, _c = Object.keys(user.joinedEventIds); _b < _c.length; _b++) {
                    var key = _c[_b];
                    if (user.joinedEventIds[key] === _this.eventId) {
                        joinedEventKey = key;
                    }
                }
            }
            _this.eventService.leaveEvent(_this.eventId, participantKey, joinedEventKey).subscribe(function (value) { return _this.getEvent(); });
        });
    };
    EventPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-page',
            template: __webpack_require__("../../../../../src/app/event-page/event-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event-page/event-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventPageComponent);
    return EventPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/events-list-page/events-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#events-list {\r\n  margin-bottom: 96px;\r\n}\r\n\r\n#events-list-location-filter {\r\n  width: auto;\r\n  margin: 16px 16px 0 16px;\r\n  padding: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events-list-page/events-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field id=\"events-list-location-filter\">\r\n  <mat-select placeholder=\"Filter By Location\">\r\n    <mat-option *ngFor=\"let location of PREDEFINED_EVENT_LOCATIONS\" [value]=\"location.name\"\r\n                (click)=\"loadEvents(location.name)\">\r\n      {{location.name}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<ng-adsense></ng-adsense>\r\n\r\n<mat-progress-spinner class=\"loading-spinner\" *ngIf=\"loading\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n</mat-progress-spinner>\r\n<p class=\"mat-body-1\" *ngIf=\"!events && !loading\">No Events Available</p>\r\n\r\n<mat-nav-list id=\"events-list\" *ngIf=\"events\">\r\n  <mat-divider></mat-divider>\r\n  <app-event-listing *ngFor=\"let event of events; let i = index\" [eventId]=\"eventIds[i]\" [event]=\"event\">\r\n  </app-event-listing>\r\n</mat-nav-list>\r\n<app-create-event-button [onClose]=\"loadEventsRef\"></app-create-event-button>\r\n"

/***/ }),

/***/ "../../../../../src/app/events-list-page/events-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsListPageComponent = (function () {
    function EventsListPageComponent(navigationService, eventService) {
        var _this = this;
        this.navigationService = navigationService;
        this.eventService = eventService;
        this.PREDEFINED_EVENT_LOCATIONS = __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */].PREDEFINED_EVENT_LOCATIONS;
        this.loading = false;
        this.loadEventsRef = function () { return _this.loadEvents(); };
    }
    EventsListPageComponent.prototype.ngOnInit = function () {
        this.navigationService.setTitle(__WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */].EVENTS_LIST_TITLE);
        this.loadEvents();
    };
    EventsListPageComponent.prototype.loadEvents = function (location) {
        var _this = this;
        this.loading = true;
        this.eventService.getAllEvents(location).subscribe(function (events) {
            if (events) {
                _this.eventIds = Object.keys(events);
                _this.events = Object.keys(events).map(function (key) { return events[key]; });
                __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */].formatEventDates(_this.events);
            }
            _this.loading = false;
        }, function (error) {
            if (error.status === 401 || error.status === 403) {
                _this.navigationService.navigateToRoot();
            }
            _this.loading = false;
        });
    };
    EventsListPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events-list-page',
            template: __webpack_require__("../../../../../src/app/events-list-page/events-list-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events-list-page/events-list-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]])
    ], EventsListPageComponent);
    return EventsListPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\r\n  margin-top: 100px;\r\n}\r\n\r\n.login-container .mat-raised-button {\r\n  display: block;\r\n  width: 200px;\r\n  margin: 20px auto 20px auto;\r\n}\r\n\r\n.login-container .mat-raised-button img {\r\n  height: 20px;\r\n  margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"main-toolbar\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>Popup Games</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"login-container\">\r\n  <button mat-raised-button *ngIf=\"!loading\" type=\"button\" color=\"primary\" (click)=\"loginFB()\">\r\n    <img class=\"img\" src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg\" />\r\n    Sign in with Facebook\r\n  </button>\r\n  <button mat-raised-button *ngIf=\"!loading\" type=\"button\" (click)=\"loginGG()\">\r\n    <img class=\"img\" src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg\" />\r\n    Sign in with Google\r\n  </button>\r\n\r\n  <mat-progress-spinner class=\"loading-spinner\" *ngIf=\"loading\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n  </mat-progress-spinner>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(navigationService, authService) {
        this.navigationService = navigationService;
        this.authService = authService;
        this.loading = false;
    }
    LoginPageComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */].isLoggedIn()) {
            this.authService.getUser().subscribe(function (value) {
                if (value) {
                    _this.navigationService.navigateToLandingPage();
                }
            });
        }
    };
    LoginPageComponent.prototype.loginFB = function () {
        var _this = this;
        this.loading = true;
        this.authService.signInFB().then(function (success) {
            if (success) {
                _this.navigationService.navigateToLandingPage();
                _this.loading = false;
            }
            else {
                console.log('login Failed!');
                _this.loading = false;
            }
        }).catch(function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    LoginPageComponent.prototype.loginGG = function () {
        var _this = this;
        this.loading = true;
        this.authService.signInGG().then(function (success) {
            if (success) {
                _this.navigationService.navigateToLandingPage();
                _this.loading = false;
            }
            else {
                _this.loading = false;
                console.log('login Failed!');
            }
        }).catch(function (err) {
            _this.loading = false;
            console.log(err);
        });
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-sidenav/main-sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-sidenav-container {\r\n  -ms-flex: 1;\r\n      flex: 1;\r\n}\r\n\r\n#main-sidenav .mat-nav-list a {\r\n  padding-right: 100px;\r\n}\r\n\r\n#main-sidenav .mat-nav-list {\r\n  padding: 0;\r\n}\r\n\r\n#main-sidenav .mat-nav-list a:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n#main-sidenav .mat-nav-list .mat-icon {\r\n  padding-right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-sidenav/main-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container id=\"main-sidenav-container\">\r\n  <mat-sidenav id=\"main-sidenav\" mode=\"over\">\r\n    <mat-nav-list  (click)=\"close()\">\r\n      <a mat-list-item routerLink=\"/page/events/list\">\r\n        <mat-icon>search</mat-icon>\r\n        {{navigationServiceClass.EVENTS_LIST_TITLE}}\r\n      </a>\r\n      <a mat-list-item routerLink=\"/page/user/events/joined\">\r\n        <mat-icon>event_available</mat-icon>\r\n        {{navigationServiceClass.USER_EVENTS_JOINED_TITLE}}\r\n      </a>\r\n      <a mat-list-item routerLink=\"/page/user/events/owned\">\r\n        <mat-icon>event</mat-icon>\r\n        {{navigationServiceClass.USER_EVENTS_OWNED_TITLE}}\r\n      </a>\r\n      <a mat-list-item routerLink=\"/page/user/profile\">\r\n        <mat-icon>person</mat-icon>\r\n        {{navigationServiceClass.USER_PROFILE_TITLE}}\r\n      </a>\r\n      <a mat-list-item (click)=\"signOut()\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        Sign Out\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content id=\"main-content-container\">\r\n    <div id=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-sidenav/main-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainSidenavComponent = (function () {
    function MainSidenavComponent(navigationService, authService) {
        this.navigationService = navigationService;
        this.authService = authService;
        this.navigationServiceClass = __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */];
    }
    MainSidenavComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    MainSidenavComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    MainSidenavComponent.prototype.toggle = function () {
        return this.sidenav.toggle();
    };
    MainSidenavComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().then(function () { return _this.navigationService.navigate('login'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenav */])
    ], MainSidenavComponent.prototype, "sidenav", void 0);
    MainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-sidenav',
            template: __webpack_require__("../../../../../src/app/main-sidenav/main-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-sidenav/main-sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], MainSidenavComponent);
    return MainSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-toolbar/main-toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#main-toolbar {\r\n  z-index: 2;\r\n}\r\n\r\n#main-toolbar .mat-icon {\r\n  margin-right: 20px;\r\n  height: auto;\r\n  width: auto;\r\n  cursor: pointer;\r\n}\r\n\r\napp-main-sidenav {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex: 1;\r\n      flex: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-toolbar/main-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <mat-toolbar id=\"main-toolbar\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n      <mat-icon id=\"menu-button\" *ngIf=\"!canReturn()\" (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n      <mat-icon id=\"back-button\" *ngIf=\"canReturn()\" (click)=\"return()\">arrow_back</mat-icon>\r\n      <span>{{getTitle()}}</span>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n    <app-main-sidenav #sidenav></app-main-sidenav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-toolbar/main-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainToolbarComponent = (function () {
    function MainToolbarComponent(navigationService) {
        this.navigationService = navigationService;
    }
    MainToolbarComponent.prototype.getTitle = function () {
        return this.navigationService.getTitle();
    };
    MainToolbarComponent.prototype.canReturn = function () {
        return this.navigationService.canReturn();
    };
    MainToolbarComponent.prototype.return = function () {
        this.navigationService.return();
    };
    MainToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-toolbar',
            template: __webpack_require__("../../../../../src/app/main-toolbar/main-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-toolbar/main-toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]])
    ], MainToolbarComponent);
    return MainToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal-alert-content/modal-alert-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-modal-ok-button {\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal-alert-content/modal-alert-content.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"mat-title\">{{data.title}}</h2>\r\n<p class=\"mat-body-1\">{{data.message}}</p>\r\n<div mat-dialog-actions class=\"alert-modal-actions\">\r\n  <button mat-raised-button class=\"alert-modal-ok-button\" color=\"primary\" (click)=\"onOkClicked()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modal-alert-content/modal-alert-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAlertContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModalAlertContentComponent = (function () {
    function ModalAlertContentComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModalAlertContentComponent.prototype.onOkClicked = function () {
        this.dialogRef.close();
    };
    ModalAlertContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal-alert-content',
            template: __webpack_require__("../../../../../src/app/modal-alert-content/modal-alert-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal-alert-content/modal-alert-content.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], ModalAlertContentComponent);
    return ModalAlertContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found-page/not-found-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\r\n  margin: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found-page/not-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-adsense></ng-adsense>\r\n\r\n<mat-toolbar id=\"main-toolbar\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>Popup Games</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-card>\r\n  <mat-card-title>Page Not Found</mat-card-title>\r\n  <mat-card-content>The page, \"{{this.url}}\" could not be found! ¯\\_(ツ)_/¯</mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/not-found-page/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
        this.url = window.location.href;
    };
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-events-joined-page/user-events-joined-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-events-joined-page/user-events-joined-page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-adsense></ng-adsense>\r\n\r\n<mat-progress-spinner class=\"loading-spinner\" *ngIf=\"loading\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n</mat-progress-spinner>\r\n\r\n<p class=\"mat-body-1\" *ngIf=\"!events && !loading\">You have not joined any events.</p>\r\n\r\n<mat-nav-list id=\"events-joined-list\" *ngIf=\"events\">\r\n  <mat-divider></mat-divider>\r\n  <app-event-listing *ngFor=\"let event of events; let i = index\" [eventId]=\"eventIds[i]\" [event]=\"event\">\r\n  </app-event-listing>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-events-joined-page/user-events-joined-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEventsJoinedPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEventsJoinedPageComponent = (function () {
    function UserEventsJoinedPageComponent(navigationService, authService, eventService) {
        this.navigationService = navigationService;
        this.authService = authService;
        this.eventService = eventService;
        this.loading = false;
    }
    UserEventsJoinedPageComponent.prototype.ngOnInit = function () {
        this.navigationService.setTitle(__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */].USER_EVENTS_JOINED_TITLE);
        this.loadUserJoinedEvents();
    };
    UserEventsJoinedPageComponent.prototype.loadUserJoinedEvents = function () {
        var _this = this;
        this.loading = true;
        this.authService.getUser().subscribe(function (user) {
            if (user && user.joinedEventIds) {
                _this.eventIds = Object.keys(user.joinedEventIds).map(function (key) { return user.joinedEventIds[key]; });
                _this.eventService.getEvents(_this.eventIds).subscribe(function (events) {
                    _this.loading = false;
                    _this.events = events;
                    __WEBPACK_IMPORTED_MODULE_3__services_event_service__["a" /* EventService */].formatEventDates(_this.events);
                });
            }
            else {
                _this.loading = false;
            }
        }, function (error) {
            if (error.status === 401 || error.status === 403) {
                _this.navigationService.navigateToRoot();
            }
            _this.loading = false;
        });
    };
    UserEventsJoinedPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-events-joined-page',
            template: __webpack_require__("../../../../../src/app/user-events-joined-page/user-events-joined-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-events-joined-page/user-events-joined-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_event_service__["a" /* EventService */]])
    ], UserEventsJoinedPageComponent);
    return UserEventsJoinedPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-events-owned-page/user-events-owned-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#events-owned-list {\r\n  margin-bottom: 96px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-events-owned-page/user-events-owned-page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-adsense></ng-adsense>\r\n\r\n<mat-progress-spinner class=\"loading-spinner\" *ngIf=\"loading\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n</mat-progress-spinner>\r\n\r\n<p class=\"mat-body-1\" *ngIf=\"!events && !loading\">You don't have any active events.</p>\r\n\r\n<mat-nav-list id=\"events-owned-list\" *ngIf=\"events\">\r\n  <mat-divider></mat-divider>\r\n  <app-event-listing *ngFor=\"let event of events; let i = index\" [eventId]=\"eventIds[i]\" [event]=\"event\">\r\n  </app-event-listing>\r\n</mat-nav-list>\r\n<app-create-event-button [onClose]=\"loadUserOwnedEventsRef\"></app-create-event-button>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-events-owned-page/user-events-owned-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEventsOwnedPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("../../../../../src/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("../../../../../src/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEventsOwnedPageComponent = (function () {
    function UserEventsOwnedPageComponent(navigationService, modalService, authService, eventService) {
        var _this = this;
        this.navigationService = navigationService;
        this.modalService = modalService;
        this.authService = authService;
        this.eventService = eventService;
        this.loading = false;
        this.loadUserOwnedEventsRef = function () { return _this.loadUserOwnedEvents(); };
    }
    UserEventsOwnedPageComponent.prototype.ngOnInit = function () {
        this.navigationService.setTitle(__WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */].USER_EVENTS_OWNED_TITLE);
        this.loadUserOwnedEvents();
    };
    UserEventsOwnedPageComponent.prototype.loadUserOwnedEvents = function () {
        var _this = this;
        this.loading = true;
        this.authService.getUser().subscribe(function (user) {
            if (user && user.ownedEventIds) {
                _this.eventIds = Object.keys(user.ownedEventIds).map(function (key) { return user.ownedEventIds[key]; });
                _this.eventService.getEvents(_this.eventIds).subscribe(function (events) {
                    _this.events = events;
                    __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */].formatEventDates(_this.events);
                    _this.loading = false;
                });
            }
            else {
                _this.loading = false;
            }
        }, function (error) {
            if (error.status === 401 || error.status === 403) {
                _this.navigationService.navigateToRoot();
            }
            _this.loading = false;
        });
    };
    UserEventsOwnedPageComponent.prototype.goToEventPage = function (index) {
        this.navigationService.navigateAndSave("/page/events/" + this.eventIds[index]);
    };
    UserEventsOwnedPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-events-owned-page',
            template: __webpack_require__("../../../../../src/app/user-events-owned-page/user-events-owned-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-events-owned-page/user-events-owned-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]])
    ], UserEventsOwnedPageComponent);
    return UserEventsOwnedPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-profile-page/user-profile-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-info {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.profile-image {\r\n  margin: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.profile-image img {\r\n  width: 50%;\r\n  max-width: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile-page/user-profile-page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-adsense></ng-adsense>\r\n<mat-progress-spinner class=\"loading-spinner\" *ngIf=\"loading\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n</mat-progress-spinner>\r\n<div class=\"profile-image\">\r\n  <img src=\"{{user?.photoURL}}\" />\r\n</div>\r\n<div class=\"profile-info mat-body-1\" *ngIf=\"user\">\r\n  <p><b>Name:</b> {{user?.displayName}}</p>\r\n  <p><b>Email:</b> {{user?.email}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-profile-page/user-profile-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfilePageComponent = (function () {
    function UserProfilePageComponent(navigationService, authService) {
        this.navigationService = navigationService;
        this.authService = authService;
        this.loading = false;
    }
    UserProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.navigationService.setTitle(__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */].USER_PROFILE_TITLE);
        this.authService.getUser().subscribe(function (value) {
            _this.user = value;
            _this.loading = false;
        }, function (error) {
            if (error.status === 401 || error.status === 403) {
                _this.navigationService.navigateToRoot();
            }
            _this.loading = false;
        });
    };
    UserProfilePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile-page',
            template: __webpack_require__("../../../../../src/app/user-profile-page/user-profile-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile-page/user-profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], UserProfilePageComponent);
    return UserProfilePageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var DATABASE_URL = 'https://popupgames-2f3e3.firebaseio.com';
var SERVER_PATH = '/non-prod';
var environment = {
    production: false,
    serverUrl: DATABASE_URL + SERVER_PATH,
    serverPath: SERVER_PATH,
    firebase: {
        apiKey: 'AIzaSyDnzYw5x5mI9UZpEKLU_28fLB3tPaBjUT8',
        authDomain: 'popupgames-2f3e3.firebaseapp.com',
        databaseURL: DATABASE_URL,
        projectId: 'popupgames-2f3e3',
        storageBucket: 'popupgames-2f3e3.appspot.com',
        messagingSenderId: '852160140091'
    }
};


/***/ }),

/***/ "../../../../../src/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__("../../../../../src/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(navigationService) {
        this.navigationService = navigationService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */].isLoggedIn()) {
            return true;
        }
        this.navigationService.navigateToRoot();
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setParams: (_a = {}, _a['auth'] = __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */].getUserToken(), _a)
        });
        return next.handle(request);
        var _a;
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/model/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "../../../../../src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, userService, af) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.af = af;
        this.fireDatabase = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverPath + '/users');
        this.authenticated = false;
        this.af.authState.subscribe(function (auth) {
            if (auth != null) {
                _this.firebaseUser = af.authState;
                _this.authenticated = true;
            }
        });
    }
    AuthService_1 = AuthService;
    AuthService.saveUserInfo = function (af) {
        AuthService_1.saveUserID(af.auth.currentUser.uid);
        AuthService_1.saveUserToken(af.auth.currentUser.getIdToken());
    };
    AuthService.saveUserID = function (id) {
        localStorage.setItem('USER_ID', id);
    };
    AuthService.getUserId = function () {
        return localStorage.getItem('USER_ID');
    };
    AuthService.saveUserToken = function (token) {
        token.then(function (value) { return localStorage.setItem('USER_TOKEN', value); });
    };
    AuthService.getUserToken = function () {
        return localStorage.getItem('USER_TOKEN');
    };
    AuthService.isLoggedIn = function () {
        if (AuthService_1.getUserId()) {
            return true;
        }
        return false;
    };
    AuthService.prototype.getUser = function () {
        return this.userService.getUser(AuthService_1.getUserId());
    };
    AuthService.prototype.addUserEvent = function (eventId) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/users/" + AuthService_1.getUserId() + "/ownedEventIds.json", "\"" + eventId + "\"");
    };
    AuthService.prototype.signInGG = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider()).then(function (res) {
                console.log(_this.firebaseUser);
                _this.authenticated = true;
                var userInfo = res.user;
                // Save data from user into database here
                _this.af.auth.currentUser.updateProfile({
                    displayName: userInfo.displayName,
                    photoURL: userInfo.photoURL
                }).then(function () {
                    _this.fireDatabase.child(_this.af.auth.currentUser.uid).update({
                        uid: _this.af.auth.currentUser.uid,
                        email: userInfo.email,
                        displayName: userInfo.displayName,
                        photoURL: userInfo.photoURL
                    }).then(function () {
                        AuthService_1.saveUserInfo(_this.af);
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
                console.log(res.user.displayName);
                console.log(res.user.email);
            })
                .catch(function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthService.prototype.signInFB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider()).then(function (res) {
                _this.authenticated = true;
                var userInfo = res.user;
                // Save data from user into database here
                _this.af.auth.currentUser.updateProfile({
                    displayName: userInfo.displayName,
                    photoURL: userInfo.photoURL
                }).then(function () {
                    _this.fireDatabase.child(_this.af.auth.currentUser.uid).update({
                        uid: _this.af.auth.currentUser.uid,
                        email: userInfo.email,
                        displayName: userInfo.displayName,
                        photoURL: userInfo.photoURL
                    }).then(function () {
                        AuthService_1.saveUserInfo(_this.af);
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
                console.log(res.user.displayName);
                console.log(res.user.email);
            })
                .catch(function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        this.authenticated = false;
        localStorage.removeItem('USER_ID');
        localStorage.removeItem('USER_TOKEN');
        return this.af.auth.signOut();
    };
    AuthService = AuthService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "../../../../../src/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventService = (function () {
    function EventService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    EventService_1 = EventService;
    EventService.stringToDate = function (date) {
        return new Date(date.substring(0, date.length - 5) + "." + date.substring(date.length - 4, date.length - 1));
    };
    EventService.formatDateTime = function (date) {
        return this.MONTH_NAMES[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " at "
            + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    EventService.formatDateTimeShort = function (date) {
        return date.getMonth() + 1 + "/" + date.getDate() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    EventService.formatEventDates = function (events) {
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            if (event_1) {
                event_1.date = EventService_1.stringToDate(event_1.date.toString());
            }
        }
    };
    EventService.prototype.postEvent = function (event, then, error) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/events.json", event).subscribe(function (value) {
            _this.authService.addUserEvent(value.name).subscribe(function (value2) {
                then(value);
            }, function (err) {
                error(err);
            });
        }, function (err) {
            error(err);
        });
    };
    EventService.prototype.getAllEvents = function (location) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/events.json";
        if (location) {
            url += "?orderBy=\"location/name\"&equalTo=\"" + location + "\"";
        }
        return this.http.get(url);
    };
    EventService.prototype.getEvent = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/events/" + id + ".json");
    };
    EventService.prototype.getEvents = function (ids) {
        var _this = this;
        var events = ids.map(function (id) { return _this.getEvent(id); });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin(events);
    };
    EventService.prototype.deleteEvent = function (id, userEventKey) {
        var userId = __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */].getUserId();
        var eventResponse = this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/events/" + id + ".json");
        var userResponse = this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/users/" + userId + "/ownedEventIds/" + userEventKey + ".json");
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin(eventResponse, userResponse);
    };
    EventService.prototype.joinEvent = function (eventId) {
        var userId = __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */].getUserId();
        var eventResponse = this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/events/" + eventId + "/participantIds.json", "\"" + userId + "\"");
        var userResponse = this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/users/" + userId + "/joinedEventIds.json", "\"" + eventId + "\"");
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin(eventResponse, userResponse);
    };
    EventService.prototype.leaveEvent = function (eventId, participantKey, joinedEventKey) {
        var userId = __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */].getUserId();
        var eventResponse = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]();
        var userResponse = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]();
        if (eventId && participantKey) {
            eventResponse = this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/events/" + eventId + "/participantIds/" + participantKey + ".json");
        }
        if (userId && joinedEventKey) {
            userResponse = this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "/users/" + userId + "/joinedEventIds/" + joinedEventKey + ".json");
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin(eventResponse, userResponse);
    };
    EventService.PREDEFINED_EVENT_LOCATIONS = [
        { name: 'Stamps Field', longitude: 33.778321, latitude: -84.403176 },
        { name: 'Campus Recreation Center', longitude: 33.775799, latitude: -84.403590 },
        { name: 'Tech Green', longitude: 33.774687, latitude: -84.397380 },
        { name: 'Burger Bowl (Couch Park)', longitude: 33.774246, latitude: -84.398728 },
        { name: 'Fifth Street Plaza', longitude: 33.776912, latitude: -84.390840 },
    ];
    EventService.MONTH_NAMES = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    EventService = EventService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], EventService);
    return EventService;
    var EventService_1;
}());



/***/ }),

/***/ "../../../../../src/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_modal_alert_content_modal_alert_content_component__ = __webpack_require__("../../../../../src/app/modal-alert-content/modal-alert-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = (function () {
    function ModalService(matModalService) {
        this.matModalService = matModalService;
        this.modalStack = [];
    }
    ModalService.prototype.openModal = function (componentOrTemplateRef, data, onClose) {
        var _this = this;
        var modalRef = this.matModalService.open(componentOrTemplateRef, {
            width: '90%',
            maxWidth: '500px',
            data: data ? data : {}
        });
        if (onClose) {
            modalRef.afterClosed().subscribe(function () {
                _this.modalStack.pop();
                onClose();
            });
        }
        this.modalStack.push(modalRef);
        return modalRef;
    };
    ModalService.prototype.openAlertModal = function (title, message, onClose) {
        return this.openModal(__WEBPACK_IMPORTED_MODULE_2__app_modal_alert_content_modal_alert_content_component__["a" /* ModalAlertContentComponent */], { title: title, message: message ? message : '' }, onClose);
    };
    ModalService.prototype.modelIsOpened = function () {
        return this.modalStack.length > 0;
    };
    ModalService.prototype.getTopModal = function () {
        if (this.modelIsOpened()) {
            return this.modalStack[this.modalStack.length - 1];
        }
        return null;
    };
    ModalService.prototype.closeTopModal = function () {
        this.getTopModal().close();
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/services/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationService = (function () {
    function NavigationService(router) {
        var _this = this;
        this.router = router;
        this.returnStack = [];
        this.returnStackClearLock = false;
        this.title = NavigationService_1.DEFAULT_TITLE;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (!_this.returnStackClearLock) {
                _this.returnStack = [];
            }
        });
    }
    NavigationService_1 = NavigationService;
    NavigationService.prototype.getTitle = function () {
        return this.title ? this.title : NavigationService_1.DEFAULT_TITLE;
    };
    NavigationService.prototype.setTitle = function (title) {
        var _this = this;
        setTimeout(function () { return _this.title = title; });
    };
    NavigationService.prototype.resetTitle = function () {
        this.setTitle(NavigationService_1.DEFAULT_TITLE);
    };
    NavigationService.prototype.navigate = function (route) {
        var _this = this;
        this.returnStackClearLock = true;
        this.router.navigate([route]).then(function (value) { return _this.returnStackClearLock = false; });
    };
    NavigationService.prototype.navigateToRoot = function () {
        this.navigate('');
    };
    NavigationService.prototype.navigateToLandingPage = function () {
        this.navigate(NavigationService_1.LANDING_PAGE_ROUTE);
    };
    NavigationService.prototype.navigateAndSave = function (route) {
        this.returnStack.push(this.router.url);
        this.navigate(route);
    };
    NavigationService.prototype.canReturn = function () {
        return this.returnStack.length > 0;
    };
    NavigationService.prototype.return = function () {
        if (this.canReturn()) {
            this.navigate(this.returnStack.pop());
        }
    };
    NavigationService.DEFAULT_TITLE = 'Popup Games';
    NavigationService.EVENTS_LIST_TITLE = 'Discover';
    NavigationService.EVENT_TITLE = 'Event Details';
    NavigationService.USER_EVENTS_JOINED_TITLE = 'My RSVPs';
    NavigationService.USER_EVENTS_OWNED_TITLE = 'My Events';
    NavigationService.USER_PROFILE_TITLE = 'My Profile';
    NavigationService.CREATE_EVENT_TITLE = 'Create Event';
    NavigationService.LANDING_PAGE_ROUTE = '/page/events/list';
    NavigationService = NavigationService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NavigationService);
    return NavigationService;
    var NavigationService_1;
}());



/***/ }),

/***/ "../../../../../src/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + "/users/" + id + ".json");
    };
    UserService.prototype.getUsers = function (ids) {
        var _this = this;
        var users = ids.map(function (id) { return _this.getUser(id); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(users);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map