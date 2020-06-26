import { Component, OnInit } from '@angular/core';

import { GoogleMapsAPIWrapper } from '@agm/core'
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {LocationService} from "../location.service";
import {Location} from "../abstract/location";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  addressForm;

  constructor(
    private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    public gMaps: GoogleMapsAPIWrapper,
    public locationService : LocationService
    // private location : Location
  ) {
    this.addressForm = this.formBuilder.group({
      latitude: '',
      longitude: ''
    });
  }

  async onSubmit(inputData) {
    let location : Location = {
      latitude: this.lat.toString(),
      longitude: this.lng.toString()
    } as Location;
    location = await this.locationService.addLocation(location);
  }

  async ngOnInit(): Promise<void> {
    let location =  await this.locationService.getLocation();
    this.lat = +location.latitude;
    this.lng = +location.longitude;
  }
  public markerClicked = (markerObj) => {
    this.gMaps.setCenter({ lat: markerObj.latitude, lng: markerObj.longitude });
    console.log('clicked', markerObj, { lat: markerObj.latitude, lng: markerObj.longitude });
    // const position = new google.maps.LatLng(markerObj.latitude, markerObj.longitude);
    // this.map.panTo(position);
  }
  onOptionsSelected() {
    if (this.selectedCity == 0) {
      return;
    }
    let selectedCityLocation = this.citiesLocation[this.selectedCity - 1];
    this.addMarker(selectedCityLocation.lat, selectedCityLocation.lng);

  }
  selectedCity = 1;
  cityList = [
    {id: 0, name: "شهر خود را انتخاب کنید."},
    {id: 1, name: "تهران"},
    {id: 2, name: "قم"},
    {id: 3, name: "اصفهان"},
  ];

  // Lat: 32.657170119609525 Lng: 51.668044490288366
  citiesLocation = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 35.70024, lng: 51.45778},
    { lat: 34.61355, lng: 50.90306 },
    { lat: 32.65717, lng: 51.66804 },
  ];

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
    this.gMaps.setCenter({ lat: lat, lng: lng });
    this.lat = lat;
    this.lng = lng;
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
