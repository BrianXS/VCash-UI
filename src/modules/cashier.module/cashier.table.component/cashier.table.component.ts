import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CashierResponse} from '../shared/entities/cashier.response';
import {CashiersService} from '../shared/services/cashiers.service';

@Component({
  selector: 'app-branch-table',
  templateUrl: './cashier.table.component.html',
  styleUrls: ['./cashier.table.component.css']
})
export class CashierTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  vehicles: CashierResponse[];

  constructor(private tokenVerificator: TokenVerificator, private vehiclesService: CashiersService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.vehiclesService.getAllVehicles().subscribe(response => {
      this.vehicles = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.vehiclesService.deleteVehicleById(id).subscribe(response => {
      this.vehiclesService.getAllVehicles().subscribe(response => {
        this.vehicles = response;
      });
    });
  }
}
