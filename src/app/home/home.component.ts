import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }

  id:number;
  ksiazka = [];

  private headers = new Headers({ 'Content-Type': 'application/json'});


  fetchData = function()
    {
      this.http.get("http://localhost:5555/ksiazka").subscribe
      (
        (res: Response) =>
        {
          this.ksiazka = res.json();
        }
      )
    };

  usun = function(id) {
      if (confirm("Czy na pewno chcesz usunąć?")) {
          const url = `${"http://localhost:5555/ksiazka"}/${id}`;
          return this.http.delete(url, {headers: this.headers}).toPromise()
              .then(() => {
                  this.fetchData();
              })
      }
  };

  ngOnInit()
  {
    this.fetchData();
  };

}
