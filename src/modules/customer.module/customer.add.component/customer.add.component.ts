import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';
import {BranchesServices} from '../../branch.module/shared/services/branch.service';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer.add.component.html',
  styleUrls: ['./customer.add.component.css']
})
export class CustomerAddComponent implements OnInit {
  businessUnits: CustomSelectItem[] = [];
  vehicleType: CustomSelectItem[] = [];
  branches: BranchResponse[];
  vehicleForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private branchesService: BranchesServices,
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
  }

  onSubmit() {

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
