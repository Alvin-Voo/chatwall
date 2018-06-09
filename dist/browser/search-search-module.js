(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search-detail/search-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/search/search-detail/search-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button{\n  align-self: flex-end;\n}\n.searchdetail{\n  padding: 0 10vw;\n}\n"

/***/ }),

/***/ "./src/app/search/search-detail/search-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/search/search-detail/search-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"15px\" class=\"searchdetail\">\n  <p class=\"error\" *ngIf=\"!userInfo || !userInfo.email; else userFound\">User not found.</p>\n\n  <ng-template #userFound>\n    <img src=\"{{userInfo.avatar}}\" alt=\"profile picture\" height=\"148px\" width=\"148px\">\n    <mat-list>\n      <mat-list-item><h4>Name: </h4> {{userInfo.name}}</mat-list-item>\n      <mat-list-item><h4>Email: </h4> {{userInfo.email}}</mat-list-item>\n      <mat-list-item><h4>DOB: </h4> {{convertToDateString(userInfo.dob)}}</mat-list-item>\n      <mat-list-item><h4>Address: </h4> {{userInfo.address}}</mat-list-item>\n      <mat-list-item><h4>Hobbies: </h4> {{userInfo.hobbies}}</mat-list-item>\n      <mat-list-item *ngIf=\"userInfo.friends.length>0\"><h4>Friend(s): </h4>\n        <mat-chip-list>\n          <mat-chip *ngFor=\"let friend of userInfo.friends\" color=\"accent\" selected=\"true\">{{friend.name}}</mat-chip>\n        </mat-chip-list>\n      </mat-list-item>\n    </mat-list>\n    <br>\n    <br>\n    <button mat-raised-button color=\"primary\" [disabled]=\"friendRequestToggle\" (click)=\"sendFriendRequest()\">{{friendRequestStr}}</button>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search-detail/search-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/search/search-detail/search-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDetailComponent", function() { return SearchDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_search_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/search.actions */ "./src/app/search/store/search.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchDetailComponent = /** @class */ (function () {
    function SearchDetailComponent(route, store) {
        this.route = route;
        this.store = store;
        this.friendRequestStr = 'Send friend\'s request';
        this.friendRequestToggle = false;
    }
    SearchDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubs = this.route.params.subscribe(function (params) {
            var index = Number(params['index']);
            //clear this userInfo if index is null
            if (index === null || index === undefined)
                return _this.userInfo = null;
            _this.friendRequestStr = 'Send friend\'s request';
            _this.friendRequestToggle = false;
            _this.store.select('search', 'usersList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (usersList) {
                if (usersList.length > 0 && usersList[index]) {
                    _this.userInfo = usersList[index];
                    _this.store.select('auth', 'email').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (myemail) {
                        //check if this user is me
                        if (_this.userInfo.email === myemail)
                            return _this.disableFriendRequest('Eh?? Si moi!');
                        //check if this user's friend including me
                        var alreadyFriend = _this.userInfo.friends.filter(function (user) { return user.email === myemail; });
                        if (alreadyFriend.length > 0)
                            _this.disableFriendRequest('Mon Ami(e)!!');
                        //check if this user's friend requests has me
                        var reqUserSent = _this.userInfo.friends_requests.filter(function (user) { return user.email === myemail; });
                        if (reqUserSent.length > 0)
                            _this.disableFriendRequest('Friend\'s request sent');
                    });
                }
            });
        });
    };
    SearchDetailComponent.prototype.convertToDateString = function (date) {
        return (new Date(date)).toDateString();
    };
    SearchDetailComponent.prototype.sendFriendRequest = function () {
        this.store.dispatch(new _store_search_actions__WEBPACK_IMPORTED_MODULE_3__["SendFriendRequest"]({ email: this.userInfo.email, name: this.userInfo.name }));
        this.disableFriendRequest('Friend\'s request sent');
    };
    SearchDetailComponent.prototype.disableFriendRequest = function (buttonStr) {
        this.friendRequestStr = buttonStr;
        this.friendRequestToggle = true;
    };
    SearchDetailComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubs)
            this.routeSubs.unsubscribe();
    };
    SearchDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-detail',
            template: __webpack_require__(/*! ./search-detail.component.html */ "./src/app/search/search-detail/search-detail.component.html"),
            styles: [__webpack_require__(/*! ./search-detail.component.css */ "./src/app/search/search-detail/search-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SearchDetailComponent);
    return SearchDetailComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-detail/search-detail.component */ "./src/app/search/search-detail/search-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var searchRoutes = [
    { path: '', component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"],
        children: [
            { path: ':username/:index', component: _search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_3__["SearchDetailComponent"] }
        ] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(searchRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:link{\n  text-decoration: none\n}\n\na.result{\n  max-width:148px;\n  margin-bottom: 10px;\n  cursor: pointer\n}\n\n.searchresults{\n  height: 80vh;\n  width: 100%;\n  overflow: auto;\n}\n\nform{\n  margin: 2vh auto;\n  max-width: 80vw;\n}\n\n.mat-form-field{\n  width: 60vw;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"1vh\" fxLayoutAlign=\"center\">\n  <form [formGroup]=\"searchForm\">\n    <mat-form-field>\n      <input matInput placeholder=\"Search by user name\" formControlName=\"search\">\n    </mat-form-field>\n    <p class=\"error\" *ngIf=\"searchErrorState\">{{searchErrorState|async}}</p>\n  </form>\n  <div fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center\">\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\" fxFlex=\"20vw\" class=\"searchresults\" fxLayoutAlign=\"start end\">\n      <a class=\"result \"[routerLink]=\"['/main/search/',user.name,i]\" *ngFor=\"let user of (usersListState|async); index as i\">\n        <mat-card>\n          <img mat-card-image height=148px src={{user.avatar}} alt={{user.name}}>\n          <mat-card-content>\n            <h3>Name: {{user.name}}</h3>\n            <p>Age: {{convertToAge(user.dob)}}</p>\n          </mat-card-content>\n        </mat-card>\n      </a>\n    </div>\n    <div fxFlex=\"60vw\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_search_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/search.actions */ "./src/app/search/store/search.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(store) {
        this.store = store;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_search_actions__WEBPACK_IMPORTED_MODULE_4__["ClearSearch"]());
        this.searchFormSub = this.searchForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200)).subscribe(function (value) {
            console.log(value);
            if (value.search == '') {
                _this.store.dispatch(new _store_search_actions__WEBPACK_IMPORTED_MODULE_4__["ClearSearch"]());
            }
            if (value.search)
                _this.store.dispatch(new _store_search_actions__WEBPACK_IMPORTED_MODULE_4__["Search"](value.search));
        });
        this.usersListState = this.store.select('search', 'usersList');
        this.searchErrorState = this.store.select('search', 'search_fail_message');
    };
    SearchComponent.prototype.convertToAge = function (date) {
        var age = new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
        return age;
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        if (this.searchFormSub)
            this.searchFormSub.unsubscribe();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-detail/search-detail.component */ "./src/app/search/search-detail/search-detail.component.ts");
/* harmony import */ var _store_search_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/search.reducers */ "./src/app/search/store/search.reducers.ts");
/* harmony import */ var _store_search_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/search.effects */ "./src/app/search/store/search.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                _search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_5__["SearchDetailComponent"]
            ],
            imports: [
                _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('search', _store_search_reducers__WEBPACK_IMPORTED_MODULE_6__["searchReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_search_effects__WEBPACK_IMPORTED_MODULE_7__["SearchEffects"]])
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/search/store/search.effects.ts":
/*!************************************************!*\
  !*** ./src/app/search/store/search.effects.ts ***!
  \************************************************/
/*! exports provided: SearchEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEffects", function() { return SearchEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.actions */ "./src/app/search/store/search.actions.ts");
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
var SearchEffects = /** @class */ (function () {
    function SearchEffects(actions$, httpClient, socketService) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.socketService = socketService;
        this.search = this.actions$.ofType(_search_actions__WEBPACK_IMPORTED_MODULE_4__["SEARCH"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), //get the search string
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (searchStr) {
            return _this.httpClient.get(SERVER_PATH + '/user/search/' + searchStr, {
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error searching ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.log('search fail resp');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _search_actions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_FAIL"], payload: resp['error'] });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _search_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_USERS_LIST"], payload: resp['users'] });
        }));
        this.sendFriendRequest = this.actions$.ofType(_search_actions__WEBPACK_IMPORTED_MODULE_4__["SEND_FRIEND_REQUEST"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (friendData) {
            return _this.httpClient.post(SERVER_PATH + '/user/search/sendfriendrequest', JSON.stringify(friendData), {
                headers: { 'Content-Type': 'application/json' },
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error friend request", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _search_actions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_FAIL"], payload: resp['error'] });
            }
            else {
                //call the socket service
                var friend = resp['user'];
                _this.socketService.friendRequestSent({ email: friend.email, name: friend.name });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _search_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_USER"], payload: friend });
            }
        }));
    }
    ;
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], SearchEffects.prototype, "search", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], SearchEffects.prototype, "sendFriendRequest", void 0);
    SearchEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], SearchEffects);
    return SearchEffects;
}());



/***/ }),

/***/ "./src/app/search/store/search.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/search/store/search.reducers.ts ***!
  \*************************************************/
/*! exports provided: searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.actions */ "./src/app/search/store/search.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    usersList: new Array(),
    search_fail_message: null
};
function searchReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_search_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_SEARCH"]):
            return __assign({}, state, { usersList: [], search_fail_message: null });
        case (_search_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USERS_LIST"]):
            return __assign({}, state, { usersList: action.payload.slice(), search_fail_message: null });
        case (_search_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"]):
            var updatedUsersList = state.usersList.slice();
            var index = updatedUsersList.findIndex(function (user) {
                return user.email === action.payload.email && user.name === action.payload.name;
            });
            if (index > -1)
                updatedUsersList[index] = action.payload;
            return __assign({}, state, { usersList: updatedUsersList });
        case (_search_actions__WEBPACK_IMPORTED_MODULE_0__["SEARCH_FAIL"]):
            return __assign({}, state, { search_fail_message: action.payload });
        case (_search_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_STORE"]):
            return __assign({}, state, initialState);
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map