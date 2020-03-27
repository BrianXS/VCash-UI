import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {Router} from '@angular/router';
import {FailuresService} from '../shared/services/failures.service';
import {Subject} from 'rxjs';
import {FailureResponse} from '../shared/entities/failure.response';


@Component({
  selector: 'app-failure-table',
  templateUrl: './failure.table.component.html',
  styleUrls: ['./failure.table.component.css']
})
export class FailureTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { paging: false, searching: false};
  dtTrigger: Subject<any> = new Subject<any>();
  failures: FailureResponse[];

  constructor(private tokenVerificator: TokenVerificator, private failuresService: FailuresService) {
    this.tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.failuresService.getAllFailures().subscribe(response => {
      this.failures = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
