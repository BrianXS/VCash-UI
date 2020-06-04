import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../../state.module/shared/services/statesService';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
import {StateResponse} from '../../state.module/shared/entities/state.response';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';
import {BranchesServices} from '../../branch.module/shared/services/branch.service';
import {BatteryRequest} from '../shared/entities/battery.request';
import {BatteryService} from '../shared/services/battery.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-battery-edit',
  templateUrl: './battery.edit.component.html',
  styleUrls: ['./battery.edit.component.css']
})
export class BatteryEditComponent implements OnInit {
  batteryForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private batteryService: BatteryService,
              private currentRoute: ActivatedRoute) {
    tokenVerificator.verifyTokenValidity();

    this.batteryForm = new FormGroup({
      code: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.batteryService.findBatteryById(this.currentRoute.snapshot.params.id).subscribe( response => {
      this.batteryForm.patchValue({
        code: response.code
      });
    });
  }

  submitForm() {
    const batteryData = new BatteryRequest(this.batteryForm.value.code);

    this.batteryService.updateBattery(this.currentRoute.snapshot.params.id, batteryData).subscribe(response => {
      this.success = true;
      this.error = false;
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
