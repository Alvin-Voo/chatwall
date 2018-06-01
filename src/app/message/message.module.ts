import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MessageComponent } from "./message.component";
import { SocketService } from "../shared/socket.service";
import { MessageRoutingModule } from "./message-routing.module";
@NgModule({
  declarations:[
    MessageComponent
  ],
  imports:[
    MessageRoutingModule,
    SharedModule
  ],
  providers:[
    SocketService
  ]

})
export class MessageModule {}
