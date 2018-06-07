import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { searchReducer } from './store/search.reducers';
import { SearchEffects } from './store/search.effects';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations:[
    SearchComponent,
    SearchDetailComponent
  ],
  imports:[
    SearchRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('search',searchReducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})

export class SearchModule {}
