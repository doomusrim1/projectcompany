import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-money',
  templateUrl: './view-money.component.html',
  styleUrls: ['./view-money.component.scss']
})
export class ViewMoneyComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
