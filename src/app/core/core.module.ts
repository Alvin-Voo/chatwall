import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { CoreRoutingModule } from "./core-routing.module";
import { FriendsComponent } from '../friends/friends.component';
import { RequestComponent } from '../request/request.component';

@NgModule({
  declarations:[
    HeaderComponent,
    MainComponent,
    FriendsComponent,
    RequestComponent
  ],
  imports:[
    CoreRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent
  ]

})
export class CoreModule {}
