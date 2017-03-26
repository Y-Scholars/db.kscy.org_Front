import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'modal-content',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})

export class LoginWindow {
    constructor(public dialog: DialogRef<BSModalContext>) {
        // this.dialog.context.dialogClass = 'modal-centered';
    }
}
