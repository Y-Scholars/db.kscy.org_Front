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
    school : String;
    phone : String;
    gender : String;

    ngOnInit() {
        this.auth.getProfile().subscribe(
            res => {
                console.log("Response : " + JSON.stringify(res));
                this.name = res.name;
                this.school = res.school;
                this.phone = res.phone_number;
                if(res.gender == "male") {
                    this.gender = "남자";
                }
                else {
                    this.gender = "여자";
                }
            },

            error => {
                //alert(error.text());
                console.log(error.text());
            }
            );
    }
}