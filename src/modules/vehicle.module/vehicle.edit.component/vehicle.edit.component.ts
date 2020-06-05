import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {VehicleResponse} from '../shared/entities/vehicle.response';
import {VehiclesService} from '../shared/services/vehicles.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';
import {BranchesServices} from '../../branch.module/shared/services/branch.service';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {BusinessUnit} from '../shared/enums/business.unit';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {VehicleRequest} from '../shared/entities/vehicle.request';
import {VehicleType} from '../shared/enums/vehicle.type';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle.edit.component.html',
  styleUrls: ['./vehicle.edit.component.css']
})
export class VehicleEditComponent implements OnInit {
  businessUnits: CustomSelectItem[] = [];
  vehicleType: CustomSelectItem[] = [];
  branches: BranchResponse[];
  vehicleForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private vehiclesService: VehiclesService,
              private branchesService: BranchesServices,
              private currentRoute: ActivatedRoute,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();

    this.vehicleForm = new FormGroup({
      model: new FormControl(null, Validators.required),
      plate: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      branchId: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      gpsCode: new FormControl(null, Validators.required),
      businessUnit: new FormControl(null, Validators.required),
      vehicleType: new FormControl(null, Validators.required),
      allowedAmmount: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  ngOnInit(): void {
    this.branchesService.getAllBranches().subscribe(branchesResponse => {
      this.branches = branchesResponse;
    });

    this.businessUnits = this.enumToArray.convert(BusinessUnit);
    this.vehicleType  = this.enumToArray.convert(VehicleType);

    this.vehiclesService.findVehicleById(this.currentRoute.snapshot.params.id).subscribe(response => {
      this.vehicleForm.patchValue({
        model: response.model,
        plate: response.plate,
        color: response.color,
        branchId: response.branchId,
        code: response.code,
        gpsCode: response.gpsCode,
        businessUnit: response.businessUnit,
        vehicleType: response.vehicleType,
        allowedAmmount: response.allowedAmmount
      });
    });
  }

  onSubmit() {
    const vehicleData = new VehicleRequest(this.vehicleForm.value.model,
      this.vehicleForm.value.plate,
      this.vehicleForm.value.color,
      this.vehicleForm.value.branchId,
      this.vehicleForm.value.code,
      this.vehicleForm.value.gpsCode,
      this.vehicleForm.value.businessUnit,
      this.vehicleForm.value.vehicleType,
      this.vehicleForm.value.allowedAmmount);

    this.vehiclesService.updateVehicle(this.currentRoute.snapshot.params.id, vehicleData).subscribe(vehicleResponse => {
      this.success = true;
      this.error = false;
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
