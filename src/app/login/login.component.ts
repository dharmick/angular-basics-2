import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../login-form';
import  { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  submitted = false;

  loginSuccess = false;


  model: LoginForm = new LoginForm();

  profile_keys[];
  profile_values[];

  onSubmit(){
    this.submitted = true;
    var student = this.firebase.getStudent(this.model.email);
    student.subscribe(student => {
      if(student[0] && student[0].password == this.model.password) {
        this.loginSuccess = true;
        this.profile_keys = Object.keys(student[0]);
        this.profile_values = Object.values(student[0]);
      } else {
        this.loginSuccess = false;
        this.profile_keys = [];
        this.profile_values = [];
      }
    });
  }

  logout(){
    this.submitted = false;
    this.model = new LoginForm();
  }

}
