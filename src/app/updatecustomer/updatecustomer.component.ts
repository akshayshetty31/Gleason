import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { customer } from 'src/models/customer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  @Input() customerDetails: customer = new customer();
  @Input() custList: customer[] = [];

  @Output() updateItemEvent = new EventEmitter<customer>();

  constructor() {

  }

  ngOnInit(): void {
    console.log('customer in update', this.customerDetails);
    console.log('cust list in update comp', this.custList);
  }
  submit() {
    console.log('submit click ', JSON.stringify(this.customerDetails));
    console.log('submit click list ', JSON.stringify(this.custList));
    let index = this.custList.findIndex(x => x.custId == this.customerDetails.custId);
    // console.log(index);
    // this.custList[index].custId = this.customerDetails.custId;
    // this.custList[index].emailId = this.customerDetails.emailId;
    // this.custList[index].firstName = this.customerDetails.firstName;
    // this.custList[index].lastName = this.customerDetails.lastName;
    // this.custList[index].roles = this.customerDetails.roles;
    // console.log('after update', this.custList);

    this.updateNewItem(this.customerDetails);
  }
  updateNewItem(value: customer) {
    this.updateItemEvent.emit(value);
  }
  checkData() {
    if (!!this.customerDetails.emailId && !!this.customerDetails.firstName && !!this.customerDetails.lastName && !!this.customerDetails.roles) {
      return false;
    } else {
      return true;
    }
  }
}
