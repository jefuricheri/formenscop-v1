import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {

  stagiaires:any;

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get('http://localhost:3000/stagiaire').subscribe(data => {
      console.log(data);
      this.stagiaires = data
    })
  }

}