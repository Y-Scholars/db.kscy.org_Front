import { Injectable } from '@angular/core';
import {
    Http, Response, Headers,
    RequestOptions
} from "@angular/http";
import {
    Router
} from '@angular/router';

import {CookieService} from './cookie.service';


import 'rxjs/add/operator/map';




@Injectable()
export class AuthService {

    constructor(private http: Http, private router: Router, private cookie:CookieService) { }

    login(email: String, password: String, autoLogin: boolean) {
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/auth";
        let body = "email=" + email + "&password=" + password;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => {
                console.log("Response : " + res.data.token);

                sessionStorage.setItem('id_token', res.data.token);
                sessionStorage.setItem('user_id', res.data.user_id);

                this.cookie.setCookie('id_token',res.data.token,1);
                this.cookie.setCookie('user_id', res.data.user_id,1);

                location.href = '/home';
            },

            error => {
                //alert(error.text());
                //console.log(error.json().code);
                if(error.json().code == 400) {
                    alert("일치하는 정보가 없습니다.");
                }
            }
            );
    }

    loggedIn() {
        console.log('checking token!!');

        //Default isValie = true
        let isValid: boolean = true;

        //look for token
        //var sessionToken = sessionStorage.getItem('id_token');
        var sessionToken = this.cookie.getCookie('id_token');
        //Token Exist
        if (sessionToken) {
            console.log("sessionLoggedIn");
        }

        //token not found
        else {
            console.log("no login");
            isValid = false;
        }
        return isValid;
    }

    logout() {
        alert("로그아웃 되었습니다.");
        location.href = '/home';

        this.cookie.delete_cookie('id_token');

        var localToken = localStorage.getItem('id_token');
        var sessionToken = sessionStorage.getItem('id_token');

        var localID = localStorage.getItem('user_id');
        var sessionID = sessionStorage.getItem('user_id');

        if (localToken && localID) {
            localStorage.removeItem('id_token');
            localStorage.removeItem('user_id');
        }
        else if (sessionToken && sessionID) {
            sessionStorage.removeItem('id_token');
            sessionStorage.removeItem('user_id');
        }
        else {
            localStorage.removeItem('id_token');
            localStorage.removeItem('user_id');
            sessionStorage.removeItem('id_token');
            sessionStorage.removeItem('user_id');
        }
    }

    getProfile() {
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/students";
        let token: String = this.cookie.getCookie('id_token');

        console.log(url);
        console.log(token);


        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });

        headers.append('Authorization', `bearer ${token}`)

        console.log(headers);

        let options = new RequestOptions({
            headers: headers
        });

        return this.http.get(url, options).map(res => res.json());
    }
}
