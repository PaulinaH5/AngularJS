import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpModule} from '@angular/http';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { EdycjaComponent } from './edycja/edycja.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DodajComponent,
    EdycjaComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          {
            path: "",  component: StartComponent
          },
          {
              path: "ogladaj",  component: HomeComponent
          },
          {
            path: "dodaj",  component: DodajComponent
          },
          {
            path: "edycja/:id",  component: EdycjaComponent
          }
          
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
