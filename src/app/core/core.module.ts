import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { CoreRoutingModule } from "./core-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ServerInterceptor } from "../shared/server.interceptor";
import { SocketService } from "../shared/socket.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { messageReducer } from "../message/store/message.reducers";
import { MessageEffects } from "../message/store/message.effects";

@NgModule({
  declarations:[
    HeaderComponent,
    MainComponent
  ],
  imports:[
    CoreRoutingModule,
    SharedModule,
    StoreModule.forFeature('message',messageReducer),
    EffectsModule.forFeature([MessageEffects])
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true },
    SocketService
  ]

})
export class CoreModule {}
