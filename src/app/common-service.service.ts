import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { customer } from 'src/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  header: HttpHeaders = new HttpHeaders();
  constructor(private client: HttpClient) {
    this.header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  }

  login(userName: string, pwd: string) {

    return this.client.get<boolean>("https://localhost:44368/login/get/" + userName + "/" + pwd).pipe(map(res => res));
  }

  getCustomers() {

    return this.client.get<any>("https://localhost:44368/customer/Details/").pipe(map(res => res));
  }

  addCustomer(cust: customer) {

    return this.client.post<any>("https://localhost:44368/customer/Create/", cust).pipe(map(res => res));
  }

  deleteCustomer(id: number) {

    return this.client.get<any>("https://localhost:44368/customer/Delete/" + id).pipe(map(res => res));
  }

  updateCustomer(cust: customer) {

    return this.client.post<any>("https://localhost:44368/customer/Edit/", cust).pipe(map(res => res));
  }
}
