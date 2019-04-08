import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  email: string;
  password: string;
  token: string;

  constructor() {}

  signup(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log("sign up successful", res))
      .catch(err => console.log("error in sign up", err));
  }

  signin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("sign in successful", res),
          firebase
            .auth()
            .currentUser.getIdToken()
            .then((token: string) => (this.token = token));
      })
      .catch(err => console.log("error in sign in", err));
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signout() {
    firebase.auth().signOut();

    // This destroys the user's token once they are signed out
    this.token = null;
    console.log("token destroyed");
  }
}
