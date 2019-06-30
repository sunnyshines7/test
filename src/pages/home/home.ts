import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  test:any={};
  register :any=RegistrationPage

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider) {
   
  }
 moveTo(page:any)
 {
   this.navCtrl.push(page)
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
