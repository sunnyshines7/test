import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import {  LoginPage} from '../login/login'
import { FormGroup,FormControl} from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
login :any=LoginPage
details : any
formData;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider) {
      this.formData = new FormGroup({
       uname: new FormControl(""),
        pwd: new FormControl(""),
       uemail: new FormControl(""),
       num: new FormControl(""),
      uaddress: new FormControl("")
    });
 }
  moveToRegister(){
    console.log(this.formData.value)
    console.log(this.formData)
    // this.navCtrl.push(HomePage,{
    //   username:data.value
    // })
   

    }
    moveToLog(data:NgForm){
      this.navCtrl.push(LoginPage,{
        username: data.value.uname,
        password: data.value.pwd

      })
    
    }
    getDetails(){
 this.rest.getFromServer().subscribe((resp)=> {
this.details=JSON.parse(resp);

 })
    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
