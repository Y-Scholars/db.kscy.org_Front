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


    constructor(private route: ActivatedRoute, private searching:SearchService) { }

    keywords : String;
    count : number;

    items = [];

    best = [];
    plan = [];
    pres = [];
    extr = [];

    pl : number = 0;
    pr : number = 0;
    
    //TODO Result Bind
    ngOnInit() {
        let key = this.route.snapshot.queryParams["q"];
        var res = this.searching.search(key)
            .subscribe(
                    res => {  
                    let obj = JSON.parse(res);
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
                    
                    if(obj.hits.total == 0) {
                        console.log("break");
                        
                    }
                    else {
                        for(var i = 0 ; i < obj.hits.hits.length ; i++) {
                        console.log(this.pr);
                        switch(obj.hits.hits[i]._source.type) {
                        case "연구논문 (Research Paper) 발표" : {
                            if(this.pr>=3) {
                                break;
                            }
                            this.pres[this.pr] = new Result(obj.hits.hits[i]._source.research_name,obj.hits.hits[i]._source.researcher_name);
                            this.pr++;
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
                }
                
                    }
                    this.count = obj.hits.hits.length;
                }
        );
        
        this.keywords = key;
    }

}
