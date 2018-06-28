import { LoadingController,Loading } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AddSequenceServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SequenceServiceProvider {

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello AddSequenceServiceProvider Provider');
  }
  public items: Array<any> = [];
  public loader: Loading;

  // load(): void {
  //   this.http
  //     .get('http://192.168.60.220/log/connection_history/index.php')
  //     .subscribe((data: any) => {
  //       console.dir(data);
  //       this.items = data;
  //     },
  //       (error: any) => {
  //         console.dir(error);
  //       });
  // }

  addSequence(position: number, speed: number, acc: number, pos_desc: string, seq_desc: string, mt_code: string, username: string, opt: string) {
    const headers: any = new Headers({ 'Content-Type': 'application/json' });
    const params = { 'posit': position, 'spd': speed, 'ac': acc, 'pos_desc': pos_desc, 'seq_desc': seq_desc, "mt_code": mt_code, "username": username, "opt": opt };

    return this.http.post('http://192.168.60.220/sequence/add/index.php', { headers: headers, params: params })
      .toPromise().then((response: any) => {
        // const response_object = JSON.parse(response._body);
        // this.hideLoading();
        console.log(response);
        // return response_object;
        //

      }).catch((error: any) => {
        // ERROR FROM SERVER
        if (error.status && error.status !== 0) {
          console.error('POST CONNECTION ERROR ' + error.status);

          // ERROR FROM CLIENT
        } else {
          console.error('POST CONNECTION HISTORY ERROR 500 Internal Server');
        }

      });
  }

  sortPosition() {

  }

  getPosition(mt_no) {

    const return_object = [];

    return this.http.get('http://192.168.60.220/sequence/get_position/index.php?motor_no='+mt_no)
        .toPromise().then((response: any) => {
            const response_object = JSON.stringify(response._body);

           // _.each(response_object, (obj) => {
            response.forEach(obj => {
              return_object.push({
                'idx': obj['idx'],
                'position': obj['position'],
                'speed': obj['speed'],
                'acc': obj['acc'],
                'description': obj['description']
              });
            });
           console.log(return_object);
          return return_object;
        }).catch((error: any) => {
            // ERROR FROM SERVER
            if (error.status && error.status !== 0) {
                console.error('GET CONNECTION HISTORY ERROR ' + error.status);
                return ({ status: 'error', error: 'ERROR ' + error.status });

                // ERROR FROM CLIENT
            } else {
                console.error('GET CONNECTION HISTORY ERROR 500 Internal Server');
                return ({ status: 'error', error: 'ERROR 500' });
            }

        });
    // const return_object = [];
    
    // this.http
    //   .get('http://192.168.60.220/sequence/get_position/index.php')
    //   .subscribe((data: any) => {
    //     //console.dir(data);
    //     this.items = data;
    //   },
    //     (error: any) => {
    //       console.dir(error);
    //     });
    // return this.items;

}

  showLoading(msg){
    this.loader = this.loadingCtrl.create({ content: msg })
    this.loader.present();
  }

  hideLoading(){
    this.loader.dismiss();
  }

}
