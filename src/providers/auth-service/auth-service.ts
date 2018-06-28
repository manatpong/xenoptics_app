import { LoginPage } from './../../pages/login/login';
import { NavController, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(protected injector: Injector, public http: HttpClient,public app: App) {
  }

  is_authentication: boolean = false;


  isAuthen() {
    
      // this.navCtrl.setRoot(LoginPage);
      return this.is_authentication;
    
  }

  login() {
    console.log('hello')
  }

}
