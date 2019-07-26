import { Component, OnInit } from '@angular/core';
import {MyListManagerService} from '../../services/myListManager/my-list-manager.service'

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  completedPeaksTitle = "Completed Peaks:";

  //variable to hold local storage object.
  peakObjects: Object[];
  selectedPeak: Object;

  constructor(managerService:MyListManagerService) {
    if(managerService.checkStorage()){
      managerService.returnPeaks();
    }
    else{
      console.log("No Peaks listed!");
      this.completedPeaksTitle = "No Peaks Entered";
    }
    /*
    let myStorage = window.localStorage;
    if(myStorage.getItem("myPeaks")){
      let myPeaks = JSON.parse(myStorage.getItem("myPeaks"));
      this.peakObjects = myPeaks;
    }
    else{
      this.completedPeaksTitle = "No Peaks Documented!";

    }
    */
   }

  ngOnInit() {
  }

  onSelect(peak: Object): void {
    this.selectedPeak = peak;
  }
}
