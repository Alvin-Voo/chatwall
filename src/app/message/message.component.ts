import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMessage from './store/message.reducers';
import * as MessageActions from './store/message.actions';
import { skipWhile, take } from 'rxjs/operators';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  messagesState: Observable<Message[]>;
  private timeoutid: any;//should be an timeout id

  constructor(private store: Store<fromMessage.FeatureState>) { }

  ngOnInit() {
    console.log('message component init');

    this.messagesState = this.store.select('message','messages');
    this.timeoutid = setTimeout(()=>{
      this.store.dispatch(new MessageActions.ReadAllMessages())
    },2000);
  }

  convertDateToString(date){
    return (new Date(date)).toString().split('GMT')[0];
  }

  showActiveButton(msg:Message){
    return msg.type==='REQ'&&msg.value==='UNDECIDE';
  }

  showAcceptedButton(msg:Message){
    return msg.type==='REQ'&&msg.value==='ACCEPT';
  }

  showRejectedButton(msg:Message){
    return msg.type==='REQ'&&msg.value==='REJECT';
  }

  onAcceptFriend(msg:Message){
    this.store.dispatch(new MessageActions.AcceptFriend({email:msg.from.email,name:msg.from.name}));
  }

  onRejectFriend(msg:Message){
    this.store.dispatch(new MessageActions.RejectFriend({email:msg.from.email,name:msg.from.name}));
  }

  ngOnDestroy(){
    if(this.timeoutid)clearTimeout(this.timeoutid);
  }

}
