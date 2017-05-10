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

  research_name : String;
  author : String;
  school : String;
  grade : String;
  year : String;
  pages : String;
  email : String;
  team_num : number;
  type : String;
  fileurl : string;

  ngOnInit() {
    let key = this.route.snapshot.url[0].path;
    console.log(key);
    var res = this.searching.searchOne(key)
      .subscribe(
        res => {
          let obj = JSON.parse(res);

          this.research_name = obj.hits.hits[0]._source.research_name;
          this.author = obj.hits.hits[0]._source.researcher_name;
          this.school = obj.hits.hits[0]._source.org;
          this.grade = obj.hits.hits[0]._source.grade;
          this.year = "2017";
          this.pages = "30";
          this.email = obj.hits.hits[0]._source.email;
          this.team_num = obj.hits.hits[0]._source.team_num;
          this.type = obj.hits.hits[0]._source.type;

          console.log(obj);
        }
      );
  }

  downloadFiles() {
    window.location.href=this.fileurl;
  }

}
