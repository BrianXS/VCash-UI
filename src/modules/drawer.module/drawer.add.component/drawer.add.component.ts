import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {DrawerService} from '../shared/services/drawer.service';
import {DenominationService} from '../../denomination.module/shared/services/denomination.service';
import {DenominationResponse} from '../../denomination.module/shared/entities/denomination.response';
import {DrawerRequest} from '../shared/entities/drawer.request';
import {Currency} from '../../drawer.range.module/shared/enums/currency';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {DrawerType} from '../shared/enums/drawer.type';
import {DrawerFunction} from '../shared/enums/drawer.function';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {DrawerRangeService} from '../../drawer.range.module/shared/services/drawer.range.service';
import {DrawerRangeResponse} from '../../drawer.range.module/shared/entities/drawer.range.response';

@Component({
  selector: 'app-drawer-add',
  templateUrl: './drawer.add.component.html',
  styleUrls: ['./drawer.add.component.css']
})
export class DrawerAddComponent implements OnInit {
  denominations: DenominationResponse[];
  drawerRanges: DrawerRangeResponse[];
  drawerFunctions: CustomSelectItem[];
  drawerTypes: CustomSelectItem[];
  drawerForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private denominationsService: DenominationService,
              private drawerRangesService: DrawerRangeService,
              private drawersService: DrawerService,
              private enumToArray: EnumToArray) {
  }

  ngOnInit(): void {
    this.drawerForm = new FormGroup({
      maxValue: new FormControl(null, Validators.required),
      defaultQuantity: new FormControl(null, Validators.required),
      drawerType: new FormControl(null, Validators.required),
      drawerFunction: new FormControl(null, Validators.required),
      drawerRangeId: new FormControl(null, Validators.required),
      denominationTypeId: new FormControl(null, Validators.required)
    });

    this.drawerRangesService.getAllDrawers().subscribe(response => {
      this.drawerRanges = response;
    });

    this.drawerFunctions = this.enumToArray.convert(DrawerFunction);
    this.drawerTypes = this.enumToArray.convert(DrawerType);
  }

  onRangeChange(evt) {
    this.denominationsService.findDenominationByCurrency(evt.currency).subscribe(response => {
      this.denominations = response;
    });
  }

  submitForm() {
    const drawerData = new DrawerRequest(parseFloat(this.drawerForm.value.maxValue),
      parseInt(this.drawerForm.value.defaultQuantity, 10),
      this.drawerForm.value.drawerType,
      this.drawerForm.value.drawerFunction,
      this.drawerForm.value.drawerRangeId,
      this.drawerForm.value.denominationTypeId
    );

    console.log(drawerData);

    this.drawersService.createDrawer(drawerData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.drawerForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
