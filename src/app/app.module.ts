import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from '@agm/core';

// Services
import { MapsService } from './services/maps.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEOPnot9XXEG_6El5PCtzNfWMOjq7BDwc'
    })
  ],
  providers: [
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
