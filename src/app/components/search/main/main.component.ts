import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    keyword : String;

    ngOnInit() {

    }

    constructor() {
    }

    search() {
        this.keyword = (<HTMLInputElement>document.getElementById("keyword")).value;
        location.href = '/search&q=' + this.keyword;
    }

}
