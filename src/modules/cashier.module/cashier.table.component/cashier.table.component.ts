import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CashierResponse} from '../shared/entities/cashier.response';
import {CashiersService} from '../shared/services/cashiers.service';

@Component({
  selector: 'app-cashier-table',
  templateUrl: './cashier.table.component.html',
  styleUrls: ['./cashier.table.component.css']
})
export class CashierTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  cashiers: CashierResponse[];

  constructor(private tokenVerificator: TokenVerificator, private cashiersService: CashiersService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.cashiersService.getAllCashiers().subscribe(response => {
      this.cashiers = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteCashier(id: number): void {
    this.cashiersService.deleteCashierById(id).subscribe(response => {
      this.cashiersService.getAllCashiers().subscribe(response => {
        this.cashiers = response;
      });
    });
  }
}
