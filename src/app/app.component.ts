import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
//import { WelcomePage } from './../pages/welcome/welcome';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
templateUrl: 'app.html'
})
export class MyApp {
   rootPage:any = HomePage; // Replace tabsPage with Welcome

   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
   });
 }
}