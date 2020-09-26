import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reitem',
  templateUrl: './reitem.component.html',
  styleUrls: ['./reitem.component.scss']
})
export class ReitemComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  config: any;
  collection = { count: 25, data: [] };
  constructor() {

    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
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
