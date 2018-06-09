(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../friends/friends.module": [
		"./src/app/friends/friends.module.ts",
		"friends-friends-module"
	],
	"../message/message.module": [
		"./src/app/message/message.module.ts",
		"message-message-module"
	],
	"../search/search.module": [
		"./src/app/search/search.module.ts",
		"search-search-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', redirectTo: 'auth/signup', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div fxLayout=\"column\" fxLayoutGap=\"1vh\" fxLayoutAlign=\"center\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'my-app' }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument() : []
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var authRoutes = [
    { path: 'auth', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
            { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] }
        ] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(authRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-bottom: 15px\">\n  <mat-card>\n    <mat-card-title>Welcome!</mat-card-title>\n    <mat-card-content>\n      {{content}}\n    </mat-card-content>\n  </mat-card>\n</div>\n\n\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
        this.content = 'This app lets you connect and chat with friends.';
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.onActivate = function (event) {
        if (event instanceof _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"])
            this.content = 'This app lets you connect and chat with friends.';
        else
            this.content = 'Just fill up the fields below and you are ready to go!';
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/safeHtml.pipe */ "./src/app/shared/safeHtml.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
                _shared_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]
            ],
            imports: [
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.mat-raised-button{\n  max-width:1.8em;\n  align-self: flex-end;\n}\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmitForm(f)\" #f=\"ngForm\" fxLayout=\"column\" fxLayoutGap=\"15px;\">\n  <mat-form-field>\n    <input matInput placeholder=\"Email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n    <mat-error *ngIf=\"emailInput.invalid\">{{getEmailError()}}</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" ngModel name=\"password\" [type]=\"hide ? 'password' : 'text'\" required minlength=\"6\" #passwordInput=\"ngModel\">\n    <mat-icon matSuffix (click)=\"hide = !hide\" style=\"cursor: pointer\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    <mat-error *ngIf=\"passwordInput.invalid\">{{getPasswordError()}}</mat-error>\n  </mat-form-field>\n  <p class=\"error\" *ngIf=\"signinError\">{{signinError}}</p>\n  <br>\n  <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"f.invalid\">Sign In</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(store, router) {
        this.store = store;
        this.router = router;
        this.hide = true;
        this.signinError = '';
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStateError = this.store.select('auth')
            .subscribe(function (authState) {
            if (authState.signin_fail_message)
                _this.signinError = authState.signin_fail_message;
            if (authState.authenticated && authState.token) {
                _this.router.navigateByUrl("/main/search");
            }
        });
    };
    SigninComponent.prototype.getEmailError = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    SigninComponent.prototype.getPasswordError = function () {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Minimum password length is 6' :
                '';
    };
    SigninComponent.prototype.onSubmitForm = function (myForm) {
        var email = myForm.value.email;
        var password = myForm.value.password;
        console.log(email + "   " + password);
        this.signinError = '';
        //signup the user
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["Signin"]({ email: email, password: password }));
        //populate the to do list with data from db
    };
    SigninComponent.prototype.ngOnDestroy = function () {
        if (this.authStateError)
            this.authStateError.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailInput'),
        __metadata("design:type", Object)
    ], SigninComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordInput'),
        __metadata("design:type", Object)
    ], SigninComponent.prototype, "password", void 0);
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.mat-raised-button{\n  max-width:1.8em;\n  align-self: flex-end;\n}\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmitForm(f)\" #f=\"ngForm\" fxLayout=\"column\" fxLayoutGap=\"15px;\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n    <div fxFlex>\n      <img alt=\"Angular Logo\" width=120px height=120px [src]=\"avatar | safeHtml\">\n    </div>\n    <div fxFlex fxFlexAlign=\"center\">\n      <p>Please upload picture smaller than 50kb and size smaller than 200px x 200px.</p>\n      <input type=\"file\" id=\"filePicker\"  (change)=\"onSelectImage($event)\">\n    </div>\n  </div>\n  <p class=\"error\" *ngIf=\"uploadError\">{{uploadError}}</p>\n  <mat-form-field>\n    <input matInput placeholder=\"Name\" ngModel name=\"name\" required #nameInput=\"ngModel\">\n    <mat-error *ngIf=\"nameInput.invalid\">You must enter a value</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n    <mat-error *ngIf=\"emailInput.invalid\">{{getEmailError()}}</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"picker\" ngModel name=\"dob\" placeholder=\"Choose a date\" required #dobInput=\"ngModel\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-error *ngIf=\"dobInput.invalid\">You must enter a valid DOB</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Address\" ngModel name=\"address\" required #addressInput=\"ngModel\">\n    <mat-error *ngIf=\"nameInput.invalid\">You must enter an valid address</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Hobbies\" ngModel name=\"hobbies\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" ngModel name=\"password\" [type]=\"hide ? 'password' : 'text'\" required minlength=\"6\" #passwordInput=\"ngModel\">\n    <mat-icon matSuffix (click)=\"hide = !hide\" style=\"cursor: pointer\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    <mat-error *ngIf=\"passwordInput.invalid\">{{getPasswordError()}}</mat-error>\n  </mat-form-field>\n  <p class=\"error\" *ngIf=\"signupError\">{{signupError}}</p>\n  <br>\n  <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"f.invalid\">Sign Up</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(store, router) {
        this.store = store;
        this.router = router;
        this.noavatar = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAAGmHBAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/+EDDGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOnhtcE1NPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vJz4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjI4N0JFQzI0RDgxMzExRTVCOThBQ0Q4OTc1RjNCODlCPC94bXBNTTpJbnN0YW5jZUlEPgogIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6Mjg3QkVDMjREODEzMTFFNUI5OEFDRDg5NzVGM0I4OUI8L3htcE1NOkluc3RhbmNlSUQ+CiAgPHhtcE1NOkRvY3VtZW50SUQgcmRmOnJlc291cmNlPSd4bXAuZGlkOjI4N0JFQzI1RDgxMzExRTVCOThBQ0Q4OTc1RjNCODlCJyAvPgogIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgPC94bXBNTTpEZXJpdmVkRnJvbT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/Pgr/2wBDAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCADIAMgDAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAwQFAQgC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAengAAAAAAAAABhK8Icc46BMCxDOAAAAAAAAa5ShxAADsF2G0AAAAAAACrCCAAAE2LYAAAAAAAPwfPRhAAAP2fQxlAAAAAABziggAAAC9zrgAAAAAA1z55AAAAPoI3AAAAAAAClSNgAAHfLvAAAAAAABxCkTEAAZC6zvgAAAAAAAEfKnOSAdQtckYAAAAAAAAB4cQ5xvndPQAAAAAAAAAfk0TEZDdMgAAAAAAABwiFkaOQeAA6hIiYkmPQAAAADTKpImAAAAAd0ts6wAAABjKOOMAAAAAAbhexuAAAAi5TIAAAAAABapOQAAARAqAAAAAAAAtAnwAAAIgVAAAAAAAAWgT4AAAEQKgAAAAAAALQJ8AAACIFQAAAAAAAFoE+AAABECoAAAAAAAC0CfAA//8QAJxAAAgEEAQMEAgMAAAAAAAAAAwQCAAEFMEAgMzQSExQhEBEVMWD/2gAIAQEAAQUC/wBh+uNMkBQZzv2R1steqVDcbFS2dlQyDNDglLAI3XiOk6U3SpkCaBx8DNtesvXhWvaPvve0bEnck+uMrwlCdiQ3OfSmlDwtxYe4LSvD2gb8qv8AHb68at8lvgPp2cBOExz6YxlOWPSskHgvY8TtmUmFL/lZNhq6OOEnbiExqJa/hUaHjERV/XFve0au0rGvnJ1ZtS9RlGfCYyKi1Gzxb0TIOlq9736RutioWdZjS+WTPtOcS43MsdnYpkWFKUcC5DTKVoRecm4baA5FigNFgOjMTvBHfgZXutozfhb8B2dGb8LfgOzozfhb8B2dGb8LfgOzozfhb8B2ej//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ARx//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwEcf//EAD4QAAECAgQJCAYLAAAAAAAAAAIBAwARBCEiMBIxMkBRYYGxwSAjQXFyg5GhEzNTc5LRFDRCQ1JicIKy4fD/2gAIAQEABj8C/QZTcJAAcZLCjRAq9qfBIt0g11Isk8EjGsc3SDTVOaeCwg0oJp7UMe1IRxokMCxEmZE64uCAJNViZWWh9W1o5WEFYL6xvoWBdbWYHizFKKK2Gq3NZL8rj6OS82/k6i/vMFJcQpNYNwspwlJdtwJjUQLMV1pAOJiNEJNt/Svcn/G6ovuh3X7jftBUfFLplvpbARXYmYGsrD1sNuPzuG0lYbtudSZioYnBraLXBNmOCY1EK8pABMIiqEUjBWt063S4bMymth5Ml1NyxzoWeh1Kx8eRzLcx6XFqFNsYXrH1xufLNZlRxRdI2d0ZJ9WFE0o4qv5rW+JJiTNZksk1xXSWk/eMfW2vjSKqU18YxZJC6q8yVDcwjT7sK1iTDItp+IrSxapJ9Q2d0omta6V5E4sUhxNU5p4LHOgLyaclfl5QiKXoT0HV54r1XXiwRT/VQotzYZ0JlL1reIglhtdLJYtmiMJta0y21xpdEZLIRSZLqSFNamxqaDQl8LrSyIfNNCw28GS4k5cLlyX21EeOYOj0C5VtS57weOYUjtpuue8HjmFI7abrnvB45hSO2m657weOYUjtpuue8HjmFI7abuT/AP/EACkQAQABAgQFBQADAQAAAAAAAAERACFAQVFhMDGRofAgcYGxwdHh8WD/2gAIAQEAAT8h/wCwlphiGhLICmguSLn459KdU55t7QVcm9rNKjB8m+4HaiIekQN+S/Ee2DxKD/DWy3amko51tzq7+qZU+62fx0ag/wAlZmo7mBfl0xZK3Q9+A6b45Jbot0wFt1i7F2u78CpeA1MBpEkrtE8iTjpUcyHq4SVXR6Dj/wClvFIlkhOZwVX7kAOAUaDrZaPx2RwGTk0+WSfLBgZMl78tDs5/1Tom5gPqdS/mCrVokM2uQ2wTk0sEy0Mynk98XJ+Pm/oHiSR1A/Ber6QYciDQ5H32wiCI3GyUwpGr94VemxuRTQNZz7WlAACLAGWFIga1ldM5/krxX9rmp2/uoSSdX+ME7m673kfLUnqgvuQQHepCIOZHpUjK+8PoLMLJnUNGHJvvBUSZ9H3k0Sjttvj9orw4gKeuXQZtPPRaeztfR34ifuQPBpVk7fnvto8IITTeQErUmMzxl3PjZ80GWZsNdvMDyV7NuCZOF12WX1gFGzK+J/HB8TbEhPE2xITxNsSE8TbEhPE2woT/2gAMAwEAAgADAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAABABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAIAAAAAAAAAAAAIAAAAAABIAAABAAAAAAABAAAAAAAAAAAABAAAIAAAAAAAAIAAIAAAAAAAAAIJAAAAAAAAAAAJJAAAAAAAABJIAAIIAAAAAIAAAAABIAAAAIAAAAAABAAAAAAAAAAAABAAAAIAAAAAAAIAAABAAAAAAABAAAAIAAAAAAAIAAABAAAAAAABAAAAIAAAAAAAIAB//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/EBx//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPxAcf//EACYQAQABAwMEAwEAAwAAAAAAAAERACExQVFhMECBkSBxofBgsdH/2gAIAQEAAT8Q/wAw5fqkiz2tqc5wwX1VsBdbF6igCZJeUxG4t5Nf1iVD/wBVkfu0+5owN/uDZfNEbGB84D7Fw0VCVKWyMZHUTUQTU7IjqC7sYAaogGqhTRCILDGypnwIPkHWRbBa6wmAkwyKN79IshYd4QRN+xWPEBWkA7ntKcHQuzFQrXQbQS3Tl2D18Ahqeik5n7D37PQh2r2gL4QohIDOP+T18o4dI5UQE7APw698ov23/RpFU6HyJkfroeF4KFeA/wDukewekI5k12S5bRbug1Y9BMgV3xmyulfd3V7BsInBR3YvHbwYUFIq+JAPxNRLJct8jv1El0AFFZNuISQvYUN1W0wdiNbNkUYlF/FxNG6I0LMOzsCTsTh8PYkh1KQpybCrPrS42bzkc6oIHZgEBUXEciVdxcrecqNP2NaI/wAS0/tXCTD3t4V4KOwQGABgAwdry0KB7YKWRk0Z9Nb8Xa7ANuBJ6rsT0o9p7IsEwCEmkEfgmmWDIKJsknDR/UQeHZEPmmaxlJPLL8JGuUGyeaR0LEY/nimxtgKeGg7AqEavAsNpJ2oRBERBRhG49SzxcW6xQl0iwcrAKSl2ETA1QJsGi5dRqpt6w6yy+bJujTd8YhCsQMrQs8Ih0c9F9EIjQBaVJJFtPlC1sV9AwEdWZp7szkjESBf2Qgk0AEJlJeUJX10U6FhZtTyMeHsJcxyaE8OJT56OLuaRxdzSOLuaRxdzSOLtaR//2Q==";
        this.avatar = this.noavatar;
        this.hide = true;
        this.uploadError = '';
        this.signupError = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStateError = this.store.select('auth') //i dont want to take 1 coz I want this observation to keep continuing
            .subscribe(function (authState) {
            if (authState.signup_fail_message) {
                _this.signupError = authState.signup_fail_message;
            }
            if (authState.authenticated && authState.token) {
                _this.router.navigateByUrl("/main/search");
            }
        });
    };
    SignupComponent.prototype.onSelectImage = function (event) {
        var _this = this;
        this.uploadError = "";
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size > 51200) {
                return this.uploadError = "please upload file smaller than 50kb";
            }
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (e) {
                //check image size before assigning to avatar variable
                var image = new Image();
                image = e.target.result;
                if (image.width > 200 || image.height > 200) {
                    return _this.uploadError = 'please upload image smaller than 200px x 200px';
                }
                _this.avatar = e.target.result;
            };
        }
    };
    SignupComponent.prototype.getEmailError = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    SignupComponent.prototype.getPasswordError = function () {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Minimum password length is 6' :
                '';
    };
    SignupComponent.prototype.onSubmitForm = function (myForm) {
        console.log(myForm);
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.avatar, myForm.value.name, myForm.value.dob.getTime(), //dob is a Date object, convert it to unix time number
        myForm.value.email, myForm.value.address, myForm.value.hobbies, myForm.value.password);
        this.signupError = '';
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Signup"](user));
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        if (this.authStateError)
            this.authStateError.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailInput'),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordInput'),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "password", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: SIGNUP_FAIL, SIGNIN_FAIL, SIGNUP, SIGNIN, LOGOUT, AFTER_LOGOUT, SET_TOKEN, SignupFail, SigninFail, Signup, Signin, Logout, AfterLogout, SetToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAIL", function() { return SIGNUP_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FAIL", function() { return SIGNIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_LOGOUT", function() { return AFTER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFail", function() { return SignupFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninFail", function() { return SigninFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLogout", function() { return AfterLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
var SIGNUP_FAIL = 'SIGNUP_FAIL';
var SIGNIN_FAIL = 'SIGNIN_FAIL';
var SIGNUP = 'SIGNUP';
var SIGNIN = 'SIGNIN';
var LOGOUT = 'LOGOUT';
var AFTER_LOGOUT = 'AFTER_LOGOUT';
var SET_TOKEN = 'SET_TOKEN';
var SignupFail = /** @class */ (function () {
    function SignupFail(payload) {
        this.payload = payload;
        this.type = SIGNUP_FAIL;
    }
    ;
    return SignupFail;
}());

var SigninFail = /** @class */ (function () {
    function SigninFail(payload) {
        this.payload = payload;
        this.type = SIGNIN_FAIL;
    }
    ;
    return SigninFail;
}());

var Signup = /** @class */ (function () {
    function Signup(payload) {
        this.payload = payload;
        this.type = SIGNUP;
    }
    return Signup;
}());

var Signin = /** @class */ (function () {
    function Signin(payload) {
        this.payload = payload;
        this.type = SIGNIN;
    }
    return Signin;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var AfterLogout = /** @class */ (function () {
    function AfterLogout() {
        this.type = AFTER_LOGOUT;
    }
    return AfterLogout;
}());

var SetToken = /** @class */ (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
    return SetToken;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //from is what used to be 'fromPromise'
 //tap is what-used-to be 'do'
var SERVER_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server;
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.logActions$ = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (action) {
            console.log(action);
        }));
        this.authSignup = this.actions$.ofType(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNUP"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) {
            console.log("auth actions try signup");
            return action.payload;
            //return Observable<payload:User>
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (authData) {
            return _this.httpClient.post(SERVER_PATH + '/user', JSON.stringify(authData), {
                headers: { 'Content-Type': 'application/json' },
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                console.log("error sign up ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.log('signup error resp');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_FAIL"], payload: resp['error'] });
                //the last return is going to be handled by effects
            }
            //else its going to be an object with the token
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"], payload: resp['token'] });
        }));
        this.authSignin = this.actions$.ofType(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNIN"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (authData) {
            return _this.httpClient.post(SERVER_PATH + '/user/login', JSON.stringify(authData), {
                headers: { 'Content-Type': 'application/json' },
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                console.log("error sign in ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.log('signin error resp');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNIN_FAIL"], payload: resp['error'] });
                //the last return is going to be handled by effects
            }
            //else its going to be an object with the token
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"], payload: resp['token'] });
        }));
        this.logout = this.actions$.ofType(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LOGOUT"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            return _this.httpClient.delete(SERVER_PATH + '/user/me/token', {
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                console.log("error logging out ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.log('log out error', resp.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["AFTER_LOGOUT"] }); //clean up
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logActions$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignup", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignin", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logout", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.reducers.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/store/auth.reducers.ts ***!
  \*********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    token: null,
    email: null,
    name: null,
    authenticated: false,
    signup_fail_message: null,
    signin_fail_message: null
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_FAIL"]:
            console.log("sign up failed reducer called");
            return __assign({}, state, { signup_fail_message: action.payload });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_FAIL"]:
            console.log("sign in failed reducer called");
            return __assign({}, state, { signin_fail_message: action.payload });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP"]:
            console.log("sign up reducer called");
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNIN"]:
            return __assign({}, state, { signup_fail_message: null, signin_fail_message: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AFTER_LOGOUT"]:
            console.log("reducer after logout");
            return __assign({}, state, initialState);
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_TOKEN"]:
            var jwt_payload = action.payload.split('.')[1];
            var obj_payload = JSON.parse(atob(jwt_payload));
            console.log("set token reducer called", obj_payload);
            return __assign({}, state, { token: action.payload, email: obj_payload['email'], name: obj_payload['name'], authenticated: true });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/core/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var mainRoutes = [
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            { path: 'search', loadChildren: '../search/search.module#SearchModule' },
            { path: 'friends', loadChildren: '../friends/friends.module#FriendsModule' },
            { path: 'inbox', loadChildren: '../message/message.module#MessageModule' }
        ] },
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(mainRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/core/main/main.component.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_server_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/server.interceptor */ "./src/app/shared/server.interceptor.ts");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/socket.service */ "./src/app/shared/socket.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _message_store_message_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../message/store/message.reducers */ "./src/app/message/store/message.reducers.ts");
/* harmony import */ var _message_store_message_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../message/store/message.effects */ "./src/app/message/store/message.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
            ],
            imports: [
                _core_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoreRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('message', _message_store_message_reducers__WEBPACK_IMPORTED_MODULE_10__["messageReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_message_store_message_effects__WEBPACK_IMPORTED_MODULE_11__["MessageEffects"]])
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_server_interceptor__WEBPACK_IMPORTED_MODULE_6__["ServerInterceptor"], multi: true },
                _shared_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 100%\n}\n"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-toolbar color='primary' fxLayout.xs=\"column\" ngStyle.xs=\"height: 7em;\">\n    <button mat-button routerLink=\"\"><b>Chat-wall</b></button>\n    <span ngStyle.gt-xs=\"flex: 1 1 100%\"></span>\n\n    <button mat-button *ngIf=\"authenticatedState|async; else notAuthenticated\" (click)=\"onLogout()\">Log Out</button>\n\n    <ng-template #notAuthenticated>\n      <button mat-button routerLink=\"auth/signup\">Sign up</button>\n      <button mat-button routerLink=\"auth/signin\">Sign In</button>\n    </ng-template>\n\n  </mat-toolbar>\n\n  <p fxFlexAlign=\"end\" *ngIf=\"usernameState|async\">Welcome, {{usernameState|async}}!</p>\n</div>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _friends_store_friends_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../friends/store/friends.actions */ "./src/app/friends/store/friends.actions.ts");
/* harmony import */ var _friends_chats_store_chats_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../friends/chats/store/chats.actions */ "./src/app/friends/chats/store/chats.actions.ts");
/* harmony import */ var _search_store_search_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../search/store/search.actions */ "./src/app/search/store/search.actions.ts");
/* harmony import */ var _message_store_message_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../message/store/message.actions */ "./src/app/message/store/message.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/socket.service */ "./src/app/shared/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, router, socketService) {
        this.store = store;
        this.router = router;
        this.socketService = socketService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authenticatedState = this.store.select('auth', 'authenticated');
        this.usernameState = this.store.select('auth', 'name');
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"]());
        this.store.select('auth', 'authenticated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skipWhile"])(function (authenticated) { return authenticated === true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (authenticated) {
            _this.socketService.disconnect();
            _this.router.navigateByUrl('/auth/signin');
        });
        //clear all the stores
        this.store.dispatch(new _friends_store_friends_actions__WEBPACK_IMPORTED_MODULE_3__["ClearStore"]());
        this.store.dispatch(new _friends_chats_store_chats_actions__WEBPACK_IMPORTED_MODULE_4__["ClearStore"]());
        this.store.dispatch(new _search_store_search_actions__WEBPACK_IMPORTED_MODULE_5__["ClearStore"]());
        this.store.dispatch(new _message_store_message_actions__WEBPACK_IMPORTED_MODULE_6__["ClearStore"]());
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/main/main.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/main/main.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\np{\n  font-size: 75%;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-tab\" fxLayout=\"column\" fxLayoutGap=\".5vh\" fxLayoutAlign=\"center\">\n  <p>Notification area: <span class=\"blink_me\">{{newMessage}}</span></p>\n  <nav mat-tab-nav-bar>\n    <a mat-tab-link\n       routerLink=\"/main/search\"\n       routerLinkActive #rla1=\"routerLinkActive\"\n       [active]=\"rla1.isActive\">\n      Search\n    </a>\n    <a mat-tab-link\n       routerLink=\"/main/friends\"\n       routerLinkActive #rla2=\"routerLinkActive\"\n       [active]=\"rla2.isActive\">\n      Friends\n    </a>\n    <a mat-tab-link\n       routerLink=\"/main/inbox\"\n       routerLinkActive #rla3=\"routerLinkActive\"\n       [active]=\"rla3.isActive\">\n      Inbox\n    </a>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/core/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/socket.service */ "./src/app/shared/socket.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _message_store_message_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../message/store/message.actions */ "./src/app/message/store/message.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(socketService, store) {
        this.socketService = socketService;
        this.store = store;
        this.newMessage = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.initSocket();
        this.socketSub = this.socketService.onNewMessage().subscribe(//active listening
        function (messages) {
            _this.store.dispatch(new _message_store_message_actions__WEBPACK_IMPORTED_MODULE_3__["PushNewMessages"](messages));
        }
        //when get that 1 new message, push message into message's store
        );
        this.msgSub = this.store.select('message', 'messages').subscribe(function (messages) {
            var newMsg = messages.filter(function (msg) { return msg.status !== 'READ'; });
            if (newMsg.length > 0)
                _this.newMessage = 'You\'ve got new message! Check your inbox.';
            else
                _this.newMessage = '';
        });
        this.store.dispatch(new _message_store_message_actions__WEBPACK_IMPORTED_MODULE_3__["FetchAllMessages"]());
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.socketSub)
            this.socketSub.unsubscribe();
        if (this.msgSub)
            this.msgSub.unsubscribe();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/core/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/core/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/friends/chats/store/chats.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/friends/chats/store/chats.actions.ts ***!
  \******************************************************/
