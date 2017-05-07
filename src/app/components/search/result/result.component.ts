import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchOneService } from '../../service/search-one.service';

@Component({
  selector: 'result-component',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searching:SearchOneService) { }

  ngOnInit() {
    let key = this.route.snapshot.url[0].path;
    console.log(key);
    var res = this.searching.searchOne(key)
      .subscribe(
        res => {
        let obj = JSON.parse(res);

        console.log(obj);
        }
      );
  }

}
