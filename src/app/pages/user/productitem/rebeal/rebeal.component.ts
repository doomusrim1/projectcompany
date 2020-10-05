import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { StockItem } from 'src/app/models/StockItem.modal';

@Component({
  selector: 'app-rebeal',
  templateUrl: './rebeal.component.html',
  styleUrls: ['./rebeal.component.scss']
})
export class RebealComponent implements OnInit {
  stockitem:StockItem[];
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
 

  config: any;
  constructor(private dataService:DataService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }


  ngOnInit() {
    return this.dataService.getStockitem()
    .subscribe(data => this.stockitem = data);
  }


}
