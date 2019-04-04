import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  email: string;
  password: string;

  constructor() { }

  signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      (res) => console.log('sign up successful', res)
    )
    .catch(
      (err) => console.log('error in sign up', err)
    )
  }

  signin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      (res) => console.log('sign in successful', res)
    )
    .catch(
      (err) => console.log('error in sign in', err)
    )
  }

  signout() {
    firebase.auth().signOut()
  }
}
