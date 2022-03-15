import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginModel } from '../Models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth ) { }

  loginUser( modelParam: LoginModel){
    return this.afAuth.signInWithEmailAndPassword( modelParam.email, modelParam.password );
  }

  signUpUser( modelParam: LoginModel ){
    return this.afAuth.createUserWithEmailAndPassword( modelParam.email, modelParam.password );
  }

}
