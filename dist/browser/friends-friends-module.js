(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friends-friends-module"],{

/***/ "./src/app/friends/chats/chats.component.css":
/*!***************************************************!*\
  !*** ./src/app/friends/chats/chats.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatarea{\n  height: 75vh\n}\n\n.chatmessages{\n  flex-grow: 1;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  border: 1px solid rgba(0,0,0,0.4);\n}\n\n.messagetouser{\n  position: -webkit-sticky;\n  position: sticky;\n  top: 1em;\n  text-align: center;\n  font-size: 80%;\n}\n\n/*.chatmessages ol{\n  list-style-type: none;\n  padding: 1vw 1vh;\n  margin: 0;\n}\n\n.chatmessages ol > li > h4{\n  line-height: 0;\n}*/\n\n.chatmessages .mat-list{\n  padding: 1vw 1vh;\n  margin: 0;\n  height: initial;\n}\n\n.chatmessages .mat-list .mat-list-item{\n  height: initial;\n  margin: 1em auto;\n}\n\n.chatmessages .mat-line {\n  white-space: normal;\n}\n\n.chatfooter{\n  flex-shrink: 0;\n}\n\n.mat-raised-button{\n  margin: 1em;\n}\n"

/***/ }),

/***/ "./src/app/friends/chats/chats.component.html":
/*!****************************************************!*\
  !*** ./src/app/friends/chats/chats.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatarea\" fxLayout=\"column\" fxLayoutGap=\"1vh\">\n  <div class=\"chatmessages\" #chatmessages>\n    <p class=\"messagetouser\">{{messageToUser}}</p>\n    <mat-list>\n      <mat-list-item *ngFor=\"let chat of (curChatList|async)\" [ngStyle]=\"{'text-align':chat.direction==='FROM'?'right':'left'}\">\n        <h4 matLine *ngIf=\"chat.direction==='TO';else friendName\" style=\"font-weight: bold\">{{userName}}:</h4>\n        <ng-template #friendName>\n          <h4 matLine style=\"font-weight: bold\">{{friendSelected.name}}:</h4>\n        </ng-template>\n        <p matLine>\n          <span>{{chat.content}}</span>\n        </p>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"chatfooter\">\n    <form (ngSubmit)=\"onSendChatMessage(f)\" #f=\"ngForm\" fxLayout=\"row\">\n      <mat-form-field  fxFlex=\"1 0 auto\">\n        <input matInput ngModel name=\"chatMessage\" type=\"text\" placeholder=\"Enter a message here\" autocomplete=\"off\" emptyStringCheck #chatInput=\"ngModel\">\n        <mat-error *ngIf=\"chatInput.invalid\">Please enter proper value.</mat-error>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!friendAvailable||chatInput.invalid\">Send</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/friends/chats/chats.component.ts":
/*!**************************************************!*\
  !*** ./src/app/friends/chats/chats.component.ts ***!
  \**************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_chats_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/chats.actions */ "./src/app/friends/chats/store/chats.actions.ts");
