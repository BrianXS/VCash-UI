import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {BatteryResponse} from '../shared/entities/battery.response';
import {BatteryService} from '../shared/services/battery.service';

@Component({
  selector: 'app-battery-table',
  templateUrl: './battery.table.component.html',
  styleUrls: ['./battery.table.component.css']
})
export class BatteryTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  batteries: BatteryResponse[];

  constructor(private tokenVerificator: TokenVerificator, private batteryService: BatteryService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.batteryService.getAllBatteries().subscribe(batteryResponse => {
      this.batteries = batteryResponse;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.batteryService.deleteBatteryById(id).subscribe(deletionResponse => {
      this.batteryService.getAllBatteries().subscribe(batteryResponse => {
        this.batteries = batteryResponse;
      });
    });
  }
}
