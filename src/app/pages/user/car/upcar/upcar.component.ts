import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcar',
  templateUrl: './upcar.component.html',
  styleUrls: ['./upcar.component.scss']
})
export class UpcarComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
