import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "./abstract/location";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationUrl: string = 'http://127.0.0.1:8000/api/profile/';
  locations: Location[];

  async getLocation(): Promise<Location> {
    return await this.http.get<Location>(this.locationUrl).toPromise();
  }

  async addLocation(location: Location): Promise<Location> {
    location['token'] = this.authService.tokenKey;
    return await this.http.post<Location>(this.locationUrl, location).toPromise();
  }

  constructor(
    private http: HttpClient,
    private authService : AuthService
  ) {
  }
}
