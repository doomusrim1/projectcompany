import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-monney',
  templateUrl: './admin-monney.component.html',
  styleUrls: ['./admin-monney.component.scss']
})
export class AdminMonneyComponent implements OnInit {

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
