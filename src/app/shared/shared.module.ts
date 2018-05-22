import { NgModule } from "@angular/core";
import { MatButtonModule, MatDatepickerModule,
  MatToolbarModule, MatInputModule,
  MatIconModule, MatFormFieldModule,
  MatCardModule,
  MatNativeDateModule} from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[],
  exports:[
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: []
})

export class SharedModule{}
