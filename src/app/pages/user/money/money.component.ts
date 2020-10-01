import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/models/Employee.modal';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {
  employee:Employee[];
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
    return this.dataService.getMonney()
    .subscribe(data => this.employee = data);
  }


}
