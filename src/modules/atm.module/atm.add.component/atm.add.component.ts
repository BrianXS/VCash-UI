import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {AtmService} from "../shared/services/atm.service";
import {EnumToArray} from "../../app.module/shared/services/enum.to.array";
import {CustomSelectItem} from "../../app.module/shared/entities/custom.select.item";
import {Brand} from "../shared/enums/brand";
import {Mode} from "../shared/enums/mode";
import {OfficeService} from "../../office.module/shared/services/office.service";
import {BatteryService} from "../../battery.module/shared/services/battery.service";
import {DrawerService} from "../../drawer.module/shared/services/drawer.service";
import {DrawerRangeService} from "../../drawer.range.module/shared/services/drawer.range.service";
import {OfficeResponse} from "../../office.module/shared/entities/office.response";
import {BatteryResponse} from "../../battery.module/shared/entities/battery.response";
import {DrawerRangeResponse} from "../../drawer.range.module/shared/entities/drawer.range.response";
import {AtmRequest} from "../shared/entities/atm.request";

@Component({
  selector: 'app-battery-form',
  templateUrl: './atm.add.component.html',
  styleUrls: ['./atm.add.component.css']
})
export class AtmAddComponent implements OnInit {
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
              private enumToArray: EnumToArray) {
  }

  ngOnInit(): void {
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

    this.atmService.createATM(atmData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.atmForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