/*! exports provided: SELECT_FRIEND, UPDATE_SELECTED_FRIEND_STATUS, STORE_CHAT_ARRAY, UPDATE_CHAT_ARRAY, READ_CHAT_FAIL, CLEAR_STORE, SelectFriend, UpdateSelectedFriendStatus, StoreChatArray, UpdateChatArray, ReadChatFail, ClearStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_FRIEND", function() { return SELECT_FRIEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTED_FRIEND_STATUS", function() { return UPDATE_SELECTED_FRIEND_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_CHAT_ARRAY", function() { return STORE_CHAT_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHAT_ARRAY", function() { return UPDATE_CHAT_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READ_CHAT_FAIL", function() { return READ_CHAT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFriend", function() { return SelectFriend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedFriendStatus", function() { return UpdateSelectedFriendStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreChatArray", function() { return StoreChatArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateChatArray", function() { return UpdateChatArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadChatFail", function() { return ReadChatFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearStore", function() { return ClearStore; });
var SELECT_FRIEND = 'SELECT_FRIEND';
;
var UPDATE_SELECTED_FRIEND_STATUS = 'UPDATE_SELECTED_FRIEND_STATUS';
var STORE_CHAT_ARRAY = 'STORE_CHAT_ARRAY';
var UPDATE_CHAT_ARRAY = 'UPDATE_CHAT_ARRAY';
var READ_CHAT_FAIL = 'READ_CHAT_FAIL';
var CLEAR_STORE = 'CLEAR_STORE';
var SelectFriend = /** @class */ (function () {
    function SelectFriend(payload) {
        this.payload = payload;
        this.type = SELECT_FRIEND;
    }
    return SelectFriend;
}());

