import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {DenominationResponse} from '../shared/entities/denomination.response';
import {DenominationService} from '../shared/services/denomination.service';


@Component({
  selector: 'app-denomination-table',
  templateUrl: './denomination.table.component.html',
  styleUrls: ['./denomination.table.component.css']
})
export class DenominationTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { paging: false, searching: false};
  dtTrigger: Subject<any> = new Subject<any>();
  denominations: DenominationResponse[];

  constructor(private tokenVerificator: TokenVerificator, private denominationService: DenominationService) {
    this.tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.denominationService.getAllDenominations().subscribe(response => {
      this.denominations = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteDenomination(id: number): void {
    this.denominationService.deleteDenominationById(id).subscribe(response => {
      this.denominationService.getAllDenominations().subscribe(denomiationsResponse => {
        this.denominations = denomiationsResponse;
      });
    })
  }
}
