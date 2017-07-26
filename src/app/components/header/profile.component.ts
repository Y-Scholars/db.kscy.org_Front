import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AuthService }from'../service/auth.service';

@Component({
    selector: 'modal-content',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'
})

export class ProfileWindow implements OnInit {
    constructor(public dialog: DialogRef<BSModalContext>, private auth:AuthService) {
        
    }

    name : String;
    mail : String;

    ngOnInit() {
        this.auth.getProfile().subscribe(
            res => {
                console.log("Response : " + JSON.stringify(res));
                this.name = res.username;
                this.mail = res.email;
            },

            error => {
                //alert(error.text());
                console.log(error.text());
            }
            );
    }
}