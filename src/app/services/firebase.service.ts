import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { RegisterForm } from '../register-form';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = '/students';
  studentRef: AngularFireList<RegisterForm> = null;

  constructor(private db: AngularFireDatabase) {
    this.studentRef = db.list(this.dbPath);
  }

  createStudent(data: RegisterForm): void {
    this.studentRef.push(data);
  }

  getStudent() {
    
  }
}
