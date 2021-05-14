import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './UsernameValidators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  form = new FormGroup({
    userName: new FormControl('',[Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace]),
    password: new FormControl('',Validators.required)
  })

  get username() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }

}
