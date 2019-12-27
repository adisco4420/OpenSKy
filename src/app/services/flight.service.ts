import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightData = new BehaviorSubject<any>('');
  baseUrl = 'https://demo:demo@opensky-network.org/api';
  todayDate = Math.round(new Date().getTime() / 1000);

  time = 'begin=1517227200&end=1517230800';
  constructor(private http: HttpClient) { }
  fetchArrivalFlight(icao, time?) {
    return this.http.get(`${this.baseUrl}/flights/arrival?airport=${icao}&${this.time}`);
  }
  fetchDepFlight(icao, time?) {
    return this.http.get(`${this.baseUrl}/flights/departure?airport=${icao}&${this.time}`);
  }
  fechFlightByAirCraft(airport) {
    return this.http.get(`${this.baseUrl}/aircraft?icao24=${airport}&${this.time}`);
  }
  getLastTst(minute = 100) {
    const date = new Date();
    const lastMinute =  Math.round(date.setMinutes(date.getMinutes() - Number(minute)) / 1000);
    console.log(`begin=${lastMinute}&end=${this.todayDate}`);
    console.log(this.time);
    return `begin=${lastMinute}&end=${this.todayDate}`;
  }
}

