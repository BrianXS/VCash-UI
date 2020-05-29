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


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer.add.component.html',
  styleUrls: ['./customer.add.component.css']
})
export class CustomerAddComponent implements OnInit {
  documentType: CustomSelectItem[] = [];
  customers: CustomerResponse[];
  customerForm: FormGroup;
  cities: CityResponse[];
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private customersService: CustomersService,
              private citiesService: CitiesService,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
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

    this.citiesService.getAllCities().subscribe(citiesResponse => {
      this.cities = citiesResponse;
    });

    this.documentType = this.enumToArray.convert(CorporateDocumentType);

  }

  onSubmit() {
    // var customerData = new CustomerRequest();
    // this.customerForm.value;
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
