import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
