import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  login(email:String,password:String) {
      let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/auth";
      let body = "email=" + email + "&password=" + password;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded', 'Accept':'application/json'});
      let options = new RequestOptions({headers:headers});

      this.http.post(url, body,options)
      .map(res => res.json()
      )
      .subscribe(
          res =>console.log(res),
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => localStorage.setItem('id_token', data.token)
        
        
      );
      console.log(localStorage.getItem('id_token'));
      
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}