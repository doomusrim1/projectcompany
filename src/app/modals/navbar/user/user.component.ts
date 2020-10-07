import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }
getClass(){
  return "link"
}
  ngOnInit(): void {
  }
  onClickOpenMenu(){
    document.getElementById("leftMenu").style.display = "block";
  }
  onClickCloseMenu(){
    document.getElementById("leftMenu").style.display = "none";
    
  }
}
