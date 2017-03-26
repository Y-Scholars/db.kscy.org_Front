import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LoginWindow, LoginWindowData } from './login.component';
import { overlayConfigFactory } from "angular2-modal";
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(vcRef: ViewContainerRef, public modal: Modal) {
        modal.overlay.defaultViewContainer = vcRef;
    }

    loginPopup() {
        // this.modal.alert()
        //     .title('Hello World')
        //     .body('In Angular 2')
        //     .open();
        this.modal.open(LoginWindow, overlayConfigFactory({ isBlocking: false }, BSModalContext));
    }
}