import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickOpenMenu(){
    document.getElementById("leftMenu").style.display = "block";
    document.getElementById("leftMenu").style.width = "300px";
  }
  onClickCloseMenu(){
    document.getElementById("leftMenu").style.display = "none";
    
  }
}
