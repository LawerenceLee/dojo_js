import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake-disp',
  templateUrl: './cake-disp.component.html',
  styleUrls: ['./cake-disp.component.css']
})
export class CakeDispComponent implements OnInit {
  @Input() cakeToShow: any; 
  constructor() { }

  ngOnInit() {
  }


}
