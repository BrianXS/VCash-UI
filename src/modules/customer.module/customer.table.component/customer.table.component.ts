import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CustomerResponse} from '../shared/entities/customer.response';
import {CustomersService} from '../shared/services/customers.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer.table.component.html',
  styleUrls: ['./customer.table.component.css']
})
export class CustomerTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  customers: CustomerResponse[];

  constructor(private tokenVerificator: TokenVerificator, private customersSerivce: CustomersService) {
    tokenVerificator.verifyTokenValidity();
    console.log('beep');
  }

  ngOnInit(): void {
    this.customersSerivce.getAllCustomers().subscribe(customerResponse => {
      this.customers = customerResponse;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.customersSerivce.deleteCustomerById(id).subscribe(deletionResponse => {
      this.customersSerivce.getAllCustomers().subscribe(customerResponse => {
        this.customers = customerResponse;
      });
    });
  }
}
