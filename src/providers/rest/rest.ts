import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import "rxjs/Rx";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
headers :Headers
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
    this.headers = new Headers();
    this.headers.append( 'Content-type','application/Json')
  }

  Test(i){
  return i;
    }
  

  getFromServer(){
  return this.http.get('http://dummy.restapiexample.com/api/v1/employees',{headers: this.headers})
  .map((resp)=>{
    return (<any>resp)._body
  });

} 
  }


