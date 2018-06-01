import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';

const messageRoutes: Routes = [
  {path: '', component: MessageComponent}
]

@NgModule({
  imports:[
    RouterModule.forChild(messageRoutes)
  ],
  exports: [RouterModule]
})

export class MessageRoutingModule{}
