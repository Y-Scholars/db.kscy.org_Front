import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {


    ngOnInit() {

    }

    constructor() {
    }

    search(value:String) {
        location.href = '/search?q=' + encodeURIComponent(value.toString());
    }

}
