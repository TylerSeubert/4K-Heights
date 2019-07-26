import { Component, OnInit } from '@angular/core';
import { Peak } from '../../services/peaks/peak';
import { PeakService } from '../../services/peaks/peak.service';

@Component({
  selector: 'app-peak-list',
  templateUrl: './peak-list.component.html',
  styleUrls: ['./peak-list.component.css']
})
export class PeakListComponent implements OnInit {
  //peak array
  peaks: Peak[];

  selectedPeak: Peak;

  private trails = [];

  constructor(peakService: PeakService) {

    this.peaks = peakService.getPeaks();

    peakService.getTrails().subscribe((data: any[])=>{
      this.trails = data['trails'];
      console.log(this.trails);
      //peakService.checkStorage();
    });
  }

  ngOnInit() {

  }

  onSelect(peak: Peak): void {
    this.selectedPeak = peak;
    console.log(peak.name + peak.lat + " was selected!");
  }

}
