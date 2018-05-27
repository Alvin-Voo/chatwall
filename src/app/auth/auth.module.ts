import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { SafeHtmlPipe } from "../shared/safeHtml.pipe";

@NgModule({
    declarations:[
      AuthComponent,
      SignupComponent,
      SigninComponent,
      SafeHtmlPipe
    ],
    imports:[
      AuthRoutingModule,
      SharedModule
    ]
})

export class AuthModule{}
