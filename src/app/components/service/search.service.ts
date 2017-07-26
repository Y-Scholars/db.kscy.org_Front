import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor(private http:Http) {
    }

    search(keyword : string) {
        alert(keyword);
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:8888/archive/_search?size=200&q="+encodeURIComponent(keyword);

        let headers = new Headers({
            'Content-Type': 'application/json' ,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers':'X-Requested-With'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.get(url)
            .map(res => res.text());
    }
}
