import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { Result } from './result';
import { SharedService } from '../../service/shared.service';

@Component({
    selector: 'resultlist-component',
    templateUrl: './resultlist.component.html',
    styleUrls: ['./resultlist.component.css']
})

export class ResultListComponent implements OnInit {


    constructor(private route: ActivatedRoute, private searching: SearchService, private shared: SharedService) { }

    input: String;

    keywords: String;
    count: number;

    items = [new Result("검색 결과가 없습니다.", "", "","")];
    best = [new Result("검색 결과가 없습니다.", "", "","")];
    best_bit = [new Result("검색 결과가 없습니다.", "", "","")];
    plan = [new Result("검색 결과가 없습니다.", "", "","")];
    plan_bit = [new Result("검색 결과가 없습니다.", "", "","")];
    pres = [new Result("검색 결과가 없습니다.", "", "","")];
    pres_bit = [new Result("검색 결과가 없습니다.", "", "","")];
    extr = [new Result("검색 결과가 없습니다.", "", "","")];
    extr_bit = [new Result("검색 결과가 없습니다.", "", "","")];

    pl: number = 0;
    pr: number = 0;

    search_type : String = "tonghap";

    //TODO Result Bind
    ngOnInit() {
        this.shared.langUpdated.subscribe(
            (lang) => {
                this.search_type = this.shared.getActive();
            }
        );
        this.search_type = this.shared.getActive();
        console.log(this.search_type);
        let key = this.route.snapshot.queryParams["q"];
        (<HTMLInputElement>document.getElementById("input")).value = key;
        var res = this.searching.search(key)
            .subscribe(
            res => {
                let obj = JSON.parse(res);

                console.log(obj);

                if (obj.hits.total == 0) {
                    console.log("break");
                    this.count = 0;
                }
                else {
                    for (var i = 0; i < obj.hits.hits.length; i++) {
                        console.log(this.pr);
                        console.log(obj.hits.hits[i]._source.org);
                        switch (obj.hits.hits[i]._source.type) {
                            case "연구논문 (Research Paper) 발표": {
                                if (this.pr >= 3) {
                                    break;
                                }
                                this.pres_bit[this.pr] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id,obj.hits.hits[i]._source.org);
                                this.pr++;
                                break;
                            }
                            case "연구계획 (Reserch Plan) 발표": {
                                if (this.pl >= 3) {
                                    break;
                                }
                                this.plan_bit[this.pl] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id,obj.hits.hits[i]._source.org);
                                this.pl++;
                                break;
                            }
                        }
                    }

                    this.count = obj.hits.hits.length;

                }

                var f = 0;
                for (var i = 0; i < obj.hits.hits.length; i++) {
                    if (obj.hits.hits[i]._source.type == "연구논문 (Research Paper) 발표") {
                        this.pres[f] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id,obj.hits.hits[i]._source.org);
                        f++;
                    }
                }

                var t = 0;
                for (var i = 0; i < obj.hits.hits.length; i++) {
                    if (obj.hits.hits[i]._source.type == "연구계획 (Reserch Plan) 발표") {
                        this.plan[t] = new Result(obj.hits.hits[i]._source.research_name, obj.hits.hits[i]._source.researcher_name, obj.hits.hits[i]._id,obj.hits.hits[i]._source.org);
                        t++;
                    }
                }
            }
            );

        this.keywords = key;
    }

    search(value:String) {
        location.href = '/search?q=' + encodeURIComponent(value.toString());
    }

    toBest() {
        this.search_type = "best";
        console.log(this.shared.getActive());
    }

    toPres() {
        this.search_type = "pres";
    }

    toPlan() {
        this.search_type = "plan";
    }

    toExtr() {
        this.search_type = "extr";
    }

    toTongHap() {
        this.search_type = "tonghap";
    }

}
