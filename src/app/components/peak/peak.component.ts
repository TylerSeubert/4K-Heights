import { Component, OnInit, Input } from '@angular/core';
import { Peak } from '../../services/peaks/peak';
import { PeakService } from '../../services/peaks/peak.service';

@Component({
  selector: 'app-peak',
  templateUrl: './peak.component.html',
  styleUrls: ['./peak.component.css']
})
export class PeakComponent implements OnInit {

  //peak array
  peaks: Peak[];

  selectedPeak: Peak;

  constructor(peakService: PeakService) {

    this.peaks = peakService.getPeaks();

  }

  ngOnInit() {

  }

  onSelect(peak: Peak): void {
    this.selectedPeak = peak;
  }

}
