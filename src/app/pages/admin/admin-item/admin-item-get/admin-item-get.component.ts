import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-item-get',
  templateUrl: './admin-item-get.component.html',
  styleUrls: ['./admin-item-get.component.scss']
})
export class AdminItemGetComponent implements OnInit {

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
