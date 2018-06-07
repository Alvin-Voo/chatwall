import { NgModule } from "@angular/core";
import { FriendsComponent } from "./friends.component";
import { ChatsComponent} from './chats/chats.component';
import { SharedModule } from "../shared/shared.module";
import { FriendsRoutingModule } from "./friends-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { chatsReducer } from './chats/store/chats.reducers';
import { friendsReducer } from './store/friends.reducers';
import { FriendsEffects } from "./store/friends.effects";
import { ChatsEffects } from "./chats/store/chats.effects";
import { EmptyStringCheckDirective } from "../shared/emptyStringCheck.directive";

@NgModule({
  declarations:[
    FriendsComponent,
    ChatsComponent,
    EmptyStringCheckDirective
  ],
  imports:[
    FriendsRoutingModule,
    SharedModule,
    StoreModule.forFeature('chats',chatsReducer),
    StoreModule.forFeature('friends',friendsReducer),
    EffectsModule.forFeature([FriendsEffects,ChatsEffects])

  ]
})

export class FriendsModule{}
