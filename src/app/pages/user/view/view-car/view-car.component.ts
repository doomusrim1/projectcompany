import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.scss']
})
export class ViewCarComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
