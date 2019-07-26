// service for returning trail list and peak list
import { Injectable } from '@angular/core';
import { PEAKS } from './peaks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeakService {

  //properties
  URL: string;
  private trailList = []; 


  constructor(private http: HttpClient){}

  //returns list of peaks from peaks.ts
  getPeaks(){return PEAKS;}

  //makes http call to api and then returns a list of trails
  getTrails(){
    this.URL = "https://www.hikingproject.com/data/get-trails?lat=44.2706&lon=-71.3033&maxDistance=50&maxResults=150&key=200454876-edb5b0506b6b55ecf602fd9582413f18";
    return this.http.get(this.URL);
  }

}
