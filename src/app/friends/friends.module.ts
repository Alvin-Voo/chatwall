import { NgModule } from "@angular/core";
import { FriendsComponent } from "./friends.component";
import { SharedModule } from "../shared/shared.module";
import { FriendsRoutingModule } from "./friends-routing.module";
import { ChatsComponent } from './chats/chats.component';
import { StoreModule } from "@ngrx/store";
import { chatsReducer } from "./chats/store/chats.reducers";
import { ChatsEffects } from './chats/store/chats.effects';
import { EffectsModule } from "@ngrx/effects";
import { NG_VALIDATORS } from "@angular/forms";
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
    EffectsModule.forFeature([ChatsEffects])
  ],

})

export class FriendsModule{}
