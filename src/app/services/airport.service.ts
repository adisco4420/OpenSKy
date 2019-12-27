import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  constructor() { }

  airportList = [
    {
      name: 'Atlanta International Airport',
      icao: 'KATL',
      img: 'https://www.riconvention.org/sites/default/files/Atlanta-Hartsfield-Jackson-Atlanta-International-Airport-at-Sunset-with-Planes.jpg',
    },
    {
      name: 'New York International Airport',
      icao: 'KLGA',
      img: 'https://304ljw4amcep3ali496xph6b-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/LaGuardia-Airport-New-Terminal-B-Dusk-Rendering-1900-1600x1069.jpg',
    },
    {
      name: 'Amsterdam Airport',
      icao: 'EHAM',
      img: 'https://www.airport-suppliers.com/wp-content/uploads/2017/09/Schipol-airport-news-.jpg',
    },
    {
      name: 'London Airport',
      icao: 'EGLL',
      img: 'https://blog.tortugabackpacks.com/wp-content/uploads/2019/10/London-header.jpg',
    },
    {
      name: 'Tokyo Airport',
      icao: 'RJCC',
      img: 'https://media.timeout.com/images/102935442/750/422/image.jpg',
    },
    {
      name: 'Paris Airport',
      icao: 'LFPG',
      img: 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/12/26/colin-pa-26.jpg',
    },
    {
      name: 'Dubia Airport',
      icao: 'OMAA',
      img: 'https://www.logisticsmiddleeast.com/sites/default/files/logme/styles/full_img/public/images/2019/05/30/dubai-international.png?itok=sawz4P9v',
    },
    {
      name: 'Moscow Airport',
      icao: 'UUEE',
      img: 'https://www.moscovery.com/wp-content/uploads/2015/02/header-1-1158x516-1.jpg',
    },
    {
      name: 'Shanghai Airport',
      icao: 'ZSPD',
      img: 'https://www.shanghai-airport.com/images/shanghai-pudong-airport-at-night.jpg',
    },
    {
      name: 'Frankfurt International Airport',
      icao: 'EDDF',
      img: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/deicing-plane-at-frankfurt-airport.png',
    },
  ];

  fetchAirports(): Observable<any> {
    const airportObs = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.airportList);
      }, 1000);
    });
    return airportObs;
  }

}
