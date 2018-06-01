import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { CoreRoutingModule } from "./core-routing.module";
import { FriendsComponent } from '../friends/friends.component';
import { SocketService } from "../shared/socket.service";

@NgModule({
  declarations:[
    HeaderComponent,
    MainComponent,
    FriendsComponent
  ],
  imports:[
    CoreRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[SocketService]

})
export class CoreModule {}
