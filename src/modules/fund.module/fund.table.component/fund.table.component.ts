import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {FundResponse} from '../shared/entities/fund.response';
import {FundService} from '../shared/services/fund.service';

@Component({
  selector: 'app-branch-table',
  templateUrl: './fund.table.component.html',
  styleUrls: ['./fund.table.component.css']
})
export class FundTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  funds: FundResponse[];

  constructor(private tokenVerificator: TokenVerificator, private fundService: FundService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.fundService.getAllFunds().subscribe(response => {
      this.funds = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(customerId: number, officeId: number): void {
    this.fundService.deleteFundById(customerId, officeId).subscribe(response => {
      this.fundService.getAllFunds().subscribe(fundResponse => {
        this.funds = fundResponse;
      });
    });
  }
}
