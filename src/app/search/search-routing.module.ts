import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

const searchRoutes: Routes = [
  {path: '', component: SearchComponent,
  children:[
    {path: ':index', component: SearchDetailComponent}
  ]}
]

@NgModule({
  imports:[
    RouterModule.forChild(searchRoutes)
  ],
  exports: [RouterModule]
})

export class SearchRoutingModule{}
