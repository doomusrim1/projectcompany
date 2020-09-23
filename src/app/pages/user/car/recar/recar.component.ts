import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recar',
  templateUrl: './recar.component.html',
  styleUrls: ['./recar.component.scss']
})
export class RecarComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
