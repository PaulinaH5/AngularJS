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
      "tytul": ksiazka.tytul,
      "autor": ksiazka.autor,
      "kategoria": ksiazka.kategoria

    };

    this.http.post("http://localhost:5555/ksiazka",this.ksiazkaObj).subscribe((res:Response) =>{
     this.isAdded = true;
    })
  };

  ngOnInit() {
  }

}
