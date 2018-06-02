import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { CoreRoutingModule } from "./core-routing.module";

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
  providers:[]

})
export class CoreModule {}
