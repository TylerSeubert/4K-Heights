// service for managing local storage
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MyListManagerService {

  myStorage = window.localStorage;
  PeakList = [];
  PeakObject = {}; // will return this object to my-list component
  constructor(){
  }

  //checks if local storage is empty.
  checkStorage(){
    if(this.myStorage.getItem("myPeaks")){
      return true;
    }
    else{
      this.myStorage.setItem("myPeaks", "");
      return false;
    }
  }

  //adds peak object to local storage list. Used by peak-detail component.
  addPeak(peakInfo){
    console.log("inside my list service");
    //variables
    let currentListString;
    let peakObject = peakInfo; 
    let currentObjectList;
    let stringToAdd;
    let listToAdd;

    //if local storage item exists
    if(this.checkStorage()){
      currentListString = this.myStorage.getItem("myPeaks");

      //convert string to object
      currentObjectList = JSON.parse(currentListString);
      //add object to list
      listToAdd = currentObjectList.push(peakObject);
      
      //convert object back to string so we can store it in local storage
      stringToAdd = JSON.stringify(listToAdd);

      //add string to local storage
      this.myStorage.setItem("myPeaks", stringToAdd);
    }
    else{
      stringToAdd = JSON.stringify(peakObject);
      this.myStorage.setItem("myPeaks",stringToAdd);
    }
    
  } // end of addPeak

  //return peakList as an object. Used by my-list component
  returnPeaks(){
    let jsonString = this.myStorage.getItem("myPeaks");
    this.PeakList = this.stringToJson(jsonString);
    return this.PeakList;
  }

  stringToJson(strObject:string){
    let jsonObject = JSON.parse(strObject);
    return jsonObject;
  }
}//end of class definition