/* harmony import */ var _store_friends_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/friends.actions */ "./src/app/friends/store/friends.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/socket.service */ "./src/app/shared/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatsComponent = /** @class */ (function () {
    // getting a reference to the items/messages within the list
    // @ViewChildren(MatListItem, { read: ElementRef }) chatListItems: QueryList<MatListItem>;
    function ChatsComponent(store, socketService, renderer) {
        this.store = store;
        this.socketService = socketService;
        this.renderer = renderer;
        this.messageToUser = 'Select an available friend to start chatting!';
        this.friendAvailable = false;
    }
    ChatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('auth', 'name').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (name) { return _this.userName = name; });
        this.curChatList = this.store.select('chats', 'curChatList');
        this.friendSelectedSub = this.store.select('chats', 'friendSelected').subscribe(function (friendSelected) {
            if (!friendSelected)
                return;
            _this.friendSelected = friendSelected;
            if (friendSelected.online) {
                _this.messageToUser = "You are chatting with " + friendSelected.name + ".";
                _this.friendAvailable = true;
            }
            else {
                _this.messageToUser = friendSelected.name + " is currently offline.";
                _this.friendAvailable = false;
            }
            _this.scrollToBottom();
        });
        this.socketSub = this.socketService.onNewChatMessageReceived().subscribe(function (chatItem) {
            console.log('chat received ', chatItem);
            //if a friend is selected and there's message from the selected friend, update the chat array
            if (_this.friendSelected && _this.friendSelected.email === chatItem.email && _this.friendSelected.name === chatItem.name) {
                _this.store.dispatch(new _store_chats_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateChatArray"](chatItem));
                _this.scrollToBottom();
            }
            else
                _this.store.dispatch(new _store_friends_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateFriendChatStatus"]({ email: chatItem.email, name: chatItem.name, status: 'NEW' }));
            //else update the 'new chat status' for this friend
        });
    };
    // ngAfterViewInit(){
    //   this.chatListItems.changes.subscribe(
    //     (ele) => {
    //       const parent = this.renderer.parentNode(ele.first.nativeElement);
    //       console.log('ele parent ',parent);
    //     }
    //   )
    // }
    ChatsComponent.prototype.scrollToBottom = function () {
        var _this = this;
        //needs some delay in getting the real scroll height value
        if (this.timeoutid)
            clearTimeout(this.timeoutid);
        this.timeoutid = setTimeout(function () {
            var divEle = _this.chatList.nativeElement; //this may crap in SSR
            console.log('chatlist change  ', divEle.scrollHeight, ' : ', divEle.scrollWidth);
            // this.getMatList.setScrollTop(realscr);
            _this.renderer.setProperty(divEle, 'scrollTop', divEle.scrollHeight);
        }, 200);
    };
    ChatsComponent.prototype.onSendChatMessage = function (myForm) {
        var chat = myForm.value.chatMessage;
        var newChatItem = { content: chat, created: new Date(Date.now()), direction: 'TO' };
        //push this chat to cur chat state
        this.store.dispatch(new _store_chats_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateChatArray"](newChatItem));
        if (this.friendSelected.online)
            this.socketService.sendChatMessageTo({ email: this.friendSelected.email, name: this.friendSelected.name }, newChatItem);
        myForm.reset();
        this.scrollToBottom();
    };
    ChatsComponent.prototype.ngOnDestroy = function () {
        if (this.friendSelectedSub)
            this.friendSelectedSub.unsubscribe();
        if (this.socketSub)
            this.socketSub.unsubscribe();
        if (this.timeoutid)
            clearTimeout(this.timeoutid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatmessages', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatsComponent.prototype, "chatList", void 0);
    ChatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./chats.component.html */ "./src/app/friends/chats/chats.component.html"),
            styles: [__webpack_require__(/*! ./chats.component.css */ "./src/app/friends/chats/chats.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ChatsComponent);
    return ChatsComponent;
}());



/***/ }),

/***/ "./src/app/friends/chats/store/chats.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/friends/chats/store/chats.effects.ts ***!
  \******************************************************/
/*! exports provided: ChatsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsEffects", function() { return ChatsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _chats_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chats.actions */ "./src/app/friends/chats/store/chats.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
var ChatsEffects = /** @class */ (function () {
    function ChatsEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.selectFriend = this.actions$.ofType(_chats_actions__WEBPACK_IMPORTED_MODULE_4__["SELECT_FRIEND"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (friend) {
            return _this.httpClient.get(SERVER_PATH + '/friends/readallchats/' + friend.email + '/' + friend.name, {
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error reading chats ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _chats_actions__WEBPACK_IMPORTED_MODULE_4__["READ_CHAT_FAIL"], payload: resp['error'] });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _chats_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_CHAT_ARRAY"], payload: resp['chat'] });
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ChatsEffects.prototype, "selectFriend", void 0);
    ChatsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatsEffects);
    return ChatsEffects;
}());



/***/ }),

/***/ "./src/app/friends/chats/store/chats.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/friends/chats/store/chats.reducers.ts ***!
  \*******************************************************/
/*! exports provided: chatsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatsReducer", function() { return chatsReducer; });
/* harmony import */ var _chats_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.actions */ "./src/app/friends/chats/store/chats.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    friendSelected: null,
    curChatList: new Array(),
    read_chat_fail: null
};
function chatsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_chats_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_FRIEND"]):
            return __assign({}, state, { friendSelected: action.payload });
        case (_chats_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SELECTED_FRIEND_STATUS"])://only update status if this is the selected friend
            if (!state.friendSelected || state.friendSelected.email !== action.payload.email || state.friendSelected.name !== action.payload.name)
                return state;
            else {
                return __assign({}, state, { friendSelected: action.payload });
            }
        case (_chats_actions__WEBPACK_IMPORTED_MODULE_0__["STORE_CHAT_ARRAY"]):
            return __assign({}, state, { curChatList: action.payload, read_chat_fail: null });
        case (_chats_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CHAT_ARRAY"]):
            var newChatList = state.curChatList.concat([action.payload]);
            return __assign({}, state, { curChatList: newChatList });
        case (_chats_actions__WEBPACK_IMPORTED_MODULE_0__["READ_CHAT_FAIL"]):
            return __assign({}, state, { read_chat_fail: action.payload });
        case (_chats_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_STORE"]):
            return __assign({}, state, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/friends/friends-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/friends/friends-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FriendsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsRoutingModule", function() { return FriendsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friends_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends.component */ "./src/app/friends/friends.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var friendsRoutes = [
    { path: '', component: _friends_component__WEBPACK_IMPORTED_MODULE_2__["FriendsComponent"] }
];
var FriendsRoutingModule = /** @class */ (function () {
    function FriendsRoutingModule() {
    }
    FriendsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(friendsRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], FriendsRoutingModule);
    return FriendsRoutingModule;
}());



/***/ }),

/***/ "./src/app/friends/friends.component.css":
/*!***********************************************!*\
  !*** ./src/app/friends/friends.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".friendslist{\n  height: 70vh;\n  overflow: auto;\n  padding: 2vw 0;\n}\n\nmat-card{\n  /*display: inline-block;*/\n  padding: 8px;\n  border-radius: 6px;\n  text-align: left;\n  margin-bottom: 10px;\n  max-width: 8em;\n  cursor: pointer;\n}\n\nmat-card-header{\n  display: inline-flex;\n}\n\nmat-card-title{\n  /*width: 3.8em;*/\n  word-wrap: break-word;\n  margin-bottom: 0.6em;\n}\n\nmat-card-subtitle{\n  margin-top: 0px;\n  margin-bottom: 8px;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/friends/friends.component.html":
/*!************************************************!*\
  !*** ./src/app/friends/friends.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutGap=\"1vh\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"15vw\" class=\"friendslist\" fxLayout=\"column\" fxLayoutAlign=\"start end\">\n    <p class=\"error\" *ngIf=\"friendsErrorState\">{{friendsErrorState|async}}</p>\n    <mat-card *ngFor=\"let friend of friendsListState|async\"\n    [ngStyle]=\"{'background-color':friend.online?'lightgreen':'indianred'}\"\n    [ngClass]=\"{'blink_me':friend.status==='NEW'}\"\n    (click)=\"onFriendSelected(friend,$event)\">\n      <mat-card-header>\n        <img mat-card-avatar alt={{friend.name}} src={{friend.avatar}}>\n        <mat-card-title>{{friend.name}}</mat-card-title>\n        <mat-card-subtitle>{{convertToAge(friend.dob)}}</mat-card-subtitle>\n        <mat-card-subtitle><i>{{checkOnline(friend.online)}}</i></mat-card-subtitle>\n      </mat-card-header>\n    </mat-card>\n  </div>\n  <!-- <mat-divider [vertical]=\"true\"></mat-divider> -->\n  <div fxFlex=\"0 1 60vw\">\n    <app-chats></app-chats>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/friends/friends.component.ts":
/*!**********************************************!*\
  !*** ./src/app/friends/friends.component.ts ***!
  \**********************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_friends_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/friends.actions */ "./src/app/friends/store/friends.actions.ts");
