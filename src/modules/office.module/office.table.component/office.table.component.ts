import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {OfficeResponse} from '../shared/entities/office.response';
import {OfficeService} from '../shared/services/office.service';

@Component({
  selector: 'app-office-table',
  templateUrl: './office.table.component.html',
  styleUrls: ['./office.table.component.css']
})
export class OfficeTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  offices: OfficeResponse[];

  constructor(private tokenVerificator: TokenVerificator, private officeService: OfficeService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.officeService.getAllOffices().subscribe(response => {
      this.offices = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.officeService.deleteOfficeById(id).subscribe(response => {
      this.officeService.getAllOffices().subscribe(response => {
        this.offices = response;
      });
    });
  }
}