var UpdateSelectedFriendStatus = /** @class */ (function () {
    function UpdateSelectedFriendStatus(payload) {
        this.payload = payload;
        this.type = UPDATE_SELECTED_FRIEND_STATUS;
    }
    return UpdateSelectedFriendStatus;
}());

var StoreChatArray = /** @class */ (function () {
    function StoreChatArray(payload) {
        this.payload = payload;
        this.type = STORE_CHAT_ARRAY;
    }
    return StoreChatArray;
}());

var UpdateChatArray = /** @class */ (function () {
    function UpdateChatArray(payload) {
        this.payload = payload;
        this.type = 'UPDATE_CHAT_ARRAY';
    }
    return UpdateChatArray;
}());

var ReadChatFail = /** @class */ (function () {
    function ReadChatFail(payload) {
        this.payload = payload;
        this.type = READ_CHAT_FAIL;
    }
    return ReadChatFail;
}());

var ClearStore = /** @class */ (function () {
    function ClearStore() {
        this.type = CLEAR_STORE;
    }
    return ClearStore;
}());



/***/ }),

/***/ "./src/app/friends/store/friends.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/friends/store/friends.actions.ts ***!
  \**************************************************/
/*! exports provided: GET_FRIENDS_LIST, STORE_FRIENDS_LIST, GET_FRIENDS_FAIL, UPDATE_FRIEND_ONLINE_STATUS, UPDATE_FRIEND_CHAT_STATUS, CLEAR_STORE, GetFriendsList, StoreFriendsList, GetFriendsFail, UpdateFriendOnlineStatus, UpdateFriendChatStatus, ClearStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FRIENDS_LIST", function() { return GET_FRIENDS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FRIENDS_LIST", function() { return STORE_FRIENDS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FRIENDS_FAIL", function() { return GET_FRIENDS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRIEND_ONLINE_STATUS", function() { return UPDATE_FRIEND_ONLINE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRIEND_CHAT_STATUS", function() { return UPDATE_FRIEND_CHAT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFriendsList", function() { return GetFriendsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFriendsList", function() { return StoreFriendsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFriendsFail", function() { return GetFriendsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFriendOnlineStatus", function() { return UpdateFriendOnlineStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFriendChatStatus", function() { return UpdateFriendChatStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearStore", function() { return ClearStore; });
var GET_FRIENDS_LIST = 'GET_FRIENDS_LIST';
var STORE_FRIENDS_LIST = 'STORE_FRIENDS_LIST';
var GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL';
var UPDATE_FRIEND_ONLINE_STATUS = 'UPDATE_FRIEND_ONLINE_STATUS';
var UPDATE_FRIEND_CHAT_STATUS = 'UPDATE_FRIEND_CHAT_STATUS';
var CLEAR_STORE = 'CLEAR_STORE';
var GetFriendsList = /** @class */ (function () {
    function GetFriendsList() {
        this.type = GET_FRIENDS_LIST;
    }
    return GetFriendsList;
}());

