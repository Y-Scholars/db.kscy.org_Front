import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../service/search.service';

@Component({
    selector: 'resultlist-component',
    templateUrl: './resultlist.component.html',
    styleUrls: ['./resultlist.component.css']
})

export class ResultListComponent implements OnInit {

    constructor(private route: ActivatedRoute, private searching:SearchService) { }

    ngOnInit() {
        let key = this.route.snapshot.queryParams["q"];
        this.searching.search(key);
    }

}
