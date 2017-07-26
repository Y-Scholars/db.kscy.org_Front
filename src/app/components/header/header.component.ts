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
        this.modal.open(LoginWindow, overlayConfigFactory({ isBlocking: false }, BSModalContext));
        //alert("제 8회 KSCY 시작으로 공식적으로 서비스될 예정입니다. 문의사항은 office@kscy.kr 로 보내주세요.");
    }

    logout() {
        this.auth.logout();
    }

    profile() {
        if(this.auth.loggedIn()) {
            this.auth.getProfile();
            this.router.navigate(['/profile']);
        }
        else {
            alert("로그인을 해주세요.");
        } 
    }

    home() {
        this.router.navigate(['/']);
    }
}
