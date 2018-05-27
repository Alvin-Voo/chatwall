import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes=[
  {path: '', redirectTo: 'auth/signup', pathMatch: 'full'},
  // {path: '**', redirectTo: '/'}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
