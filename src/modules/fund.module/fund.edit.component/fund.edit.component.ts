import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CustomersService} from '../../customer.module/shared/services/customers.service';
import {OfficeService} from '../../office.module/shared/services/office.service';
import {CustomerResponse} from '../../customer.module/shared/entities/customer.response';
import {OfficeResponse} from '../../office.module/shared/entities/office.response';
import {FundRequest} from '../shared/entities/fund.request';
import {FundService} from '../shared/services/fund.service';

@Component({
  selector: 'app-fund-edit',
  templateUrl: './fund.edit.component.html',
  styleUrls: ['./fund.edit.component.css']
})
export class FundEditComponent implements OnInit {
  fundForm: FormGroup;
  success: boolean;
  error: boolean;
  customers: CustomerResponse[];
  offices: OfficeResponse[];

  constructor(private tokenVerificator: TokenVerificator,
              private officesService: OfficeService,
              private customersService: CustomersService,
              private fundService: FundService) {
  }

  ngOnInit(): void {
    this.fundForm = new FormGroup({
      fundId: new FormControl(null, Validators.required),
      customerId: new FormControl(null, Validators.required)
    });

    this.customersService.getAllCustomers().subscribe(response => {
      this.customers = response;
    });
  }

  onCustomerChange(evt) {
    if (evt == null) {
      this.offices = [];
      this.fundForm.patchValue({fundId: null});
    } else {
      this.fundService.findAllFundsByCustomerId(evt.id).subscribe(response => {
        this.offices = response;
      });
    }
  }

  submitForm() {
    const fundData = new FundRequest(this.fundForm.value.customerId, this.fundForm.value.fundId);

    this.fundService.createFund(fundData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.fundForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
