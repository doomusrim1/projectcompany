import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebeal',
  templateUrl: './rebeal.component.html',
  styleUrls: ['./rebeal.component.scss']
})
export class RebealComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
