import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CustomerResponse} from '../shared/entities/customer.response';
import {CustomersService} from '../shared/services/customers.service';

@Component({
  selector: 'app-branch-table',
  templateUrl: './vehicle.table.component.html',
  styleUrls: ['./vehicle.table.component.css']
})
export class CustomerTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  customers: CustomerResponse[];

  constructor(private tokenVerificator: TokenVerificator, private customersSerivce: CustomersService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.customersSerivce.getAllCustomers().subscribe(response => {
      this.customers = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.customersSerivce.deleteCustomerById(id).subscribe(response => {
      this.customersSerivce.getAllCustomers().subscribe(response => {
        this.customers = response;
      });
    });
  }
}
