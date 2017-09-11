import { UserNameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'reactive-form',
    styleUrls: ['reactiveforms.component.css'],
    templateUrl: 'reactiveforms.component.html'
})
export class ReactiveFormsComponent {

    form = new FormGroup({
        account: new FormGroup({
            username: new FormControl('', [
                Validators.required, 
                Validators.minLength(3), 
                //Validators.pattern('Satyanand'),
                UserNameValidators.cannotContainSpace], 
                UserNameValidators.shouldBeUnique
            ),
            password: new FormControl('', Validators.required)
        })
        
    });

    get username(){
        return this.form.get('account.username');
    }

    get password() {
        return this.form.get('account.password');
    }

    login() {
        console.log("form submit values", this.form.value.account)
        console.log(this.username.value)
        console.log(this.password.value)
        let details =  this.form.value.account;
        if(details.username != 'satya' || details.password != 'satya')
            this.form.setErrors({
            invalidLogin: true
            });

    }

}