import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor(private http: Http) {
    }

    search(keyword: string) {
        let url = "http://db.kscy.org:8888/archive/_search";

        let body = {
            "query": {
                "multi_match": {
                    "query": keyword,
                    "fields": ["research_name", "abstract_kor", "researcher_name", "org"]
                }
            }
        }

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With'
        });
        headers.append('Access-Control-Max-Age', '3600');
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(url,body)
            .map(res => res.text());
    }
}