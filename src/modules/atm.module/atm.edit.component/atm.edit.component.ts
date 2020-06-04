import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {AtmService} from '../shared/services/atm.service';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {Brand} from '../shared/enums/brand';
import {Mode} from '../shared/enums/mode';
import {OfficeService} from '../../office.module/shared/services/office.service';
import {BatteryService} from '../../battery.module/shared/services/battery.service';
import {DrawerRangeService} from '../../drawer.range.module/shared/services/drawer.range.service';
import {OfficeResponse} from '../../office.module/shared/entities/office.response';
import {BatteryResponse} from '../../battery.module/shared/entities/battery.response';
import {DrawerRangeResponse} from '../../drawer.range.module/shared/entities/drawer.range.response';
import {AtmRequest} from '../shared/entities/atm.request';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-atm-edit',
  templateUrl: './atm.edit.component.html',
  styleUrls: ['./atm.edit.component.css']
})
export class AtmEditComponent implements OnInit {
  drawerRanges: DrawerRangeResponse[];
  batteries: BatteryResponse[];
  offices: OfficeResponse[];
  brand: CustomSelectItem[];
  mode: CustomSelectItem[];
  atmForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private atmService: AtmService,
              private officeService: OfficeService,
              private batteryService: BatteryService,
              private drawerRangeService: DrawerRangeService,
              private currentRoute: ActivatedRoute,
              private enumToArray: EnumToArray) {
    this.tokenVerificator.verifyTokenValidity();

    this.atmForm = new FormGroup({
      localizationCode: new FormControl(null, Validators.required),
      emergency: new FormControl(null, Validators.required),
      maxValue: new FormControl(null, [Validators.required, Validators.min(0)]),
      brand: new FormControl(null, Validators.required),
      mode: new FormControl(null, Validators.required),
      from: new FormControl(null, Validators.required),
      officeId: new FormControl(null, Validators.required),
      atmBatteryId: new FormControl(null, Validators.required),
      drawerRangeId: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.atmService.findATMById(this.currentRoute.snapshot.params.id).subscribe(response => {
      this.atmForm.patchValue({
        localizationCode: response.localizationCode,
        emergency: response.emergency,
        maxValue: response.maxValue,
        brand: response.brand,
        mode: response.mode,
        from: response.from,
        officeId: response.officeId,
        atmBatteryId: response.atmBatteryId,
        drawerRangeId: response.drawerRangeId
      });
    });

    this.officeService.getAllOffices().subscribe(response => {
      this.offices = response;
    });

    this.batteryService.getAllBatteries().subscribe(response => {
      this.batteries = response;
    });

    this.drawerRangeService.getAllDrawers().subscribe(response => {
      this.drawerRanges = response;
    });

    this.brand = this.enumToArray.convert(Brand);
    this.mode = this.enumToArray.convert(Mode);
  }

  submitForm() {
    const atmData = new AtmRequest(this.atmForm.value.localizationCode,
      this.atmForm.value.emergency,
      this.atmForm.value.maxValue,
      this.atmForm.value.brand,
      this.atmForm.value.mode,
      this.atmForm.value.from,
      this.atmForm.value.officeId,
      this.atmForm.value.atmBatteryId,
      this.atmForm.value.drawerRangeId
    );

    this.atmService.updateATM(this.currentRoute.snapshot.params.id, atmData).subscribe(response => {
      this.success = true;
      this.error = false;
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
