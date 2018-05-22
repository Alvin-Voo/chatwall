import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes=[
  {path: 'auth', component: AuthComponent,//need to take care IF i wan to lazy load this later
  children:[
    {path:'signup', component: SignupComponent},
    {path:'signin', component: SigninComponent}
  ]},
]

@NgModule({
  imports:[
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule{}
