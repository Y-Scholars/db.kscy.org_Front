import { Component, ViewContainerRef, ViewEncapsulation,OnInit } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LoginWindow } from './login.component';
import { overlayConfigFactory } from "angular2-modal";
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Router } from '@angular/router';

import { AuthService }from'../service/auth.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers:[AuthService]
})

export class HeaderComponent implements OnInit {

    loggedIn:boolean = false;

    constructor(vcRef: ViewContainerRef, public modal: Modal,private auth:AuthService,private router:Router) {
        modal.overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
        this.loggedIn = this.auth.loggedIn();
    }

    loginPopup() {
        // this.modal.alert()
        //     .title('Hello World')
        //     .body('In Angular 2')
        //     .open();
        this.modal.open(LoginWindow, overlayConfigFactory({ isBlocking: false }, BSModalContext));
    }

    logout() {
        this.auth.logout();
    }

    profile() {
        this.router.navigate(['/profile']);
    }
}
