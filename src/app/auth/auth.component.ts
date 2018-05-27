import { Component, OnInit, Input } from '@angular/core';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  content = 'This app lets you connect and chat with friends.';

  constructor() { }

  ngOnInit() {
  }

  onActivate(event){
    if(event instanceof SigninComponent)
      this.content = 'This app lets you connect and chat with friends.'
    else
      this.content = 'Just fill up the fields below and you are ready to go!'
  }

}
