import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {AuthService} from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'modal-content',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginWindow {
    private email : String;
    private password : String;
    private autoLogin : boolean = false;
    //filter: boolean= false;

    constructor(public dialog: DialogRef<BSModalContext>,router:Router,private auth:AuthService) {
        // this.dialog.context.dialogClass = 'modal-centered';
    }
/*
    filterData(){
        this.filter = !this.filter;// this will change value of it true and false 
        console.log(this.filter);
    }
    */

    onLogin() {
        this.auth.login(this.email,this.password,this.autoLogin);
    }
}
