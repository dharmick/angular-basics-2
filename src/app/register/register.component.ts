import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../register-form';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  model: RegisterForm = new RegisterForm();

  departments = ['Computer', 'IT', 'Extc'];

  genders = ['male', 'female', 'other'];

  submitted = false;
  onSubmit(){
    this.submitted = true;
    this.firebase.createStudent(this.model);
  }

  addStudent(){
    this.submitted = false;
    this.model = new RegisterForm();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
