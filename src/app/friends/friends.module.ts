import { NgModule } from "@angular/core";
import { FriendsComponent } from "./friends.component";
import { SharedModule } from "../shared/shared.module";
import { FriendsRoutingModule } from "./friends-routing.module";

@NgModule({
  declarations:[
    FriendsComponent
  ],
  imports:[
    FriendsRoutingModule,
    SharedModule
  ],
  providers:[]
})

export class FriendsModule{}
