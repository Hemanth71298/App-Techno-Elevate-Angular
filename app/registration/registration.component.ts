import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './UsernameValidators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    form = new FormGroup({
    userName: new FormControl('',[Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace]),
    password: new FormControl('',Validators.required),
    Address: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    check: new FormControl(false,Validators.requiredTrue),
  })

  get username() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }

  get Address() {
    return this.form.get('Address');
  }

  get city() {
    return this.form.get('city');
  }

  get check() {
    return this.form.get('check');
  }
   
}
