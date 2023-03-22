import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularDatingApp';
  users:any=null;

  constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.http.get("https://localhost:7172/api/Main").subscribe({
      next:data=>{this.users = data},
    } 
    );
  }

}
