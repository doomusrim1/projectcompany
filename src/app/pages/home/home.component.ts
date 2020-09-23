import { Component,  OnInit,  } from '@angular/core';
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
     if(this.username  && this.password   ){
    if(this.username == 'user' && this.password == 1234){  
      alert('สำเร็จ');
      this.router.navigate(['/user/money']);   
    }
    if(this.username == 'admin' && this.password == 1234){
      alert('สำเร็จ');
      this.router.navigate(['/admin-money']);
}
  }else{
    alert('ไม่สำเร็จ');
  }
}
  ngOnInit(): void {
  }

  


}
