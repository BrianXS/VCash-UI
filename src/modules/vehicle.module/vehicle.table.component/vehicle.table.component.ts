import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {VehicleResponse} from '../shared/entities/vehicle.response';
import {VehiclesService} from '../shared/services/vehicles.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle.table.component.html',
  styleUrls: ['./vehicle.table.component.css']
})
export class VehicleTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  vehicles: VehicleResponse[];

  constructor(private tokenVerificator: TokenVerificator, private vehiclesService: VehiclesService) {
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
      this.vehiclesService.getAllVehicles().subscribe(vehicleResponse => {
        this.vehicles = vehicleResponse;
      });
    });
  }
}
