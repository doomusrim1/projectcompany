import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-car-name-all',
  templateUrl: './admin-car-name-all.component.html',
  styleUrls: ['./admin-car-name-all.component.scss']
})
export class AdminCarNameAllComponent implements OnInit {

  config: any;
  collection = { count: 25, data: [] };

  constructor() { 

    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 101,
          value: "... " + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

   }
   pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
  }

}
