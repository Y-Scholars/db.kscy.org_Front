import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchOneService } from '../../service/search-one.service';

@Component({
  selector: 'resultcontents-component',
  templateUrl: './resultcontents.component.html',
  styleUrls: ['./resultcontents.component.css']
})

export class ResultContentsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searching: SearchOneService) { }

  research_name: String;
  author: string[];
  school: String;
  grade: String;
  year: String;
  pages: String;
  email: String;
  team_num: number;
  type: String;
  fileurl: string;
  abstract: String;
  team_id: String;
  authors: String = "";
  size: number;

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
        this.abstract = obj.hits.hits[0]._source.abstract_kor;
        this.team_id = obj.hits.hits[0]._source.team_id;
        //console.log(obj);
        //console.log(this.team_id);
        var val = this.searching.getStudent(this.team_id)
          .subscribe(
          res => {
            //console.log(this.team_id);
            let obj = JSON.parse(res);
            //console.log("hi");
            //console.log(obj);

            for (var i = 0; i < obj.hits.hits.length; i++) {
              //console.log(obj.hits.hits.length);
              this.size = obj.hits.hits.length;
              this.authors += obj.hits.hits[i]._source.researcher_name+" ";
            }
          }
          )
      }
      );



  }

  downloadFiles() {
    window.location.href = this.fileurl;
  }

  getStudents(team_id) {

  }

}
