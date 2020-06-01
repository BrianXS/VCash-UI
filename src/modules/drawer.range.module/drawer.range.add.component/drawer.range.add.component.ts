import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {DenominationResponse} from '../../denomination.module/shared/entities/denomination.response';
import {DrawerRangeService} from '../shared/services/drawer.range.service';
import {DrawerRangeRequest} from '../shared/entities/drawer.range.request';
import {CustomersService} from '../../customer.module/shared/services/customers.service';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {Currency} from '../shared/enums/currency';
import {CustomerResponse} from '../../customer.module/shared/entities/customer.response';

@Component({
  selector: 'app-drawer-range-add',
  templateUrl: './drawer.range.add.component.html',
  styleUrls: ['./drawer.range.add.component.css']
})
export class DrawerRangeAddComponent implements OnInit {
  currencies: CustomSelectItem[];
  customers: CustomerResponse[];
  drawerForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private customersService: CustomersService,
              private enumToArray: EnumToArray,
              private drawersService: DrawerRangeService) {
  }

  ngOnInit(): void {
    this.drawerForm = new FormGroup({
      code: new FormControl(null, Validators.required),
      currency: new FormControl(null, Validators.required),
      customerId: new FormControl(null, Validators.required),
    });

    this.customersService.getAllCustomers().subscribe(response => {
      this.customers = response;
    });

    this.currencies = this.enumToArray.convert(Currency);
  }

  submitForm() {
    const drawerData = new DrawerRangeRequest(this.drawerForm.value.code,
      this.drawerForm.value.currency,
      this.drawerForm.value.customerId
    );

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
