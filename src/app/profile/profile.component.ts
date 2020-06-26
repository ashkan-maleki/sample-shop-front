import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ngOnInit() {
  }
  // Lat: 35.70024391500173 Lng: 51.3446044921875
  lat = 35.70024;
  lng = 51.34460;
  selectedMarker;
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 35.70024, lng: 51.45778, alpha: 1 },
    // { lat: 7.92658, lng: -12.05228, alpha: 1 },
    // { lat: 48.75606, lng: -118.859, alpha: 1 },
    // { lat: 5.19334, lng: -67.03352, alpha: 1 },
    // { lat: 12.09407, lng: 26.31618, alpha: 1 },
    // { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    if (this.markers.length == 1) {
      let marker =  this.markers[0];
      marker.lat = lat;
      marker.lng = lng;
    }
    else {
      this.markers.push({ lat, lng, alpha: 1 });
    }

  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

}
