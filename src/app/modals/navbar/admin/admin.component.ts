import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
