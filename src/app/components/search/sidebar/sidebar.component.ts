import { Component, OnInit } from '@angular/core';
import { ResultListComponent } from '../resultlist/resultlist.component';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SideBarComponent implements OnInit {

  search_type : String = "tonghap" ;

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.shared.setActive(this.search_type);
  }

  toBest() {
    this.search_type = "best";
    this.shared.setActive(this.search_type);
  }

  toPres() {
    this.search_type = "pres";
    this.shared.setActive(this.search_type);
  }

  toPlan() {
    this.search_type = "plan";
    this.shared.setActive(this.search_type);
  }

  toExtr() {
    this.search_type = "extr";
    this.shared.setActive(this.search_type);
  }

  toTongHap() {
    this.search_type = "tonghap";
    this.shared.setActive(this.search_type);
  }

}