/* harmony import */ var _chats_store_chats_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats/store/chats.actions */ "./src/app/friends/chats/store/chats.actions.ts");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/socket.service */ "./src/app/shared/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(store, socketService, renderer) {
        this.store = store;
        this.socketService = socketService;
        this.renderer = renderer;
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_friends_actions__WEBPACK_IMPORTED_MODULE_2__["GetFriendsList"]());
        this.friendsListState = this.store.select('friends', 'friendsList');
        this.friendsErrorState = this.store.select('friends', 'friends_fail_message');
        //only need to listen to friend online status change here
        //since will get fresh friends list everytime friends component init again
        this.userSub = this.socketService.onFriendOnlineStatusChanged().subscribe(function (friend) {
            console.log('friends online status', friend);
            _this.store.dispatch(new _store_friends_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateFriendOnlineStatus"](friend));
            //friend list wont be updated if no such friend is found
            _this.store.dispatch(new _chats_store_chats_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateSelectedFriendStatus"]({ email: friend.email, name: friend.name, online: friend.online }));
        });
    };
    FriendsComponent.prototype.convertToAge = function (date) {
        var age = new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
        return age;
    };
    FriendsComponent.prototype.checkOnline = function (online) {
        if (online)
            return 'online';
        else
            return 'offline';
    };
    FriendsComponent.prototype.onFriendSelected = function (friend, event) {
        // console.log('selected:',event,' ',event.target);
        var matCard = this.getToMatCardRootEle(event.target);
        if (matCard) {
            if (this.prev_selected_matCard)
                this.renderer.removeStyle(this.prev_selected_matCard, 'border');
            this.renderer.setStyle(matCard, 'border', '.2em inset blueviolet');
            this.prev_selected_matCard = matCard;
        }
        this.store.dispatch(new _chats_store_chats_actions__WEBPACK_IMPORTED_MODULE_3__["SelectFriend"]({ email: friend.email, name: friend.name, online: friend.online }));
        //---- need to update the status from NEW to READ
        if (friend.status === 'NEW')
            this.store.dispatch(new _store_friends_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateFriendChatStatus"]({ email: friend.email, name: friend.name, status: 'READ' }));
    };
    FriendsComponent.prototype.getToMatCardRootEle = function (ele) {
        var rootMatCard;
        var max_try = 0; //i dont want this to become infinite loop! its just aesthetic fix
        if (!ele)
            return;
        while (ele.tagName !== 'MAT-CARD' && max_try <= 6) {
            ele = this.renderer.parentNode(ele);
            max_try++;
        }
        if (ele.tagName === 'MAT-CARD')
            return ele;
        else
            return;
    };
    FriendsComponent.prototype.ngOnDestroy = function () {
        if (this.userSub)
            this.userSub.unsubscribe();
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/friends/friends.module.ts":
/*!*******************************************!*\
  !*** ./src/app/friends/friends.module.ts ***!
  \*******************************************/
/*! exports provided: FriendsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsModule", function() { return FriendsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friends_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.component */ "./src/app/friends/friends.component.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/friends/chats/chats.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _friends_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./friends-routing.module */ "./src/app/friends/friends-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _chats_store_chats_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chats/store/chats.reducers */ "./src/app/friends/chats/store/chats.reducers.ts");
/* harmony import */ var _store_friends_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/friends.reducers */ "./src/app/friends/store/friends.reducers.ts");
/* harmony import */ var _store_friends_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/friends.effects */ "./src/app/friends/store/friends.effects.ts");
/* harmony import */ var _chats_store_chats_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chats/store/chats.effects */ "./src/app/friends/chats/store/chats.effects.ts");
/* harmony import */ var _shared_emptyStringCheck_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/emptyStringCheck.directive */ "./src/app/shared/emptyStringCheck.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FriendsModule = /** @class */ (function () {
    function FriendsModule() {
    }
    FriendsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _friends_component__WEBPACK_IMPORTED_MODULE_1__["FriendsComponent"],
                _chats_chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"],
                _shared_emptyStringCheck_directive__WEBPACK_IMPORTED_MODULE_11__["EmptyStringCheckDirective"]
            ],
            imports: [
                _friends_routing_module__WEBPACK_IMPORTED_MODULE_4__["FriendsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('chats', _chats_store_chats_reducers__WEBPACK_IMPORTED_MODULE_7__["chatsReducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('friends', _store_friends_reducers__WEBPACK_IMPORTED_MODULE_8__["friendsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_friends_effects__WEBPACK_IMPORTED_MODULE_9__["FriendsEffects"], _chats_store_chats_effects__WEBPACK_IMPORTED_MODULE_10__["ChatsEffects"]])
            ]
        })
    ], FriendsModule);
    return FriendsModule;
}());



