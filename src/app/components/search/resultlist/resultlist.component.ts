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

    //TODO Result Bind
    ngOnInit() {
        let key = this.route.snapshot.queryParams["q"];
        var res = this.searching.search(key)
            .subscribe(
                    res => {  
                    let obj = JSON.parse(res);
                    console.log(obj.hits.hits[0]._source.research_name);
                    for(var i = 0 ; i < 3 ; i++) {
                        this.items[i] = new Result(obj.hits.hits[i]._source.research_name,obj.hits.hits[i]._source.researcher_name);
                        if(i == obj.hits.hits.length-1) {
                            break;
                        }
                    }
                    this.count = obj.hits.hits.length;
                }
        );
        
        this.keywords = key;
    }

}
