(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{EycR:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=function(){},i=e("Ip0R"),r=e("lzlj"),u=e("FVSy"),o=e("21Lb"),s=e("OzfB"),c=e("Fzqc"),d=e("Wf4p"),f=e("6UMx"),m=e("0/Q6"),p=e("seP3"),g=e("LC5p"),h=a.Ma({encapsulation:2,styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],data:{}});function b(l){return a.ib(2,[],null,null)}var v=e("gIcY"),y=e("dJrM"),O=e("dWZg"),C=function(){function l(){}return l.prototype.validate=function(l){return l.value?l.value.trim()?null:{emptyStringCheck:"string is empty!"}:null},l}(),Y=e("b716"),_=e("/VYK"),k=e("bujt"),S=e("UodH"),W=e("lLAP"),w=e("k8mF"),x=e("bPKT"),N=e("t9fZ"),j=e("N0TZ"),L=function(){function l(l,n,e){this.store=l,this.socketService=n,this.renderer=e,this.messageToUser="Select an available friend to start chatting!",this.friendAvailable=!1}return l.prototype.ngOnInit=function(){var l=this;this.store.select("auth","name").pipe(Object(N.a)(1)).subscribe(function(n){return l.userName=n}),this.curChatList=this.store.select("chats","curChatList"),this.friendSelectedSub=this.store.select("chats","friendSelected").subscribe(function(n){n&&(l.friendSelected=n,n.online?(l.messageToUser="You are chatting with "+n.name+".",l.friendAvailable=!0):(l.messageToUser=n.name+" is currently offline.",l.friendAvailable=!1),l.scrollToBottom())}),this.socketSub=this.socketService.onNewChatMessageReceived().subscribe(function(n){console.log("chat received ",n),l.friendSelected&&l.friendSelected.email===n.email&&l.friendSelected.name===n.name?(l.store.dispatch(new w.i(n)),l.scrollToBottom()):l.store.dispatch(new x.i({email:n.email,name:n.name,status:"NEW"}))})},l.prototype.scrollToBottom=function(){var l=this;setTimeout(function(){var n=l.chatList.nativeElement;console.log("chatlist change  ",n.scrollHeight," : ",n.scrollWidth),l.renderer.setProperty(n,"scrollTop",n.scrollHeight)},200)},l.prototype.onSendChatMessage=function(l){var n={content:l.value.chatMessage,created:new Date(Date.now()),direction:"TO"};this.store.dispatch(new w.i(n)),this.friendSelected.online&&this.socketService.sendChatMessageTo({email:this.friendSelected.email,name:this.friendSelected.name},n),l.reset(),this.scrollToBottom()},l.prototype.ngOnDestroy=function(){this.friendSelectedSub&&this.friendSelectedSub.unsubscribe(),this.socketSub&&this.socketSub.unsubscribe()},l}(),M=e("yGQT"),F=a.Ma({encapsulation:0,styles:[[".chatarea[_ngcontent-%COMP%]{height:75vh}.chatmessages[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;scroll-behavior:smooth;border:1px solid rgba(0,0,0,.4)}.messagetouser[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:1em;text-align:center;font-size:80%}.chatmessages[_ngcontent-%COMP%]   .mat-list[_ngcontent-%COMP%]{padding:1vw 1vh;margin:0;height:initial}.chatmessages[_ngcontent-%COMP%]   .mat-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{height:initial;margin:1em auto}.chatmessages[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:normal}.chatfooter[_ngcontent-%COMP%]{flex-shrink:0}.mat-raised-button[_ngcontent-%COMP%]{margin:1em}"]],data:{}});function P(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,2,"h4",[["class","mat-line"],["matLine",""],["style","font-weight: bold"]],null,null,null,null,null)),a.Na(1,16384,[[2,4]],0,d.k,[],null,null),(l()(),a.gb(2,null,["",":"]))],null,function(l,n){l(n,2,0,n.component.userName)})}function T(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,2,"h4",[["class","mat-line"],["matLine",""],["style","font-weight: bold"]],null,null,null,null,null)),a.Na(1,16384,[[2,4]],0,d.k,[],null,null),(l()(),a.gb(2,null,["",":"]))],null,function(l,n){l(n,2,0,n.component.friendSelected.name)})}function I(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,12,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==a.Ya(l,3)._handleFocus()&&t),"blur"===n&&(t=!1!==a.Ya(l,3)._handleBlur()&&t),t},f.c,f.b)),a.Na(1,278528,null,0,i.n,[a.r,a.k,a.C],{ngStyle:[0,"ngStyle"]},null),a.bb(2,{"text-align":0}),a.Na(3,1097728,null,2,m.b,[a.k,[2,m.e]],null,null),a.eb(603979776,2,{_lines:1}),a.eb(335544320,3,{_avatar:0}),(l()(),a.Ga(16777216,null,1,1,null,P)),a.Na(7,16384,null,0,i.k,[a.O,a.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),a.Ga(0,[["friendName",2]],2,0,null,T)),(l()(),a.Oa(9,0,null,1,3,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),a.Na(10,16384,[[2,4]],0,d.k,[],null,null),(l()(),a.Oa(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.gb(12,null,["",""]))],function(l,n){l(n,1,0,l(n,2,0,"FROM"===n.context.$implicit.direction?"right":"left")),l(n,7,0,"TO"===n.context.$implicit.direction,a.Ya(n,8))},function(l,n){l(n,0,0,a.Ya(n,3)._avatar,a.Ya(n,3)._avatar),l(n,12,0,n.context.$implicit.content)})}function q(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.Na(1,16384,[[7,4]],0,p.b,[],null,null),(l()(),a.gb(-1,null,["Please enter proper value."]))],null,function(l,n){l(n,0,0,a.Ya(n,1).id)})}function A(l){return a.ib(0,[a.eb(402653184,1,{chatList:0}),(l()(),a.Oa(1,0,null,null,44,"div",[["class","chatarea"],["fxLayout","column"],["fxLayoutGap","1vh"]],null,null,null,null,null)),a.Na(2,737280,null,0,o.e,[s.g,a.k,s.k],{layout:[0,"layout"]},null),a.Na(3,1785856,null,0,o.f,[s.g,a.k,[6,o.e],a.x,c.b,s.k],{gap:[0,"gap"]},null),(l()(),a.Oa(4,0,[[1,0],["chatmessages",1]],null,7,"div",[["class","chatmessages"]],null,null,null,null,null)),(l()(),a.Oa(5,0,null,null,1,"p",[["class","messagetouser"]],null,null,null,null,null)),(l()(),a.gb(6,null,["",""])),(l()(),a.Oa(7,0,null,null,4,"mat-list",[["class","mat-list"]],null,null,null,f.d,f.a)),a.Na(8,49152,null,0,m.a,[],null,null),(l()(),a.Ga(16777216,null,0,2,null,I)),a.Na(10,802816,null,0,i.j,[a.O,a.L,a.q],{ngForOf:[0,"ngForOf"]},null),a.ab(131072,i.b,[a.h]),(l()(),a.Oa(12,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,b,h)),a.Na(13,49152,null,0,g.a,[],null,null),(l()(),a.Oa(14,0,null,null,31,"div",[["class","chatfooter"]],null,null,null,null,null)),(l()(),a.Oa(15,0,null,null,30,"form",[["fxLayout","row"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0,i=l.component;return"submit"===n&&(t=!1!==a.Ya(l,17).onSubmit(e)&&t),"reset"===n&&(t=!1!==a.Ya(l,17).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSendChatMessage(a.Ya(l,17))&&t),t},null,null)),a.Na(16,16384,null,0,v.w,[],null,null),a.Na(17,4210688,[["f",4]],0,v.q,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),a.db(2048,null,v.b,null,[v.q]),a.Na(19,16384,null,0,v.p,[[4,v.b]],null,null),a.Na(20,737280,null,0,o.e,[s.g,a.k,s.k],{layout:[0,"layout"]},null),(l()(),a.Oa(21,0,null,null,21,"mat-form-field",[["class","mat-form-field"],["fxFlex","1 0 auto"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,y.b,y.a)),a.Na(22,737280,null,0,o.b,[s.g,a.k,[3,o.e],s.k,[2,s.a]],{flex:[0,"flex"]},null),a.Na(23,7389184,null,7,p.c,[a.k,a.h,[2,d.f],[2,c.b],[2,p.a],O.a],null,null),a.eb(335544320,4,{_control:0}),a.eb(335544320,5,{_placeholderChild:0}),a.eb(335544320,6,{_labelChild:0}),a.eb(603979776,7,{_errorChildren:1}),a.eb(603979776,8,{_hintChildren:1}),a.eb(603979776,9,{_prefixChildren:1}),a.eb(603979776,10,{_suffixChildren:1}),(l()(),a.Oa(31,0,null,1,9,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["emptyStringCheck",""],["matInput",""],["name","chatMessage"],["ngModel",""],["placeholder","Enter a message here"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Ya(l,32)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Ya(l,32).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Ya(l,32)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Ya(l,32)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Ya(l,39)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Ya(l,39)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Ya(l,39)._onInput()&&t),t},null,null)),a.Na(32,16384,null,0,v.c,[a.C,a.k,[2,v.a]],null,null),a.Na(33,16384,null,0,C,[],null,null),a.db(1024,null,v.l,function(l){return[l]},[C]),a.db(1024,null,v.m,function(l){return[l]},[v.c]),a.Na(36,671744,[["chatInput",4]],0,v.r,[[2,v.b],[6,v.l],[8,null],[6,v.m]],{name:[0,"name"],model:[1,"model"]},null),a.db(2048,null,v.n,null,[v.r]),a.Na(38,16384,null,0,v.o,[[4,v.n]],null,null),a.Na(39,999424,null,0,Y.b,[a.k,O.a,[6,v.n],[2,v.q],[2,v.i],d.b,[8,null],_.a,a.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.db(2048,[[4,4]],p.d,null,[Y.b]),(l()(),a.Ga(16777216,null,5,1,null,q)),a.Na(42,16384,null,0,i.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.Oa(43,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0]],null,null,k.b,k.a)),a.Na(44,180224,null,0,S.b,[a.k,O.a,W.e],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),a.gb(-1,0,["Send"]))],function(l,n){var e=n.component;l(n,2,0,"column"),l(n,3,0,"1vh"),l(n,10,0,a.hb(n,10,0,a.Ya(n,11).transform(e.curChatList))),l(n,20,0,"row"),l(n,22,0,"1 0 auto"),l(n,36,0,"chatMessage",""),l(n,39,0,"Enter a message here","text"),l(n,42,0,a.Ya(n,36).invalid),l(n,44,0,!e.friendAvailable||a.Ya(n,36).invalid,"primary")},function(l,n){l(n,6,0,n.component.messageToUser),l(n,12,0,a.Ya(n,13).vertical?"vertical":"horizontal",a.Ya(n,13).vertical,a.Ya(n,13).inset),l(n,15,0,a.Ya(n,19).ngClassUntouched,a.Ya(n,19).ngClassTouched,a.Ya(n,19).ngClassPristine,a.Ya(n,19).ngClassDirty,a.Ya(n,19).ngClassValid,a.Ya(n,19).ngClassInvalid,a.Ya(n,19).ngClassPending),l(n,21,1,["standard"==a.Ya(n,23).appearance,"fill"==a.Ya(n,23).appearance,"outline"==a.Ya(n,23).appearance,"legacy"==a.Ya(n,23).appearance,a.Ya(n,23)._control.errorState,a.Ya(n,23)._canLabelFloat,a.Ya(n,23)._shouldLabelFloat(),a.Ya(n,23)._hideControlPlaceholder(),a.Ya(n,23)._control.disabled,a.Ya(n,23)._control.autofilled,a.Ya(n,23)._control.focused,"accent"==a.Ya(n,23).color,"warn"==a.Ya(n,23).color,a.Ya(n,23)._shouldForward("untouched"),a.Ya(n,23)._shouldForward("touched"),a.Ya(n,23)._shouldForward("pristine"),a.Ya(n,23)._shouldForward("dirty"),a.Ya(n,23)._shouldForward("valid"),a.Ya(n,23)._shouldForward("invalid"),a.Ya(n,23)._shouldForward("pending")]),l(n,31,1,[a.Ya(n,38).ngClassUntouched,a.Ya(n,38).ngClassTouched,a.Ya(n,38).ngClassPristine,a.Ya(n,38).ngClassDirty,a.Ya(n,38).ngClassValid,a.Ya(n,38).ngClassInvalid,a.Ya(n,38).ngClassPending,a.Ya(n,39)._isServer,a.Ya(n,39).id,a.Ya(n,39).placeholder,a.Ya(n,39).disabled,a.Ya(n,39).required,a.Ya(n,39).readonly,a.Ya(n,39)._ariaDescribedby||null,a.Ya(n,39).errorState,a.Ya(n,39).required.toString()]),l(n,43,0,a.Ya(n,44).disabled||null)})}var E=function(){function l(l,n,e){this.store=l,this.socketService=n,this.renderer=e}return l.prototype.ngOnInit=function(){var l=this;this.store.dispatch(new x.e),this.friendsListState=this.store.select("friends","friendsList"),this.friendsErrorState=this.store.select("friends","friends_fail_message"),this.userSub=this.socketService.onFriendOnlineStatusChanged().subscribe(function(n){console.log("friends online status",n),l.store.dispatch(new x.j(n)),l.store.dispatch(new w.j({email:n.email,name:n.name,online:n.online}))})},l.prototype.convertToAge=function(l){return new Date(Date.now()).getFullYear()-new Date(l).getFullYear()},l.prototype.checkOnline=function(l){return l?"online":"offline"},l.prototype.onFriendSelected=function(l,n){var e=this.getToMatCardRootEle(n.target);e&&(this.prev_selected_matCard&&this.renderer.removeStyle(this.prev_selected_matCard,"border"),this.renderer.setStyle(e,"border",".2em inset blueviolet"),this.prev_selected_matCard=e),this.store.dispatch(new w.f({email:l.email,name:l.name,online:l.online})),"NEW"===l.status&&this.store.dispatch(new x.i({email:l.email,name:l.name,status:"READ"}))},l.prototype.getToMatCardRootEle=function(l){var n=0;if(l){for(;"MAT-CARD"!==l.tagName&&n<=6;)l=this.renderer.parentNode(l),n++;return"MAT-CARD"===l.tagName?l:void 0}},l.prototype.ngOnDestroy=function(){this.userSub&&this.userSub.unsubscribe()},l}(),$=a.Ma({encapsulation:0,styles:[[".friendslist[_ngcontent-%COMP%]{height:70vh;overflow:auto;padding:2vw 0}mat-card[_ngcontent-%COMP%]{padding:8px;border-radius:6px;text-align:left;margin-bottom:10px;max-width:8em;cursor:pointer}mat-card-header[_ngcontent-%COMP%]{display:inline-flex}mat-card-title[_ngcontent-%COMP%]{word-wrap:break-word;margin-bottom:.6em}mat-card-subtitle[_ngcontent-%COMP%]{margin-top:0;margin-bottom:8px}.blink_me[_ngcontent-%COMP%]{-webkit-animation:1s linear infinite blinker;animation:1s linear infinite blinker}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}"]],data:{}});function D(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,2,"p",[["class","error"]],null,null,null,null,null)),(l()(),a.gb(1,null,["",""])),a.ab(131072,i.b,[a.h])],null,function(l,n){var e=n.component;l(n,1,0,a.hb(n,1,0,a.Ya(n,2).transform(e.friendsErrorState)))})}function R(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,19,"mat-card",[["class","mat-card"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.onFriendSelected(l.context.$implicit,e)&&a),a},r.d,r.a)),a.Na(1,278528,null,0,i.i,[a.q,a.r,a.k,a.C],{ngClass:[0,"ngClass"]},null),a.bb(2,{blink_me:0}),a.Na(3,278528,null,0,i.n,[a.r,a.k,a.C],{ngStyle:[0,"ngStyle"]},null),a.bb(4,{"background-color":0}),a.Na(5,49152,null,0,u.a,[],null,null),(l()(),a.Oa(6,0,null,0,13,"mat-card-header",[["class","mat-card-header"]],null,null,null,r.c,r.b)),a.Na(7,49152,null,0,u.d,[],null,null),(l()(),a.Oa(8,0,null,0,1,"img",[["class","mat-card-avatar"],["mat-card-avatar",""]],[[8,"alt",0],[8,"src",4]],null,null,null,null)),a.Na(9,16384,null,0,u.b,[],null,null),(l()(),a.Oa(10,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),a.Na(11,16384,null,0,u.h,[],null,null),(l()(),a.gb(12,null,["",""])),(l()(),a.Oa(13,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),a.Na(14,16384,null,0,u.g,[],null,null),(l()(),a.gb(15,null,["",""])),(l()(),a.Oa(16,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),a.Na(17,16384,null,0,u.g,[],null,null),(l()(),a.Oa(18,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),a.gb(19,null,["",""]))],function(l,n){l(n,1,0,l(n,2,0,"NEW"===n.context.$implicit.status)),l(n,3,0,l(n,4,0,n.context.$implicit.online?"lightgreen":"indianred"))},function(l,n){var e=n.component;l(n,8,0,a.Qa(1,"",n.context.$implicit.name,""),a.Qa(1,"",n.context.$implicit.avatar,"")),l(n,12,0,n.context.$implicit.name),l(n,15,0,e.convertToAge(n.context.$implicit.dob)),l(n,19,0,e.checkOnline(n.context.$implicit.online))})}function z(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,16,"div",[["fxLayout","row"],["fxLayoutAlign","center"],["fxLayoutGap","1vh"]],null,null,null,null,null)),a.Na(1,737280,null,0,o.e,[s.g,a.k,s.k],{layout:[0,"layout"]},null),a.Na(2,1785856,null,0,o.f,[s.g,a.k,[6,o.e],a.x,c.b,s.k],{gap:[0,"gap"]},null),a.Na(3,737280,null,0,o.d,[s.g,a.k,[6,o.e],s.k],{align:[0,"align"]},null),(l()(),a.Oa(4,0,null,null,8,"div",[["class","friendslist"],["fxFlex","15vw"],["fxLayout","column"],["fxLayoutAlign","start end"]],null,null,null,null,null)),a.Na(5,737280,null,0,o.e,[s.g,a.k,s.k],{layout:[0,"layout"]},null),a.Na(6,737280,null,0,o.d,[s.g,a.k,[6,o.e],s.k],{align:[0,"align"]},null),a.Na(7,737280,null,0,o.b,[s.g,a.k,[3,o.e],s.k,[2,s.a]],{flex:[0,"flex"]},null),(l()(),a.Ga(16777216,null,null,1,null,D)),a.Na(9,16384,null,0,i.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.Ga(16777216,null,null,2,null,R)),a.Na(11,802816,null,0,i.j,[a.O,a.L,a.q],{ngForOf:[0,"ngForOf"]},null),a.ab(131072,i.b,[a.h]),(l()(),a.Oa(13,0,null,null,3,"div",[["fxFlex","0 1 60vw"]],null,null,null,null,null)),a.Na(14,737280,null,0,o.b,[s.g,a.k,[3,o.e],s.k,[2,s.a]],{flex:[0,"flex"]},null),(l()(),a.Oa(15,0,null,null,1,"app-chats",[],null,null,null,A,F)),a.Na(16,245760,null,0,L,[M.n,j.a,a.C],null,null)],function(l,n){var e=n.component;l(n,1,0,"row"),l(n,2,0,"1vh"),l(n,3,0,"center"),l(n,5,0,"column"),l(n,6,0,"start end"),l(n,7,0,"15vw"),l(n,9,0,e.friendsErrorState),l(n,11,0,a.hb(n,11,0,a.Ya(n,12).transform(e.friendsListState))),l(n,14,0,"0 1 60vw"),l(n,16,0)},null)}var G=a.Ka("app-friends",E,function(l){return a.ib(0,[(l()(),a.Oa(0,0,null,null,1,"app-friends",[],null,null,null,z,$)),a.Na(1,245760,null,0,E,[M.n,j.a,a.C],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),U=e("t68o"),B=e("zbXB"),V=e("M2Lx"),J=e("eDkP"),Q=e("o3x0"),Z=e("jQLj"),K=e("ZYCi"),H=function(){},X=e("hUWP"),ll=e("V9q+"),nl=e("4c35"),el=e("La40"),al=e("8mMr"),tl=e("SMsm"),il=e("qAlS"),rl=e("/dO6"),ul=e("PCNd"),ol=Object.assign||function(l){for(var n,e=1,a=arguments.length;e<a;e++)for(var t in n=arguments[e])Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);return l},sl={friendSelected:null,curChatList:new Array,read_chat_fail:null};function cl(l,n){switch(void 0===l&&(l=sl),n.type){case w.d:return ol({},l,{friendSelected:n.payload});case w.h:return l.friendSelected&&l.friendSelected.email===n.payload.email&&l.friendSelected.name===n.payload.name?ol({},l,{friendSelected:n.payload}):l;case w.e:return ol({},l,{curChatList:n.payload,read_chat_fail:null});case w.g:var e=l.curChatList.concat([n.payload]);return ol({},l,{curChatList:e});case w.c:return ol({},l,{read_chat_fail:n.payload});case w.a:return ol({},l,sl);default:return l}}var dl=Object.assign||function(l){for(var n,e=1,a=arguments.length;e<a;e++)for(var t in n=arguments[e])Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);return l},fl={friendsList:new Array,friends_fail_message:null};function ml(l,n){switch(void 0===l&&(l=fl),n.type){case x.f:return dl({},l,{friendsList:n.payload.slice(),friends_fail_message:null});case x.c:return dl({},l,{friends_fail_message:n.payload});case x.h:var e=l.friendsList.slice(),a=e.findIndex(function(l){return l.email===n.payload.email&&l.name===n.payload.name});return a>-1&&(e[a].online=n.payload.online),dl({},l,{friendsList:e.slice()});case x.g:var t=l.friendsList.slice(),i=t.findIndex(function(l){return l.email===n.payload.email&&l.name===n.payload.name});return i>-1&&(t[i].status=n.payload.status),dl({},l,{friendsList:t.slice()});case x.a:return dl({},l,fl);default:return l}}var pl=e("mrSG"),gl=e("jYNz"),hl=e("t/Na"),bl=e("AytR"),vl=e("15JJ"),yl=e("9Z1F"),Ol=e("F/XL"),Cl=bl.a.server,Yl=function(){function l(l,n){var e=this;this.actions$=l,this.httpClient=n,this.fetchFriendsList=this.actions$.ofType(x.d).pipe(Object(vl.a)(function(){return e.httpClient.get(Cl+"/friends/getallfriends",{observe:"body",responseType:"json"}).pipe(Object(yl.a)(function(l){return console.log("error getting friends ",l),Object(Ol.a)(l)}))}),Object(vl.a)(function(l){return l instanceof hl.f?Object(Ol.a)({type:x.c,payload:l.error}):Object(Ol.a)({type:x.f,payload:l.friends})}))}return Object(pl.b)([Object(gl.b)(),Object(pl.d)("design:type",Object)],l.prototype,"fetchFriendsList",void 0),l}(),_l=e("67Y/"),kl=bl.a.server,Sl=function(){function l(l,n){var e=this;this.actions$=l,this.httpClient=n,this.selectFriend=this.actions$.ofType(w.d).pipe(Object(_l.a)(function(l){return l.payload}),Object(vl.a)(function(l){return e.httpClient.get(kl+"/friends/readallchats/"+l.email+"/"+l.name,{observe:"body",responseType:"json"}).pipe(Object(yl.a)(function(l){return console.log("error reading chats ",l),Object(Ol.a)(l)}))}),Object(vl.a)(function(l){return l instanceof hl.f?Object(Ol.a)({type:w.c,payload:l.error}):Object(Ol.a)({type:w.e,payload:l.chat})}))}return Object(pl.b)([Object(gl.b)(),Object(pl.d)("design:type",Object)],l.prototype,"selectFriend",void 0),l}(),Wl=e("YSh2");e.d(n,"FriendsModuleNgFactory",function(){return wl});var wl=a.La(t,[],function(l){return a.Va([a.Wa(512,a.j,a.Ba,[[8,[G,U.a,B.b,B.a]],[3,a.j],a.v]),a.Wa(4608,i.m,i.l,[a.s,[2,i.v]]),a.Wa(4608,v.x,v.x,[]),a.Wa(4608,s.i,s.h,[s.d,s.f]),a.Wa(5120,a.b,function(l,n){return[s.l(l,n)]},[i.d,a.z]),a.Wa(4608,V.b,V.b,[]),a.Wa(4608,d.b,d.b,[]),a.Wa(4608,J.a,J.a,[J.g,J.c,a.j,J.f,J.d,a.p,a.x,i.d,c.b]),a.Wa(5120,Q.b,Q.c,[J.a]),a.Wa(4608,Q.d,Q.d,[J.a,a.p,[2,i.g],[2,Q.a],Q.b,[3,Q.d],J.c]),a.Wa(4608,Z.h,Z.h,[]),a.Wa(4608,d.a,d.v,[[2,d.e],O.a]),a.Wa(1073742336,K.o,K.o,[[2,K.t],[2,K.k]]),a.Wa(1073742336,H,H,[]),a.Wa(1073742336,i.c,i.c,[]),a.Wa(1073742336,v.v,v.v,[]),a.Wa(1073742336,v.j,v.j,[]),a.Wa(1073742336,s.e,s.e,[]),a.Wa(1073742336,c.a,c.a,[]),a.Wa(1073742336,o.c,o.c,[]),a.Wa(1073742336,X.a,X.a,[]),a.Wa(1073742336,ll.a,ll.a,[[2,s.j],a.z]),a.Wa(1073742336,d.j,d.j,[[2,d.c]]),a.Wa(1073742336,u.f,u.f,[]),a.Wa(1073742336,nl.g,nl.g,[]),a.Wa(1073742336,O.b,O.b,[]),a.Wa(1073742336,d.u,d.u,[]),a.Wa(1073742336,V.c,V.c,[]),a.Wa(1073742336,el.j,el.j,[]),a.Wa(1073742336,al.b,al.b,[]),a.Wa(1073742336,S.c,S.c,[]),a.Wa(1073742336,_.c,_.c,[]),a.Wa(1073742336,p.e,p.e,[]),a.Wa(1073742336,Y.c,Y.c,[]),a.Wa(1073742336,tl.b,tl.b,[]),a.Wa(1073742336,il.a,il.a,[]),a.Wa(1073742336,J.e,J.e,[]),a.Wa(1073742336,Q.f,Q.f,[]),a.Wa(1073742336,W.a,W.a,[]),a.Wa(1073742336,Z.i,Z.i,[]),a.Wa(1073742336,d.l,d.l,[]),a.Wa(1073742336,d.s,d.s,[]),a.Wa(1073742336,g.b,g.b,[]),a.Wa(1073742336,m.c,m.c,[]),a.Wa(1073742336,rl.d,rl.d,[]),a.Wa(1073742336,d.w,d.w,[]),a.Wa(1073742336,d.n,d.n,[]),a.Wa(1073742336,ul.a,ul.a,[]),a.Wa(1024,M.j,function(){return[{key:"chats",reducerFactory:M.z,metaReducers:[],initialState:void 0},{key:"friends",reducerFactory:M.z,metaReducers:[],initialState:void 0}]},[]),a.Wa(1024,M.q,function(){return[cl,ml]},[]),a.Wa(1024,M.r,function(l,n){return[l,n]},[M.q,M.q]),a.Wa(1024,M.b,function(l,n,e,a,t,i){return[M.w(l,n,e),M.w(a,t,i)]},[a.p,M.q,M.r,a.p,M.q,M.r]),a.Wa(1073873408,M.o,M.o,[M.j,M.b,M.g,M.p]),a.Wa(512,Yl,Yl,[gl.a,hl.c]),a.Wa(512,Sl,Sl,[gl.a,hl.c]),a.Wa(1024,gl.h,function(l,n){return[gl.d(l,n)]},[Yl,Sl]),a.Wa(1073742336,gl.f,gl.f,[gl.e,gl.h,[2,M.p],[2,M.o]]),a.Wa(1073742336,t,t,[]),a.Wa(1024,K.i,function(){return[[{path:"",component:E}]]},[]),a.Wa(256,rl.a,{separatorKeyCodes:[Wl.f]},[]),a.Wa(256,d.d,d.g,[])])})}}]);