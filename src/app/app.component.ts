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
    this._mapService.loadSavedMarkers();
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

  clickOnMarker(marker: Marker, index:number) {
    console.log('clickOnMarker', marker, index);
  }

  dragEndMarker(marker: Marker, event) {
    // console.log('dragEndMarker', marker, event);

    let newlat = event.coords.lat;
    let newlng = event.coords.lng;

    marker.lat = newlat;
    marker.lng = newlng;

    this._mapService.saveMarkers();
  }
}
//-17.370407, -66.146319