var StoreFriendsList = /** @class */ (function () {
    function StoreFriendsList(payload) {
        this.payload = payload;
        this.type = STORE_FRIENDS_LIST;
    }
    return StoreFriendsList;
}());

var GetFriendsFail = /** @class */ (function () {
    function GetFriendsFail(payload) {
        this.payload = payload;
        this.type = GET_FRIENDS_FAIL;
    }
    return GetFriendsFail;
}());

var UpdateFriendOnlineStatus = /** @class */ (function () {
    function UpdateFriendOnlineStatus(payload) {
        this.payload = payload;
        this.type = UPDATE_FRIEND_ONLINE_STATUS;
    }
    return UpdateFriendOnlineStatus;
}());

var UpdateFriendChatStatus = /** @class */ (function () {
    function UpdateFriendChatStatus(payload) {
        this.payload = payload;
        this.type = UPDATE_FRIEND_CHAT_STATUS;
    }
    return UpdateFriendChatStatus;
}());

var ClearStore = /** @class */ (function () {
    function ClearStore() {
        this.type = CLEAR_STORE;
    }
    return ClearStore;
}());



/***/ }),

/***/ "./src/app/message/store/message.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/message/store/message.actions.ts ***!
  \**************************************************/
/*! exports provided: FETCH_ALL_MESSAGES, READ_ALL_MESSAGES, STORE_ALL_MESSAGES, PUSH_NEW_MESSAGES, GET_MESSAGES_FAIL, ACCEPT_FRIEND, REJECT_FRIEND, CLEAR_STORE, FetchAllMessages, ReadAllMessages, StoreAllMessages, PushNewMessages, GetMessagesFail, AcceptFriend, RejectFriend, ClearStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_MESSAGES", function() { return FETCH_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READ_ALL_MESSAGES", function() { return READ_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_ALL_MESSAGES", function() { return STORE_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSH_NEW_MESSAGES", function() { return PUSH_NEW_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MESSAGES_FAIL", function() { return GET_MESSAGES_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_FRIEND", function() { return ACCEPT_FRIEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_FRIEND", function() { return REJECT_FRIEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchAllMessages", function() { return FetchAllMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadAllMessages", function() { return ReadAllMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreAllMessages", function() { return StoreAllMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNewMessages", function() { return PushNewMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMessagesFail", function() { return GetMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptFriend", function() { return AcceptFriend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectFriend", function() { return RejectFriend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearStore", function() { return ClearStore; });
var FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES';
var READ_ALL_MESSAGES = 'READ_ALL_MESSAGES';
var STORE_ALL_MESSAGES = 'STORE_ALL_MESSAGES';
var PUSH_NEW_MESSAGES = 'PUSH_NEW_MESSAGES';
var GET_MESSAGES_FAIL = 'GET_MESSAGES_FAIL';
var ACCEPT_FRIEND = 'ACCEPT_FRIEND';
var REJECT_FRIEND = 'REJECT_FRIEND';
var CLEAR_STORE = 'CLEAR_STORE';
var FetchAllMessages = /** @class */ (function () {
    function FetchAllMessages() {
        this.type = FETCH_ALL_MESSAGES;
    }
    return FetchAllMessages;
}());

