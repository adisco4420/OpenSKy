import { FlightService } from './../services/flight.service';
import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fligt-modal',
  templateUrl: './fligt-modal.component.html',
  styleUrls: ['./fligt-modal.component.css']
})
export class FligtModalComponent implements OnInit {
  errMsg = false;
  selectedMinutes = '60';
  departureList;
  incomigData;
  airportName;
  arrivalList: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private flightSrv: FlightService) {
      const { name, icao } = data.airport;
      this.airportName = name;
      this.getArrival(icao);
      this.getDeparture(icao);
    }

  ngOnInit() {}
  getDeparture(icao) {
    this.flightSrv.fetchDepFlight(icao).subscribe((res: any[]) => {
      this.departureList = res;
    }, () => this.errMsg = true);
  }
  getArrival(icao) {
    this.flightSrv.fetchArrivalFlight(icao).subscribe((res: any[]) => {
      this.arrivalList = res;
    }, () => this.errMsg = true);
  }
  getMinutes(date) {
    const minutes =  new Date(date).getMinutes();
    return `last ${minutes} minutes`;
  }

}
