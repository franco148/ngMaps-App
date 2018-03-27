import { Component } from '@angular/core';
import { MapsService } from './services/maps.service';

import { Marker } from './interfaces/marker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lat: number = -17.370407;
  lng: number = -66.146319;
  zoom:number = 18;

  constructor(private _mapService:MapsService) {

  }

  clickOnMap(event) {
    let newMarker:Marker = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      title: "No title",
      draggable: true
    }
    // console.log(event);

    this._mapService.addNewMarker(newMarker);
  }
}
//-17.370407, -66.146319
