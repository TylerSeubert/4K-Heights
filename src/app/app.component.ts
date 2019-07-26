import { Component, HostBinding } from '@angular/core';
import {trigger, state, style, animate, transition, query, animateChild, group} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slider', [
      state('hidden', style({
        visibility: 'hidden',
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        visibility: 'visible',
        transform: 'translateX(0%)'
      })),
      transition('hidden => visible', [
        animate('300ms')
      ]),
      transition('visible => hidden', [
        animate('300ms')
      ])
    ]),//end of slider trigger
    trigger('verticleSlider', [
      state('hidden', style({
        visibility: 'hidden',
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        visibility: 'visible',
        transform: 'translateX(0%)'
      })),
      transition('hidden => visible', [
        animate('300ms')
      ]),
      transition('visible => hidden', [
        animate('300ms')
      ])
    ]), // end of verticleSlider trigger
  ] //end of animations  
}) 

export class AppComponent {

  //properties
  title: string = "4k heights";
  slideAbout:boolean = false;
  slideList:boolean = false;
  slideMyList:boolean = false;
  slidePeakTracker:boolean = false;

  slideAboutDiv(){
    this.slideAbout = !this.slideAbout;
  }
  slideListDiv(){
    this.slideList = !this.slideList;
  }
  myListSlider(){
    this.slideMyList = !this.slideMyList;
  }
  slidePeakTrackerDiv(){
    this.slidePeakTracker = !this.slidePeakTracker;
  }
}
