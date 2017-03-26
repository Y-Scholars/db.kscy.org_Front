import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class LoginWindowData extends BSModalContext {
    constructor() {
        super();
    }
}

@Component({
    selector: 'modal-content',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})

export class LoginWindow implements ModalComponent<LoginWindowData> {
    constructor(public dialog: DialogRef<LoginWindowData>) {
    }
}
