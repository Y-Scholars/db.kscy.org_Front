import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SignupService {
    constructor(private http:Http) {
    }

    signUp() {
        let email = "hoonasda2585@gmail.com";
        let username = "dudgns0507";
        let password = "12345";
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/users";

        let body = "email=" + email + "&username=" + username + "&password=" + password;

        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded', 'Accept':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.post(url, body, options)
            .subscribe(res => {
                console.log(res);
                let json_body = JSON.parse(res['_body']);
                console.log('json body:', json_body);
            });
    }
}
