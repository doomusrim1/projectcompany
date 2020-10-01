import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reitem',
  templateUrl: './reitem.component.html',
  styleUrls: ['./reitem.component.scss']
})
export class ReitemComponent implements OnInit {
  getClass(){
    return "link"
  }
  code:string = "54451445";
  name:string = "สมใจ มีสุข";

  constructor() {}


  ngOnInit(): void {
  }

}
