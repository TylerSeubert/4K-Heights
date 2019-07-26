import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeakListComponent } from './components/peak-list/peak-list.component';
import {AppComponent} from './app.component'
import { PeakTrackerViewComponent } from './components/peak-tracker-view/peak-tracker-view.component';
import { MyListComponent } from './components/my-list/my-list.component';

const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent },
  { path: 'peakList', component: PeakListComponent },
  { path: 'peakTracker', component: PeakTrackerViewComponent },
  { path: 'myList', component: MyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
