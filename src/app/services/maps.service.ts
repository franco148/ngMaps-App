import { Injectable } from '@angular/core';
import { Marker } from '../interfaces/marker.interface';

@Injectable()
export class MapsService {

  markers:Marker[] = [];

  constructor() {
    let newMarker:Marker = {
      lat: -17.370407,
      lng: -66.146319,
      title: "Fidel Anze park",
      draggable: true
    };

    this.markers.push(newMarker);
  }

  addNewMarker(marker: Marker) {
    this.markers.push(marker);
  }

}
