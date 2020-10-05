import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { StockItem } from 'src/app/models/StockItem.modal';

@Component({
  selector: 'app-modal-dataitem',
  templateUrl: './modal-dataitem.component.html',
  styleUrls: ['./modal-dataitem.component.scss']
})
export class ModalDataitemComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  stockitem:StockItem[];
  constructor(private dataService:DataService) {}
  
  ngOnInit() {
    return this.dataService.getStockitem()
    .subscribe(data => this.stockitem = data);


  }
 

}
