import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider, public toastCtrl: ToastController) {

  }

  username: string = '';
  password: string = '';

  ionViewDidLoad() {
    console.log('ddd')
  }

  login(){
    // Your app login API web service call triggers 
    if(this.username === 'admin' && this.password === 'admin') {
      this.authServiceProvider.is_authentication = true;
      this.navCtrl.push(HomePage, {}, {animate: false});
    }
    else {
      console.log('incorrect');
      this.showToast('Username or Password Incorrect!!');
    }
  }

  showToast(msg){
    this.toastCtrl.create({
      message : msg,
      duration : 2000
    })
    .present();
  }

}