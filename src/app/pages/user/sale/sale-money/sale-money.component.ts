import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-money',
  templateUrl: './sale-money.component.html',
  styleUrls: ['./sale-money.component.scss']
})
export class SaleMoneyComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
