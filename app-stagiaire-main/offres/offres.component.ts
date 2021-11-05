import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  home:any;

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get('http://localhost:3000/home').subscribe(data => {
      console.log(data);
      this.home = data
    })
  }

}