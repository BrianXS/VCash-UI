import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CashiersService} from '../shared/services/cashiers.service';
import {CashierResponse} from '../shared/entities/cashier.response';
import {CashierRequest} from '../shared/entities/cashier.request';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {EnumToArray} from "../../app.module/shared/services/enum.to.array";
import {CustomersService} from "../../customer.module/shared/services/customers.service";
import {CustomerResponse} from "../../customer.module/shared/entities/customer.response";
import {PersonalDocumentType} from "../shared/enums/personal.document.type";

@Component({
  selector: 'app-cashier-add',
  templateUrl: './cashier.add.component.html',
  styleUrls: ['./cashier.add.component.css']
})
export class CashierAddComponent implements OnInit {
  documentTypes: CustomSelectItem[] = [];
  customers: CustomerResponse[] = []
  cashierForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private cashiersService: CashiersService,
              private customersService: CustomersService,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.cashierForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      documentType: new FormControl(null, Validators.required),
      document: new FormControl(null, Validators.required),
      customerId: new FormControl(null, Validators.required)
    });

    this.documentTypes = this.enumToArray.convert(PersonalDocumentType);

    this.customersService.getAllCustomers().subscribe(response => {
      this.customers = response;
    });
  }

  submitForm() {
    const cashierData = new CashierRequest(this.cashierForm.value.fullName,
      this.cashierForm.value.documentType,
      this.cashierForm.value.document,
      this.cashierForm.value.customerId,
    );

    this.cashiersService.createCashier(cashierData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.cashierForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
