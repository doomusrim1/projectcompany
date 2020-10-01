import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/Employee.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://localhost:44349/api/officemanage/GetAllEmployee';
  constructor( private http:HttpClient) { }

  getMonney(){
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
