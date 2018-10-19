import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../register-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new RegisterForm();

  departments = ['Computer', 'IT', 'Extc'];

  genders = ['male', 'female', 'other'];

  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
