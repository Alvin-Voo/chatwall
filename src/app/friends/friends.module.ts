import { NgModule } from "@angular/core";
import { FriendsComponent } from "./friends.component";
import { ChatsComponent} from './chats/chats.component';
import { EmptyStringCheckDirective } from "../shared/emptyStringCheck.directive";

import { SharedModule } from "../shared/shared.module";
import { FriendsRoutingModule } from "./friends-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { chatsReducer } from "./chats/store/chats.reducers";
import { ChatsEffects } from './chats/store/chats.effects';

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
    EffectsModule.forFeature([ChatsEffects])
  ]

})

export class FriendsModule{}
