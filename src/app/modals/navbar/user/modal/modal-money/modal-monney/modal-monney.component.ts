import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/models/Employee.modal';

@Component({
  selector: 'app-modal-monney',
  templateUrl: './modal-monney.component.html',
  styleUrls: ['./modal-monney.component.scss']
})
export class ModalMonneyComponent implements OnInit {
  employee:Employee[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    return this.dataService.getMonney()
    .subscribe(data => this.employee = data);
  }

}
