import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SearchComponent } from '../search/search.component';
import { FriendsComponent } from '../friends/friends.component';
import { RequestComponent } from '../request/request.component';

const mainRoutes: Routes=[
  {path: 'main', component: MainComponent,//need to take care IF i wan to lazy load this later
  children:[
    {path:'search', loadChildren: '../search/search.module#SearchModule'},
    {path:'friends', component: FriendsComponent},
    {path:'request', component: RequestComponent}
  ]},
]

@NgModule({
  imports:[
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})

export class CoreRoutingModule{}