var ReadAllMessages = /** @class */ (function () {
    function ReadAllMessages() {
        this.type = READ_ALL_MESSAGES;
    }
    return ReadAllMessages;
}());

var StoreAllMessages = /** @class */ (function () {
    function StoreAllMessages(payload) {
        this.payload = payload;
        this.type = STORE_ALL_MESSAGES;
    }
    return StoreAllMessages;
}());

var PushNewMessages = /** @class */ (function () {
    function PushNewMessages(payload) {
        this.payload = payload;
        this.type = PUSH_NEW_MESSAGES;
    }
    return PushNewMessages;
}());

var GetMessagesFail = /** @class */ (function () {
    function GetMessagesFail(payload) {
        this.payload = payload;
        this.type = GET_MESSAGES_FAIL;
    }
    return GetMessagesFail;
}());

var AcceptFriend = /** @class */ (function () {
    function AcceptFriend(payload) {
        this.payload = payload;
        this.type = ACCEPT_FRIEND;
    }
    return AcceptFriend;
}());

var RejectFriend = /** @class */ (function () {
    function RejectFriend(payload) {
        this.payload = payload;
        this.type = REJECT_FRIEND;
    }
    return RejectFriend;
}());

var ClearStore = /** @class */ (function () {
    function ClearStore() {
        this.type = CLEAR_STORE;
    }
    return ClearStore;
}());



