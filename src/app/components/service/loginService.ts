import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {
    constructor(private http:Http) {
    }

    login(email:String,password:String) {
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/auth";

        let body = "email=" + email + "&password=" + password;

        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded', 'Accept':'application/json'});
        let options = new RequestOptions({headers:headers});

        console.log("Email : " + email);

        return this.http.post(url,body, options)
            .subscribe(res => {
                console.log(res);
                let json_body = JSON.parse(res['_body']);
                console.log('json body:', json_body);
            });
    }
}
