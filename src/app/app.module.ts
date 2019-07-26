import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutDivComponent } from './components/about-div/about-div.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSliderComponent } from './components/list-slider/list-slider.component';
import { PeakTrackerSliderComponent } from './components/peak-tracker-slider/peak-tracker-slider.component';
import { PeakListComponent } from './components/peak-list/peak-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MyListSliderComponent } from './components/my-list-slider/my-list-slider.component';
import { PeakTrackerViewComponent } from './components/peak-tracker-view/peak-tracker-view.component';
import { PeakDetailComponent } from './components/peak-detail/peak-detail.component';
import { PeakComponent } from './components/peak/peak.component';
import { FormsModule } from '@angular/forms';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyListDetailComponent } from './components/my-list-detail/my-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutDivComponent,
    ListSliderComponent,
    PeakTrackerSliderComponent,
    PeakListComponent,
    MyListSliderComponent,
    PeakTrackerViewComponent,
    PeakDetailComponent,
    PeakComponent,
    MyListComponent,
    MyListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
