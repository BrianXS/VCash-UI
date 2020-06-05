import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {CustomersService} from '../shared/services/customers.service';
import {CorporateDocumentType} from '../shared/enums/corporateDocumentType';
import {CitiesService} from '../../city.module/shared/services/citiesService';
import {CityResponse} from '../../city.module/shared/entities/city.response';
import {CustomerResponse} from '../shared/entities/customer.response';
import {CustomerRequest} from '../shared/entities/customer.request';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer.edit.component.html',
  styleUrls: ['./customer.edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  documentType: CustomSelectItem[] = [];
  customers: CustomerResponse[];
  customerForm: FormGroup;
  cities: CityResponse[];
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private customersService: CustomersService,
              private citiesService: CitiesService,
              private currentRoute: ActivatedRoute,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();

    this.customerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      corporateName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      website: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      documentType: new FormControl(null, Validators.required),
      document: new FormControl(null, Validators.required),
      headquartersId: new FormControl(null, Validators.required),
      invocingCityId: new FormControl(null, Validators.required),
      firstKeyPerson: new FormControl(null, Validators.required),
      firstKeyPersonTitle: new FormControl(null, Validators.required),
      secondKeyPerson: new FormControl(null, Validators.required),
      secondKeyPersonTitle: new FormControl(null, Validators.required),
      subClient: new FormControl(null),
      parentClient: new FormControl(null),
    });
  }

  ngOnInit(): void {

    this.citiesService.getAllCities().subscribe(citiesResponse => {
      this.cities = citiesResponse;
    });

    this.documentType = this.enumToArray.convert(CorporateDocumentType);

  }

  onSubmit() {
    const customerData = new CustomerRequest(this.customerForm.value.name,
      this.customerForm.value.corporateName,
      this.customerForm.value.address,
      this.customerForm.value.website,
      this.customerForm.value.phone,
      this.customerForm.value.documentType,
      this.customerForm.value.document,
      this.customerForm.value.headquartersId,
      this.customerForm.value.invocingCityId,
      this.customerForm.value.firstKeyPerson,
      this.customerForm.value.firstKeyPersonTitle,
      this.customerForm.value.secondKeyPerson,
      this.customerForm.value.secondKeyPersonTitle,
      this.customerForm.value.subClient,
      this.customerForm.value.parentClient === undefined ? null : this.customerForm.value.parentClient
    );

    this.customersService.createCustomer(customerData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.customerForm.reset();
    }, error => {
      console.log(error);
      this.success = false;
      this.error = true;
    });
  }

  onSubClient(evt) {
    if (evt.id) {
      this.customersService.getAllCustomers().subscribe(customersResponse => {
       this.customers = customersResponse;
     });
    } else {
      this.customers = [];
    }
  }
}
