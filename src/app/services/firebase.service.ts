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
    // this.getStudent('dharmikjoshi98@gmail.com');
  }

  createStudent(data: RegisterForm): void {
    this.studentRef.push(data);
  }

  getStudent(email) {
    const query = this.db.list(this.dbPath ,ref => ref.orderByChild('email')
                                                      .equalTo(email))
                                                      .valueChanges());
    return query;
  }
}
