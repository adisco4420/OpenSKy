import { FligtModalComponent } from './../fligt-modal/fligt-modal.component';
import { FlightService } from './../services/flight.service';
import { AirportService } from './../services/airport.service';
import { Component, OnInit, } from '@angular/core';
import {MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  airportList = [];
  arrivalList = [{}];
  departureList = [{}];
  dialogRef;
  constructor(
    private airportSrv: AirportService,
    private flightSrv: FlightService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getAirports();
  }
  getAirports() {
    this.airportSrv.fetchAirports().subscribe(res => {
     this.airportList = res;
    });
  }
  open(airport) {
    this.openDialog({
      airport
    });
  }
  openDialog(data) {
    this.dialogRef = this.dialog.open(FligtModalComponent, {
      data,
      width: '480px'
    });
  }

}
