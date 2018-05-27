import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { SearchDetailComponent } from './search-detail/search-detail.component';

@NgModule({
  declarations:[
    SearchComponent,
    SearchDetailComponent
  ],
  imports:[
    SearchRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]

})

export class SearchModule {}
