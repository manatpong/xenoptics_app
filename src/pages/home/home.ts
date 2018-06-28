import { SequenceServiceProvider } from './../../providers/sequence-service/sequence-service';
import { LoginPage } from './../login/login';
import { AddSequenceFormPage } from './../add-sequence-form/add-sequence-form';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  motor: any;
  authen: boolean;
  position: any;
  position_data: any;

  constructor(public navCtrl: NavController, public app: App,
    public authServiceProvider: AuthServiceProvider, public sequnceService: SequenceServiceProvider) {

  }

  ionViewDidLoad() {
    //this.authServiceProvider.login();
    //this.check();
    
  }

  fetchPositionData(mt_no) {
    this.sequnceService.getPosition(mt_no);
    //console.log(this.position_data);
  }

  logout() {
    // Remove API token 
    this.authServiceProvider.is_authentication = false;
    // const root = this.app.getRootNav();
    // root.popToRoot();
    this.check();
    console.log(this.authServiceProvider.is_authentication);
  }

  check() {
    this.authen = this.authServiceProvider.isAuthen();
    console.log(this.authen);
    if(this.authen === false) {
      this.navCtrl.push(LoginPage);
    }
  }
  addData() {
    // const root = this.app.getRootNav();
    // root.popToRoot();
    this.navCtrl.push(AddSequenceFormPage);
  }

  onChange(value) {
    console.log('this is onchange');
    //console.log(value);
    this.fetchPositionData(value);
  }
}