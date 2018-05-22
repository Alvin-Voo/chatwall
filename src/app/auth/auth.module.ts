import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { SafeHtmlPipe } from "../shared/safeHtml.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
      AuthComponent,
      SignupComponent,
      SigninComponent,
      SafeHtmlPipe
    ],
    imports:[
      AuthRoutingModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule
    ]
})

export class AuthModule{}
