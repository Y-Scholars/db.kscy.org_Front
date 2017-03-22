import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

class Login {
    on:boolean = false;

    toggle() {
        this.on = !this.on;
    }
}

@Component({
    selector: 'login',
    template: '<popup><h2>Content</h2>Some content here</popup>', 
    directives: [Login]
})

export class HeaderComponent implements OnInit {

  ngOnInit() {

  }

}
