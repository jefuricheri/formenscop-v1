import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home:any;

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get('http://localhost:3000/home').subscribe(data => {
      console.log(data);
      this.home = data
    })
  }
  
}
