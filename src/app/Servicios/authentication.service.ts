import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( authState => {
      this.authState = authState;
    });
  }
  async loginGoogle(): Promise<firebase.User>{
    try{
      const res = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const { user } = res;
      localStorage.setItem('user', user.uid);
      return user;
    } catch (err) {
      console.log(err);
      localStorage.removeItem('user');
      return null;
    }
  }

  async loginEmail(email: string, password: string): Promise<firebase.User> {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password);
      const { user } = res;
      localStorage.setItem('user', user.uid);
      return user;
    } catch(err) {
      console.log(err);
      localStorage.removeItem('user');
      return null;
    }
  }

  async signUpEmail(
    displayName: string,
    email: string,
    password:string
  ): Promise<firebase.User> {
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const { user } = res;
      localStorage.setItem('user', user.uid);
      user.updateProfile({
        displayName,
        photoURL: ''
      })
    } catch(err) {
      console.log(err);
      localStorage.removeItem('user');
      return null;
    }
  }

  getCurrentUser(): Observable<firebase.User>{
    return this.afAuth.user;
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
    } catch (e){
      localStorage.removeItem('user');
    }
  }

  authState: any = null;

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }

  get userData(): any {
    if ( ! this.isAuthenticated ) {
      return [];
    }

    return [
      {
        id: this.authState.uid,
        displayName: this.authState.displayName,
        email: this.authState.email,
        phoneNumber: this.authState.phoneNumber,
        photoURL: this.authState.photoURL,
      }
    ];
  }
}

