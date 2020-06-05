import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../shared/services/statesService';
import {StateResponse} from '../shared/entities/state.response';

@Component({
  selector: 'app-state-table',
  templateUrl: './state.table.component.html',
  styleUrls: ['./state.table.component.css']
})
export class StateTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false };
  dtTrigger: Subject<any> = new Subject<any>();
  states: StateResponse[];

  constructor(private tokenVerificator: TokenVerificator, private countriesService: StatesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.countriesService.getAllStates().subscribe(response => {
      this.states = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteState(id: number) {
    this.countriesService.deleteStateById(id).subscribe(success => {
      this.countriesService.getAllStates().subscribe(response => {
        this.states = response;
      });
    });
  }
}
