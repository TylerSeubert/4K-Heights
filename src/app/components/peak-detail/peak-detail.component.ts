import { Component, OnInit, Input } from '@angular/core';
import { Peak } from '../../services/peaks/peak';
import { PeakService } from '../../services/peaks/peak.service';
import {MyListManagerService} from '../../services/myListManager/my-list-manager.service';

@Component({
  selector: 'app-peak-detail',
  templateUrl: './peak-detail.component.html',
  styleUrls: ['./peak-detail.component.css']
})
export class PeakDetailComponent implements OnInit {

  myStorage = window.localStorage;
  
  @Input() peak:Peak;
  @Input() hikeDate:string;
  @Input() hikeDescription:string;
  @Input() trail:string;
  
  public trails = [];

  constructor(PeakService: PeakService, private MyListManagerService:MyListManagerService) {
    PeakService.getTrails().subscribe((data: any[])=>{
      this.trails = data['trails'];
    });
  }
  ngOnInit() {
  }

  addPeak(){
    //peak object to store in local storage
    console.log("adding peak in peak-detail");
      var peakInfo = {
      peak: this.peak.name,
      trail: this.trail,    
      description: this.hikeDescription,
      date: this.hikeDate,
      elevation: this.peak.elevation
      }
      console.log(peakInfo);
      this.MyListManagerService.addPeak(peakInfo);

      //check storage and add to storage.
      //this.checkStorage();
      //this.addToStorage(peakInfo);
      this.hikeDate = '';
      this.trail = '';
      this.hikeDescription = '';
  }

  checkStorage(){

    //if this doesn't exist, add to local storage
    if(!this.myStorage.getItem("myPeaks")){
      let myPeaks = [];
      this.myStorage.setItem("myPeaks",JSON.stringify(myPeaks));
    }
  } // end of checkStorage


  //adds peakObject to local storage
  addToStorage(peakInfo){
    let newPeak = peakInfo;
    let jsonString = this.myStorage.getItem("myPeaks");
    let jsonObject = JSON.parse(jsonString);
    jsonObject.push(newPeak);
    this.myStorage.setItem("myPeaks", JSON.stringify(jsonObject));

     //reset all values after storage entry
     this.hikeDate = '';
     this.trail = '';
     this.hikeDescription = '';
  }


} //end of class declaration
