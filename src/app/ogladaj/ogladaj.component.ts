import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-ogladaj',
  templateUrl: './ogladaj.component.html',
  styleUrls: ['./ogladaj.component.css']
})
export class OgladajComponent implements OnInit {


    id:number;
    data:object = {};
    ksiazka = [];
    ksiazkaObj:object = {};
    exist = false;
    private headers = new Headers({ 'Content-Type': 'application/json'});

    constructor(private router: Router, private route:ActivatedRoute, private http: Http) { }


    ngOnInit()
    {
        this.route.params.subscribe(
            params =>
            {
                this.id = +params['id'];
            }
        );

        this.http.get("http://localhost:5555/ksiazka").subscribe
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
