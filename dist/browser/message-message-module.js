(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./src/app/message/message-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MessageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageRoutingModule", function() { return MessageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var messageRoutes = [
    { path: '', component: _message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"] }
];
var MessageRoutingModule = /** @class */ (function () {
    function MessageRoutingModule() {
    }
    MessageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(messageRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], MessageRoutingModule);
    return MessageRoutingModule;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button{\n  font-size: 75%;\n  margin-left: 5px;\n}\n\n.inbox{\n  max-width: 80vw;\n  margin: 0 auto;\n  height: 80vh;\n  overflow-y: auto;\n}\n\n.mat-list .mat-list-item{\n  height: auto;\n  line-height: 1.6;\n}\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox\">\n  <mat-list>\n    <mat-list-item *ngFor=\"let msg of messagesState|async\">\n      <p> {{convertDateToString(msg.created)}} - {{msg.content}}</p>\n      <button mat-raised-button color=\"primary\" *ngIf=\"showActiveButton(msg)\" (click)=\"onAcceptFriend(msg)\">Accept</button>\n      <button mat-raised-button color=\"warn\" *ngIf=\"showActiveButton(msg)\" (click)=\"onRejectFriend(msg)\">Reject</button>\n      <button mat-raised-button disabled *ngIf=\"showAcceptedButton(msg)\">Accepted!</button>\n      <button mat-raised-button disabled *ngIf=\"showRejectedButton(msg)\">Rejected!</button>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_message_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/message.actions */ "./src/app/message/store/message.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(store) {
        this.store = store;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('message component init');
        this.messagesState = this.store.select('message', 'messages');
        this.timeoutid = setTimeout(function () {
            _this.store.dispatch(new _store_message_actions__WEBPACK_IMPORTED_MODULE_2__["ReadAllMessages"]());
        }, 2000);
    };
    MessageComponent.prototype.convertDateToString = function (date) {
        return (new Date(date)).toString().split('GMT')[0];
    };
    MessageComponent.prototype.showActiveButton = function (msg) {
        return msg.type === 'REQ' && msg.value === 'UNDECIDE';
    };
    MessageComponent.prototype.showAcceptedButton = function (msg) {
        return msg.type === 'REQ' && msg.value === 'ACCEPT';
    };
    MessageComponent.prototype.showRejectedButton = function (msg) {
        return msg.type === 'REQ' && msg.value === 'REJECT';
    };
    MessageComponent.prototype.onAcceptFriend = function (msg) {
        this.store.dispatch(new _store_message_actions__WEBPACK_IMPORTED_MODULE_2__["AcceptFriend"]({ email: msg.from.email, name: msg.from.name }));
    };
    MessageComponent.prototype.onRejectFriend = function (msg) {
        this.store.dispatch(new _store_message_actions__WEBPACK_IMPORTED_MODULE_2__["RejectFriend"]({ email: msg.from.email, name: msg.from.name }));
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        if (this.timeoutid)
            clearTimeout(this.timeoutid);
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-routing.module */ "./src/app/message/message-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"]
            ],
            imports: [
                _message_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            providers: []
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ })

}]);
//# sourceMappingURL=message-message-module.js.map