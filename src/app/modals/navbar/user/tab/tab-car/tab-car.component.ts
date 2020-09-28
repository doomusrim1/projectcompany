import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-car',
  templateUrl: './tab-car.component.html',
  styleUrls: ['./tab-car.component.scss']
})
export class TabCarComponent implements OnInit {
  getClass(){
    return "item-border"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