/***/ }),

/***/ "./src/app/friends/store/friends.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/friends/store/friends.effects.ts ***!
  \**************************************************/
/*! exports provided: FriendsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsEffects", function() { return FriendsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _friends_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./friends.actions */ "./src/app/friends/store/friends.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
var FriendsEffects = /** @class */ (function () {
    function FriendsEffects(actions$, httpClient) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.fetchFriendsList = this.actions$.ofType(_friends_actions__WEBPACK_IMPORTED_MODULE_4__["GET_FRIENDS_LIST"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.httpClient.get(SERVER_PATH + '/friends/getallfriends', {
                observe: 'body',
                responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                console.log("error getting friends ", err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _friends_actions__WEBPACK_IMPORTED_MODULE_4__["GET_FRIENDS_FAIL"], payload: resp['error'] });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: _friends_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_FRIENDS_LIST"], payload: resp['friends'] });
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], FriendsEffects.prototype, "fetchFriendsList", void 0);
    FriendsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FriendsEffects);
    return FriendsEffects;
}());



/***/ }),

/***/ "./src/app/friends/store/friends.reducers.ts":
/*!***************************************************!*\
  !*** ./src/app/friends/store/friends.reducers.ts ***!
  \***************************************************/
/*! exports provided: friendsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendsReducer", function() { return friendsReducer; });
/* harmony import */ var _friends_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends.actions */ "./src/app/friends/store/friends.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    friendsList: new Array(),
    friends_fail_message: null
};
function friendsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_friends_actions__WEBPACK_IMPORTED_MODULE_0__["STORE_FRIENDS_LIST"]):
            return __assign({}, state, { friendsList: action.payload.slice(), friends_fail_message: null });
        case (_friends_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FRIENDS_FAIL"]):
            return __assign({}, state, { friends_fail_message: action.payload });
        case (_friends_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FRIEND_ONLINE_STATUS"]):
            var oldList = state.friendsList.slice();
            var oldFriendInd = oldList.findIndex(function (friend) { return friend.email === action.payload.email && friend.name === action.payload.name; });
            if (oldFriendInd > -1)
                oldList[oldFriendInd].online = action.payload.online;
            return __assign({}, state, { friendsList: oldList.slice() });
        case (_friends_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FRIEND_CHAT_STATUS"]):
            var statusList = state.friendsList.slice();
            var oldInd = statusList.findIndex(function (friend) { return friend.email === action.payload.email && friend.name === action.payload.name; });
            if (oldInd > -1)
                statusList[oldInd].status = action.payload.status;
            return __assign({}, state, { friendsList: statusList.slice() });
        case (_friends_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_STORE"]):
            return __assign({}, state, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/emptyStringCheck.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/emptyStringCheck.directive.ts ***!
  \******************************************************/
/*! exports provided: EmptyStringCheckDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyStringCheckDirective", function() { return EmptyStringCheckDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EmptyStringCheckDirective = /** @class */ (function () {
    function EmptyStringCheckDirective() {
    }
    EmptyStringCheckDirective_1 = EmptyStringCheckDirective;
    EmptyStringCheckDirective.prototype.validate = function (control) {
        if (!control.value)
            return null;
        if (!control.value.trim()) {
            return { 'emptyStringCheck': 'string is empty!' };
        }
        else
            return null;
    };
    EmptyStringCheckDirective = EmptyStringCheckDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[emptyStringCheck]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: EmptyStringCheckDirective_1, multi: true }]
        })
    ], EmptyStringCheckDirective);
    return EmptyStringCheckDirective;
    var EmptyStringCheckDirective_1;
}());



/***/ })

}]);
//# sourceMappingURL=friends-friends-module.js.map