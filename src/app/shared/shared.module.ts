import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatButtonModule, MatDatepickerModule, MatListModule,
  MatToolbarModule, MatInputModule,
  MatIconModule, MatFormFieldModule,
  MatCardModule, MatTabsModule,
  MatNativeDateModule,
  MatChipsModule,
  MatDividerModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations:[],
  exports:[
    CommonModule,
    FormsModule,
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
    MatNativeDateModule,
    MatDividerModule
  ],
  providers: []
})

export class SharedModule{}
