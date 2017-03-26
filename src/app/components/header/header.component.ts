import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LoginWindow } from './login.component';
import { overlayConfigFactory } from "angular2-modal";
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { SignupService } from '../signupService';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(vcRef: ViewContainerRef, public modal: Modal, private _signupService: SignupService) {
        modal.overlay.defaultViewContainer = vcRef;
    }

    loginPopup() {
        // this.modal.alert()
        //     .title('Hello World')
        //     .body('In Angular 2')
        //     .open();
        this.modal.open(LoginWindow, overlayConfigFactory({ isBlocking: false }, BSModalContext));
        // this._signupService.signUp();
    }
}
