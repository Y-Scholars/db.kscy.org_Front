import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { Result } from './result';

@Component({
    selector: 'resultlist-component',
    templateUrl: './resultlist.component.html',
    styleUrls: ['./resultlist.component.css']
})

export class ResultListComponent implements OnInit {


    constructor(private route: ActivatedRoute, private searching: SearchService) { }

    input: String;

    keywords: String;
    count: number;

    items = [new Result("검색 결과가 없습니다.", "", "")];

    best = [new Result("검색 결과가 없습니다.", "", "")];
    plan = [];
    pres = [];
    extr = [new Result("검색 결과가 없습니다.", "", "")];

    pl: number = 0;
    pr: number = 0;

    search_type = "tonghap";

    //TODO Result Bind
    ngOnInit() {
        let key = this.route.snapshot.queryParams["q"];
        (<HTMLInputElement>document.getElementById("input")).value = key;
        var res = this.searching.search(key)
            .subscribe(
            res => {
                let obj = JSON.parse(res);

                console.log(obj);
                /*
                switch(obj.hits.hits[i]._source.type) {
                    case "연구논문 (Research Paper) 발표" : {
                        if(this.pr>=3) {
                            break;
                        }
                        this.pres[this.pr] = new Result(obj.hits.hits[i]._source.research_name,obj.hits.hits[i]._source.researcher_name);
                        this.pl++;
                        break;
                    }
                    case "연구계획 (Reserch Plan) 발표" : {
                        if(this.pl>=3) {
                            break;
                        }
                        this.plan[this.pl] = new Result(obj.hits.hits[i]._source.research_name,obj.hits.hits[i]._source.researcher_name);
                        this.pl++;
                        break;
                    }
                }
                */

                switch (this.search_type) {
                    case "tonghap": {
                        if (obj.hits.total == 0) {
                    console.log("break");
                }
                else {
                    for (var i = 0; i < obj.hits.hits.length; i++) {
                        console.log(this.pr);
                        switch (obj.hits.hits[i]._source.type) {
                            case "연구논문 (Research Paper) 발표": {
                                if (this.pr >= 3) {
                                    break;
                                }
                                this.pres[this.pr] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id);
                                this.pr++;
                                break;
                            }
                            case "연구계획 (Reserch Plan) 발표": {
                                if (this.pl >= 3) {
                                    break;
                                }
                                this.plan[this.pl] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id);
                                this.pl++;
                                break;
                            }
                        }
                    }

                }
                        this.count = obj.hits.hits.length;

                        console.log(this.pres.length);

                        break;
                    }

                    case "pres": {
                        var t = 0;
                        for (var i = 0; i < obj.hits.hits.length; i++) {
                            if (obj.hits.hits[i]._source.type == "연구논문 (Research Paper) 발표") {
                                this.pres[t] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id);
                                t++;
                            }
                        }
                        break;
                    }

                    case "plan": {
                        var t = 0;
                        for (var i = 0; i < obj.hits.hits.length; i++) {
                            if (obj.hits.hits[i]._source.type == "연구계획 (Reserch Plan) 발표") {
                                this.plan[t] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id);
                                t++;
                            }
                        }
                        break;
                    }
                }
            }
            );

        this.keywords = key;

        this.pres = this.pres.slice(0,2);

    }

    search() {
        this.input = (<HTMLInputElement>document.getElementById("input")).value;
        location.href = '/search?q=' + this.input;
    }

}
