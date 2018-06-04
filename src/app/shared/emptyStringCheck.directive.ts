import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[emptyStringCheck]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmptyStringCheckDirective, multi: true}]
})
export class EmptyStringCheckDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    if(!control.value) return null;
    if(!control.value.trim()){
      return {'emptyStringCheck':'string is empty!'};
    }
    else return null
  }
}
