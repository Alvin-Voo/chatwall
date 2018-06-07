import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MessageComponent } from "./message.component";
import { MessageRoutingModule } from "./message-routing.module";

@NgModule({
  declarations:[
    MessageComponent
  ],
  imports:[
    MessageRoutingModule,
    SharedModule
  ],
  providers:[]

})
export class MessageModule {}
