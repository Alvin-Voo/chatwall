import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FriendsComponent } from './friends.component';

const friendsRoutes: Routes = [
  {path: '', component: FriendsComponent}
]

@NgModule({
  imports:[
    RouterModule.forChild(friendsRoutes)
  ],
  exports: [RouterModule]
})

export class FriendsRoutingModule{}
