import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {OfficeResponse} from '../shared/entities/vehicle.response';
import {OfficeService} from '../shared/services/vehicles.service';

@Component({
  selector: 'app-branch-table',
  templateUrl: './vehicle.table.component.html',
  styleUrls: ['./vehicle.table.component.css']
})
export class OfficeTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  vehicles: OfficeResponse[];

  constructor(private tokenVerificator: TokenVerificator, private vehiclesService: OfficeService) {
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
