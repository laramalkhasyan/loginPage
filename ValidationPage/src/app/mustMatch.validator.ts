import {AbstractControl} from '@angular/forms';
export class MustMatch {
    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirm = AC.get('confirm').value; // to get value in input tag
        if(password != confirm) {
            console.log('false');
            AC.get('confirm').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}