import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginService } from '../service/loginService';
import { Router } from '@angular/router';

@Component({
    selector: 'modal-content',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',
    providers:[LoginService]
})

export class LoginWindow {
    private email : String;
    private password : String;

    failed = false;
    constructor(public dialog: DialogRef<BSModalContext>,router:Router,private _loginService:LoginService) {
        // this.dialog.context.dialogClass = 'modal-centered';
    }
    onLogin() {
        this.email = (<HTMLInputElement>document.getElementById("email")).value;
        this.password = (<HTMLInputElement>document.getElementById("password")).value;
        this._loginService.login(this.email,this.password);
    }
}
