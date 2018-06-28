import { HomePage } from './../home/home';
import { SequenceServiceProvider } from './../../providers/sequence-service/sequence-service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddSequenceFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-sequence-form',
  templateUrl: 'add-sequence-form.html',
})
export class AddSequenceFormPage {

  // operation: string;
  // motor_code: string;
  // position_index: string;
  // description: string;
  position: number;
  speed: number;
  acceleration: number;
  pos_desc: string;
  seq_desc: string;
  motor_code: string;
  username: string;
  operation: string;
  loader: Loading;
  status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, 
    public _sequenceService: SequenceServiceProvider, public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSequenceFormPage');
    this.motor_code = 'Rollback';
    this.username = 'admin';
    this.operation = 'Rollback';
  }

  addSequence() {
    this.showLoading('Adding Sequence...');
    this._sequenceService.addSequence(this.position, this.speed, this.acceleration, this.pos_desc, this.seq_desc, this.motor_code, this.username, this.operation)
    .then((data: any) => {
      this.hideLoading();
      this.status = data;
      console.log(this.status);
      //this.showToast('data.status');
      this.navCtrl.push(HomePage)
    })
    
  }

  showLoading(msg){
    this.loader = this.loadingCtrl.create({ content: msg })
    this.loader.present();
  }

  hideLoading(){
    this.loader.dismiss();
  }

  showToast(msg){
    this.toastCtrl.create({
      message : msg,
      duration : 3000
    })
    .present();
  }

}
