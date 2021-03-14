import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/models/customer';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  route: ActivatedRoute;
  isView = false;
  selectedCust: customer = new customer();
  isUpdate = false;
  constructor(
    routeC: ActivatedRoute, private client: CommonServiceService
  ) {
    this.route = routeC;
  }
  loggedInUser: any = '';
  customerList: customer[] = [];
  isAdd = false;
  ngOnInit(): void {
    this.loggedInUser = this.route.snapshot.paramMap.get('name')?.toString().toUpperCase();
    //Hardcoding customers
    // let cust: customer = new customer();
    // cust.custId = 1;
    // cust.emailId = 'akshay@gmail.com';
    // cust.firstName = 'Akshay';
    // cust.lastName = 'Shetty';
    // cust.roles = ['Dev', 'Test'];
    // this.customerList.push(cust);
  }
  view() {
    if (!this.isView) {
      this.isView = true;
    }
    this.client.getCustomers().subscribe(res => {
      this.customerList = res;
    })
  }
  add() {
    if (!this.isAdd) {
      this.isAdd = true;
      this.isUpdate = false;
    }
  }
  delete(custId: number) {
    this.client.deleteCustomer(custId).subscribe(res => this.customerList = res);
    //this.customerList = this.customerList.filter(x => x.custId != custId);
  }
  update(i: number) {
    let cust: customer = new customer();

    console.log('cust in dahsboard update meth', this.customerList);
    this.selectedCust = new customer();
    this.selectedCust.custId = this.customerList[i].custId;
    this.selectedCust.emailId = this.customerList[i].emailId;
    this.selectedCust.firstName = this.customerList[i].firstName;
    this.selectedCust.lastName = this.customerList[i].lastName;
    this.selectedCust.roles = this.customerList[i].roles;
    console.log('cust list after update click', this.customerList)
    this.isUpdate = true;
    this.isAdd = false;
  }
  updateList(cust: customer) {
    //this.customerList = cust;
    this.client.updateCustomer(cust).subscribe(res => {
      this.customerList = res;
      this.isUpdate = false;
    })
    //console.log('cust list final', cust);

  }
  addItem(cust: customer) {

    // if (this.customerList.length > 0) {
    //   cust.custId = this.customerList[this.customerList.length - 1].custId + 1;
    // } else {
    //   cust.custId = 1;
    // }
    this.client.addCustomer(cust).subscribe(res => {
      this.customerList = res;
      this.isAdd = false;
    }
    )
    // this.customerList.push(cust);
    // console.log('cust list after add', this.customerList);
    // this.isAdd = false;
  }
}
