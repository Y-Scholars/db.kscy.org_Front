import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    keyword : String;

    ngOnInit() {

    }

    constructor(private searching:SearchService) {
        // this.dialog.context.dialogClass = 'modal-centered';
    }

    search() {
        this.keyword = (<HTMLInputElement>document.getElementById("keyword")).value;
        this.searching.search(this.keyword);
    }

}
