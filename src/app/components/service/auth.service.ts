import {Injectable} from '@angular/core';
import {Http,Response,Headers,
    RequestOptions
} from "@angular/http";
import {
    Router
} from '@angular/router';


import 'rxjs/add/operator/map';




@Injectable()
export class AuthService {

    constructor(private http: Http, private router: Router) {}

    login(email: String, password: String,autoLogin:boolean) {
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
                    if(autoLogin) {
                        localStorage.setItem('id_token', res.data.token);
                    }
                    else {
                        sessionStorage.setItem('id_token',res.data.token);
                    }
                    location.href = '/home';
                },

                error => {
                    alert(error.text());
                    console.log(error.text());
                }
                );
    }

    loggedIn() {
        console.log('checking token!!'); 

        //Default isValie = true
        let isValid: boolean = true;
        
        //look for token
        var localToken = localStorage.getItem('id_token');
        var sessionToken = sessionStorage.getItem('id_token');

        //Token Exist
        if (localToken) {
            console.log("autoLoggedIn");
        }
        else if(sessionToken) {
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

        var localToken = localStorage.getItem('id_token');
        var sessionToken = sessionStorage.getItem('id_token');

        if(localToken) {
            localStorage.removeItem('id_token');
        }
        else {
            sessionStorage.removeItem('id_token');
        }
    }

    getProfile() {
        //TODO add prefix value
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/users" ;
        //TODO token location & get token value
        var token;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization' : 'bearer '+token
        });
        let options = new RequestOptions({
            headers: headers
        });

        this.http.get(url,options)
            .map(res => res.json())
            .subscribe(
                res => {
                    console.log("Response : " + res.data.token);
                },

                error => {
                    alert(error.text());
                    console.log(error.text());
                }
                );
    }
}