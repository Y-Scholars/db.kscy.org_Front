import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LoginWindow } from './login.component';
import { overlayConfigFactory } from "angular2-modal";
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { AuthService }from'../service/auth.service';

import { SignupService } from '../service/signupService';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers:[AuthService]
})

export class HeaderComponent {

    loggedIn:boolean = false;

    constructor(vcRef: ViewContainerRef, public modal: Modal, private _signupService: SignupService,private auth:AuthService) {
        modal.overlay.defaultViewContainer = vcRef;
        this.loggedIn = auth.loggedIn();
    }

    loginPopup() {
        // this.modal.alert()
        //     .title('Hello World')
        //     .body('In Angular 2')
        //     .open();
        this.modal.open(LoginWindow, overlayConfigFactory({ isBlocking: false }, BSModalContext));
        // this._signupService.signUp();
    }

    logout() {
        this.auth.logout();
    }
}
