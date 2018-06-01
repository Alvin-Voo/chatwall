import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../shared/socket.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as MessageActions from '../../message/store/message.actions';
import { skipWhile, take } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  private socketSub: Subscription;
  private msgSub: Subscription;
  newMessage = '';
  constructor(private socketService: SocketService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {//main should only init once login
    this.socketService.initSocket();

    this.socketSub = this.socketService.onNewMessage().subscribe(//active listening
      (messages)=>{
        console.log("i got msg! ",messages);
        this.store.dispatch(new MessageActions.PushNewMessages(messages))
      }
      //when get that 1 new message, push message into message's store
    )

    this.msgSub = this.store.select('message','messages').subscribe(
      (messages)=>{
        const newMsg = messages.filter((msg)=>msg.status!=='READ');
        if(newMsg.length>0) this.newMessage = 'You\'ve got new message! Check your inbox.';
        else this.newMessage = '';
      }
    )

    this.store.dispatch(new MessageActions.FetchAllMessages());
  }

  ngOnDestroy(){
    if(this.socketSub) this.socketSub.unsubscribe();
    if(this.msgSub) this.msgSub.unsubscribe();
  }

}
