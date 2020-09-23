import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-addmoney',
  templateUrl: './sale-addmoney.component.html',
  styleUrls: ['./sale-addmoney.component.scss']
})
export class SaleAddmoneyComponent implements OnInit {
  round:string = "อาหาร"
  code:number = 54451445;
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
