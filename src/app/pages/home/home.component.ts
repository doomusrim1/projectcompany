import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username:string;
  password:number;


  constructor(public router:Router) {
    
    
   }
   onclickPage(){
    if(this.username == 'user' && this.password == 1234){
            this.router.navigate(['/user/money']);
    }
    if(this.username == 'admin' && this.password == 1234){
      this.router.navigate(['/admin/admin/admin-money']);
}
  }
  ngOnInit(): void {
  }

  


}