/***/ }),

/***/ "./src/app/message/store/message.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/message/store/message.effects.ts ***!
  \**************************************************/
/*! exports provided: MessageEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEffects", function() { return MessageEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _message_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.actions */ "./src/app/message/store/message.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/socket.service */ "./src/app/shared/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SERVER_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server;
var MessageEffects = /** @class */ (function () {
    function MessageEffects(actions$, httpClient, socketService) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.socketService = socketService;
        this.fetchAllMessages = this.actions$.ofType(_message_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_ALL_MESSAGES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.httpClient.get(SERVER_PATH + '/message/getallmessages', {
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error getting messages ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["GET_MESSAGES_FAIL"], payload: resp['error'] });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_ALL_MESSAGES"], payload: resp['msgArray'] });
        }));
        this.readAllMessages = this.actions$.ofType(_message_actions__WEBPACK_IMPORTED_MODULE_4__["READ_ALL_MESSAGES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.httpClient.get(SERVER_PATH + '/message/readallmessages', {
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error reading messages ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["GET_MESSAGES_FAIL"], payload: resp['error'] });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_ALL_MESSAGES"], payload: resp['msgArray'] });
        }));
        this.acceptFriend = this.actions$.ofType(_message_actions__WEBPACK_IMPORTED_MODULE_4__["ACCEPT_FRIEND"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), 
        // switchMap((friendData:{email:string, name:string})=>{
        //   return this.httpClient.patch(SERVER_PATH+'/message/acceptfriend',JSON.stringify(friendData),
        //           {
        //             headers:{'Content-Type':'application/json'},
        //             observe:'body',
        //             responseType:'json'
        //           }).pipe(
        //           catchError(err =>{
        //             console.log("error friend request",err);
        //             return of(err);
        //           })
        //         )
        // }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (friendData) {
            return _this.httpClient.patch(SERVER_PATH + '/message/acceptfriend', JSON.stringify(friendData), {
                headers: { 'Content-Type': 'application/json' },
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
                return { resp: resp, friendData: friendData };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error friend request", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (pair) {
            var resp = pair.resp;
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["GET_MESSAGES_FAIL"], payload: resp['error'] });
            }
            else {
                _this.socketService.friendAccepted(pair.friendData);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_ALL_MESSAGES"], payload: resp['msgArray'] });
            }
        }));
        this.rejectFriend = this.actions$.ofType(_message_actions__WEBPACK_IMPORTED_MODULE_4__["REJECT_FRIEND"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (friendData) {
            return _this.httpClient.patch(SERVER_PATH + '/message/rejectfriend', JSON.stringify(friendData), {
                headers: { 'Content-Type': 'application/json' },
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
                return { resp: resp, friendData: friendData };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error friend request", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (pair) {
            var resp = pair.resp;
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["GET_MESSAGES_FAIL"], payload: resp['error'] });
            }
            else {
                _this.socketService.friendRejected(pair.friendData);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _message_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_ALL_MESSAGES"], payload: resp['msgArray'] });
            }
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], MessageEffects.prototype, "fetchAllMessages", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], MessageEffects.prototype, "readAllMessages", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], MessageEffects.prototype, "acceptFriend", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], MessageEffects.prototype, "rejectFriend", void 0);
    MessageEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], MessageEffects);
    return MessageEffects;
}());



