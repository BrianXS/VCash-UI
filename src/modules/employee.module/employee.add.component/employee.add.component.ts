import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {EmployeesService} from '../shared/services/employees.service';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle.add.component.html',
  styleUrls: ['./vehicle.add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private employeesService: EmployeesService,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
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

    this.branchesService.getAllBranches().subscribe(branchesResponse => {
      this.branches = branchesResponse;
    });

    this.businessUnits = this.enumToArray.convert(BusinessUnit);
    this.vehicleType  = this.enumToArray.convert(VehicleType);
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

    this.vehiclesService.createVehicle(vehicleData).subscribe(vehicleResponse => {
      this.success = true;
      this.error = false;
      this.vehicleForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
