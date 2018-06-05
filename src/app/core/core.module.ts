import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { CoreRoutingModule } from "./core-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ServerInterceptor } from "../shared/server.interceptor";
import { SocketService } from "../shared/socket.service";

@NgModule({
  declarations:[
    HeaderComponent,
    MainComponent
  ],
  imports:[
    CoreRoutingModule,
    SharedModule
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
