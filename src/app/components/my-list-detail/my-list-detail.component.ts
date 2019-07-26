import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-list-detail',
  templateUrl: './my-list-detail.component.html',
  styleUrls: ['./my-list-detail.component.css']
})
export class MyListDetailComponent implements OnInit {

  @Input() peak: Object; 

  constructor() { 
    
  }

  ngOnInit() {
  }

}
