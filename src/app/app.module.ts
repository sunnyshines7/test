import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { RestProvider } from '../providers/rest/rest';
import { RegistrationPage } from '../pages/registration/registration';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    RegistrationPage,
    HomePage,
    LoginPage
    
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistrationPage,
    HomePage,
    LoginPage
    
        
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