/***/ }),

/***/ "./src/app/message/store/message.reducers.ts":
/*!***************************************************!*\
  !*** ./src/app/message/store/message.reducers.ts ***!
  \***************************************************/
/*! exports provided: messageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageReducer", function() { return messageReducer; });
/* harmony import */ var _message_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.actions */ "./src/app/message/store/message.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    messages: new Array(),
    getMessagesFailure: null
};
function messageReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _message_actions__WEBPACK_IMPORTED_MODULE_0__["STORE_ALL_MESSAGES"]:
            return __assign({}, state, { messages: action.payload.slice(), getMessagesFailure: null });
        case _message_actions__WEBPACK_IMPORTED_MODULE_0__["PUSH_NEW_MESSAGES"]:
            var newMessages = state.messages.slice().concat(action.payload.slice());
            return __assign({}, state, { messages: newMessages.slice() });
        case _message_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MESSAGES_FAIL"]:
            return __assign({}, state, { getMessagesFailure: action.payload });
        case _message_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_STORE"]:
            return __assign({}, state, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(avatar, name, dob, email, address, hobbies, password, friends, friends_requests, online, status) {
        this.avatar = avatar;
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.address = address;
        this.hobbies = hobbies;
        this.password = password;
        this.friends = friends;
        this.friends_requests = friends_requests;
        this.online = online;
        this.status = status;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/search/store/search.actions.ts":
/*!************************************************!*\
  !*** ./src/app/search/store/search.actions.ts ***!
  \************************************************/
/*! exports provided: CLEAR_SEARCH, SEARCH, UPDATE_USERS_LIST, SEARCH_FAIL, SEND_FRIEND_REQUEST, UPDATE_USER, CLEAR_STORE, ClearSearch, Search, UpdateUsersList, UpdateUser, SearchFail, SendFriendRequest, ClearStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SEARCH", function() { return CLEAR_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USERS_LIST", function() { return UPDATE_USERS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FAIL", function() { return SEARCH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_FRIEND_REQUEST", function() { return SEND_FRIEND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearSearch", function() { return ClearSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUsersList", function() { return UpdateUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFail", function() { return SearchFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFriendRequest", function() { return SendFriendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearStore", function() { return ClearStore; });
var CLEAR_SEARCH = 'CLEAR_SEARCH';
var SEARCH = 'SEARCH';
var UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';
var SEARCH_FAIL = 'SEARCH_FAIL';
var SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';
var UPDATE_USER = 'UPDATE_USER';
var CLEAR_STORE = 'CLEAR_STORE';
var ClearSearch = /** @class */ (function () {
    function ClearSearch() {
        this.type = CLEAR_SEARCH;
    }
    return ClearSearch;
}());

var Search = /** @class */ (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SEARCH;
    }
    return Search;
}());

