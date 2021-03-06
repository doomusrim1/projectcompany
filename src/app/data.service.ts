import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/Employee.modal';
import { Register } from './models/Register.modal';
import { StockItem } from './models/StockItem.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://localhost:44349/api/officemanage/GetAllEmployee';
  apiUrls = 'https://localhost:44349/api/officemanage/GetAllStock';
  apiUrlRegister = 'https://localhost:44349/api/Registers/GetRegister';
  constructor(private http: HttpClient) { }

  getMonney() {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  getStockitem() {
    return this.http.get<StockItem[]>(this.apiUrls);
  }
  getRegister() {
    return this.http.get<Register[]>(this.apiUrlRegister);
  }
}
