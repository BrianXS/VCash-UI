import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {AtmResponse} from '../shared/entities/atm.response';
import {AtmService} from '../shared/services/atm.service';

@Component({
  selector: 'app-atm-table',
  templateUrl: './atm.table.component.html',
  styleUrls: ['./atm.table.component.css']
})
export class AtmTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  atms: AtmResponse[];

  constructor(private tokenVerificator: TokenVerificator, private vehiclesService: AtmService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.vehiclesService.getAllATMs().subscribe(response => {
      this.atms = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.vehiclesService.deleteATMById(id).subscribe(response => {
      this.vehiclesService.getAllATMs().subscribe(response => {
        this.atms = response;
      });
    });
  }
}
