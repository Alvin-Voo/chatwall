import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatButtonModule, MatDatepickerModule, MatListModule,
  MatToolbarModule, MatInputModule,
  MatIconModule, MatFormFieldModule,
  MatCardModule, MatTabsModule,
  MatNativeDateModule,
  MatChipsModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations:[],
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatListModule,
    MatChipsModule,
    MatNativeDateModule
  ],
  providers: []
})

export class SharedModule{}
