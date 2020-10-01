import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-car-give-all',
  templateUrl: './admin-car-give-all.component.html',
  styleUrls: ['./admin-car-give-all.component.scss']
})
export class AdminCarGiveAllComponent implements OnInit {

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
