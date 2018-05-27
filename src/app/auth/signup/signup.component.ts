import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import { Subscription } from 'rxjs/Subscription';

import { Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators'; //tap is what-used-to be 'do'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  @ViewChild('emailInput') email;
  @ViewChild('passwordInput') password;

  noavatar: string = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAAGmHBAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/+EDDGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOnhtcE1NPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vJz4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjI4N0JFQzI0RDgxMzExRTVCOThBQ0Q4OTc1RjNCODlCPC94bXBNTTpJbnN0YW5jZUlEPgogIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6Mjg3QkVDMjREODEzMTFFNUI5OEFDRDg5NzVGM0I4OUI8L3htcE1NOkluc3RhbmNlSUQ+CiAgPHhtcE1NOkRvY3VtZW50SUQgcmRmOnJlc291cmNlPSd4bXAuZGlkOjI4N0JFQzI1RDgxMzExRTVCOThBQ0Q4OTc1RjNCODlCJyAvPgogIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgPC94bXBNTTpEZXJpdmVkRnJvbT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKPC9yZGY6UkRGPgo8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";

  avatar = this.noavatar;

  authStateError: Subscription;

  hide = true;
  uploadError = '';
  signupError = '';

  constructor(private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit() {
    this.authStateError = this.store.select('auth')//i dont want to take 1 coz I want this observation to keep continuing
    //even though after first auth failure
    .subscribe(
      authState =>{
        if(authState.signup_fail_message){
          this.signupError = authState.signup_fail_message;
        }
        if(authState.authenticated&&authState.token){
              this.router.navigateByUrl("/main/search");
        }
      }
    )
  }

  onSelectImage(event){
    this.uploadError = "";
    if (event.target.files && event.target.files[0]) {
     if(event.target.files[0].size>51200){
       return this.uploadError = "please upload file smaller than 50kb";
     }

     let reader = new FileReader();

     reader.readAsDataURL(event.target.files[0]); // read file as data url

     reader.onload = (e: any) => { // called once readAsDataURL is completed
       //check image size before assigning to avatar variable
      let image = new Image();
      image = e.target.result;
      if(image.width > 200 || image.height > 200){
        return this.uploadError = 'please upload image smaller than 200px x 200px';
      }

      this.avatar = e.target.result;
     }
   }
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
    console.log(myForm);
    const user = new User(
      this.avatar,
      myForm.value.name,
      myForm.value.dob.getTime(), //dob is a Date object, convert it to unix time number
      myForm.value.email,
      myForm.value.address,
      myForm.value.hobbies,
      myForm.value.password
    )
    this.signupError='';
    this.store.dispatch(new AuthActions.Signup(user));

  }

  ngOnDestroy(){
    if(this.authStateError) this.authStateError.unsubscribe();
  }

}
