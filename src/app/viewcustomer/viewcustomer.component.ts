import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { customer } from 'src/models/customer';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  constructor() { }
  @Input() customers: customer[] = [];
  @Output() deleteItem = new EventEmitter<number>();
  @Output() updateItem = new EventEmitter<number>();
  ngOnInit(): void {
    console.log(JSON.stringify(this.customers));
  }
  delete(custId: number) {
    this.deleteItem.emit(custId);
  }
  update(custId: number) {
    this.updateItem.emit(custId);
  }

}
