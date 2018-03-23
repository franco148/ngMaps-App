import { Component } from '@angular/core';

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
}
//-17.370407, -66.146319