var UpdateUsersList = /** @class */ (function () {
    function UpdateUsersList(payload) {
        this.payload = payload;
        this.type = UPDATE_USERS_LIST;
    }
    return UpdateUsersList;
}());

var UpdateUser = /** @class */ (function () {
    function UpdateUser(payload) {
        this.payload = payload;
        this.type = UPDATE_USER;
    }
    return UpdateUser;
}());

var SearchFail = /** @class */ (function () {
    function SearchFail(payload) {
        this.payload = payload;
        this.type = SEARCH_FAIL;
    }
    return SearchFail;
}());

var SendFriendRequest = /** @class */ (function () {
    function SendFriendRequest(payload) {
        this.payload = payload;
        this.type = SEND_FRIEND_REQUEST;
    }
    return SendFriendRequest;
}());

var ClearStore = /** @class */ (function () {
    function ClearStore() {
        this.type = CLEAR_STORE;
    }
    return ClearStore;
}());



/***/ }),

/***/ "./src/app/shared/safeHtml.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/safeHtml.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/server.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/server.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ServerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerInterceptor", function() { return ServerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerInterceptor = /** @class */ (function () {
    function ServerInterceptor(store) {
        this.store = store;
    }
    ServerInterceptor.prototype.intercept = function (req, next) {
        return this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (authState) {
            // console.log("token fetched is "+ authState.token)
            if (authState.authenticated && authState.token) {
                var clonedReq = req.clone({ headers: req.headers.append('x-auth', authState.token) });
                return next.handle(clonedReq);
            }
            else
                return next.handle(req);
        }));
    };
    ServerInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ServerInterceptor);
    return ServerInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/socket.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/socket.service.ts ***!
  \******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server;
var SocketService = /** @class */ (function () {
    function SocketService(store) {
        this.store = store;
    }
    SocketService.prototype.initSocket = function () {
        var token = '';
        this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (auth) {
            if (!auth.authenticated)
                return console.log('Not authenticated. Socket not initialized. Please sign in!');
            token = auth.token;
        });
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
        this.socket.on('connect', (function () {
            if (!token)
                return;
            this.socket
                .emit('authenticate', { token: token }) //send the jwt
                .on('authenticated', function () {
                console.log('socket authenticated');
            })
                .on('unauthorized', function (msg) {
                console.log("unauthorized: " + JSON.stringify(msg.data));
                throw new Error(msg.data.type);
            });
        }).bind(this)); // this keyword for global scope is not within the scope of a local callback
    };
    SocketService.prototype.friendAccepted = function (friend) {
        this.socket.emit('friendAccepted', friend);
    };
    SocketService.prototype.friendRejected = function (friend) {
        this.socket.emit('friendRejected', friend);
    };
    SocketService.prototype.friendRequestSent = function (friend) {
        this.socket.emit('friendRequestSent', friend);
    };
    SocketService.prototype.onNewMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('newMessage', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onFriendOnlineStatusChanged = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('friendOnlineStatus', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onNewChatMessageReceived = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('newChatMessageReceived', function (chat) { return observer.next(chat); });
        });
    };
    SocketService.prototype.sendChatMessageTo = function (friend, chatItem) {
        this.socket.emit('sendChatMessageTo', friend, chatItem);
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth_store_auth_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/store/auth.reducers */ "./src/app/auth/store/auth.reducers.ts");

var reducers = {
    auth: _auth_store_auth_reducers__WEBPACK_IMPORTED_MODULE_0__["authReducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    server: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alvinvoo/MEAN/chatwall/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map