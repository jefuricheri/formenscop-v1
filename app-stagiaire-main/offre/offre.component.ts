import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {

  offres:any;

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get('http://localhost:3000/offre').subscribe(data => {
      console.log(data);
      this.offres = data
    })
  }
  
}