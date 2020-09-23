import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-downcar',
  templateUrl: './view-downcar.component.html',
  styleUrls: ['./view-downcar.component.scss']
})
export class ViewDowncarComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
