import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
test :string
test1:string
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider) {
    this.test=this.navParams.get('username')
    this.test1=this.navParams.get('password')
    this.test=this.navParams.get('username')
   for(var i=0;i<8;i++){
      var test1= this.rest.Test(i)
      console.log(test1)
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
