import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { customer } from 'src/models/customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor() { }
  customerDetails: customer = new customer();
  @Output() newItemEvent = new EventEmitter<customer>();
  ngOnInit(): void {
  }
  submit() {
    console.log(JSON.stringify(this.customerDetails));
    this.addNewItem(this.customerDetails);
  }
  addNewItem(value: customer) {
    this.newItemEvent.emit(value);
  }
  checkData() {
    if (!!this.customerDetails.emailId && !!this.customerDetails.firstName && !!this.customerDetails.lastName && !!this.customerDetails.roles) {
      return false;
    } else {
      return true;
    }
  }
}
