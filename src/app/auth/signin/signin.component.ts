import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  @ViewChild('emailInput') email;
  @ViewChild('passwordInput') password;
  hide = true;
  signinError = '';
  authStateError: Subscription;

  constructor(private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit() {
    this.authStateError = this.store.select('auth')
    .subscribe(
      authState =>{
        if(authState.signin_fail_message) this.signinError = authState.signin_fail_message;
        if(authState.authenticated&&authState.token){
            this.router.navigateByUrl("/main/search");
        }
      }
    )
  }

  getEmailError(){
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordError(){
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('minlength') ? 'Minimum password length is 6' :
            '';
  }

  onSubmitForm(myForm: NgForm){
    const email = myForm.value.email;
    const password = myForm.value.password;
    console.log(email+"   "+password);
    this.signinError = '';
    //signup the user
    this.store.dispatch(new AuthActions.Signin({email, password}));
    //populate the to do list with data from db
  }

  ngOnDestroy(){
    if(this.authStateError)this.authStateError.unsubscribe();
  }
}
