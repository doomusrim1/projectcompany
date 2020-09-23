import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-downitem',
  templateUrl: './view-downitem.component.html',
  styleUrls: ['./view-downitem.component.scss']
})
export class ViewDownitemComponent implements OnInit {
  code:string = "54451445";
  name:string = "สมใจ มีสุข";
  constructor() { }

  ngOnInit(): void {
  }

}
