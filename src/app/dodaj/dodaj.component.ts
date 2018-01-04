import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  constructor(private http:Http) { }
  confirmationString:string = "Dodano nową ksiązkę";
  isAdded: boolean = false;

  ksiazkaObj: object = [];

  dodajKsiazke = function(ksiazka)
  {
    this.ksiazkaObj = {
      "tytul": ksiazka.tytul
    }

    this.http.post("http://localhost:55555/ksiazka",this.ksiazkaObj).subscribe((res:Response) =>{
     this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}
