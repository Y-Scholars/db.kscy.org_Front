import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {AuthService} from '../service/auth.service';
import {SignupService} from '../service/signup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'modal-content',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',
    providers: [AuthService, SignupService]
})

export class LoginWindow {
    private email : String;
    private password : String;
    private username : String;
    private grade : String;
    private birthday : String;
    private location : String;

    private autoLogin : boolean = false;
    private active : boolean = true;
    //filter: boolean= false;

    constructor(public dialog: DialogRef<BSModalContext>,router:Router,private auth:AuthService, private signup:SignupService) {
        // this.dialog.context.dialogClass = 'modal-centered';
    }
/*
    filterData(){
        this.filter = !this.filter;// this will change value of it true and false
        console.log(this.filter);
    }
    */

    tabClicked() {
        this.active = false;
    }

    tabactive() {
        this.active = true;
    }

    onLogin() {
        this.auth.login(this.email, this.password, this.autoLogin);
    }

    onSignup() {
        this.signup.signUp(this.username, this.email, this.password, this.grade, this.birthday, this.location);
    }
}
