import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-edycja',
  templateUrl: './edycja.component.html',
  styleUrls: ['./edycja.component.css']
})
export class EdycjaComponent implements OnInit {

  id:number;
  data:object = {};
  ksiazka = [];
  ksiazkaObj:object = {};
  exist = false;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  
  constructor(private router: Router, private route:ActivatedRoute, private http: Http) { }

  edytujKsiazke(ksiazka)
  {
    this.ksiazkaObj = 
    {
      "tytul": ksiazka.tytul
    };

    const url = `${"http://localhost:5555/ksiazka"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.ksiazkaObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })

  }

  ngOnInit() 
  {
    this.route.params.subscribe(
      params =>
      {
      this.id = +params['id'];
      }
    );

    this.http.get("http://localhost:55555/ksiazka").subscribe
    (
      (res: Response) =>
      {
        this.ksiazka = res.json();
        for(var i = 0 ; i < this.ksiazka.length; i++)
        {
          if(parseInt(this.ksiazka[i].id) === this.id)
          {
            this.exist = true;
            this.data = this.ksiazka[i];
            break;
          }
          else
          {
            this.exist = false;
          }
        }
      }
    )
  }

}
