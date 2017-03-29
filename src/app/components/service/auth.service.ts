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

    login(email: String, password: String) {
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
                    localStorage.setItem('id_token', res.data.token);
                    var token = localStorage.getItem('id_token');
                    location.href = '/home';
                },

                error => {
                    alert(error.text());
                    console.log(error.text());
                },
                () => localStorage.getItem('id_token')
                );
    }

    loggedIn() {
        console.log('checking token!!'); 

        //Default isValie = true
        let isValid: boolean = true;
        
        //look for token
        var token = localStorage.getItem('id_token');

        //Token Exist
        if (token) {
        }

        //token not found
        else {
            isValid = false;
        }
        return isValid;
    }

    logout() {
        alert("로그아웃 되었습니다.");
        location.href = '/home';
        localStorage.removeItem('id_token');
    }
}