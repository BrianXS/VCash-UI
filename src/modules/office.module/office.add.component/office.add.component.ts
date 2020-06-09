import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {CustomersService} from '../../customer.module/shared/services/customers.service';
import {CustomerResponse} from '../../customer.module/shared/entities/customer.response';
import {OfficeService} from '../shared/services/office.service';
import {Coverage} from '../shared/enums/Coverage';
import {OfficeType} from '../shared/enums/OfficeType';
import {CitiesService} from '../../city.module/shared/services/citiesService';
import {CityResponse} from '../../city.module/shared/entities/city.response';
import {OfficeRequest} from '../shared/entities/office.request';

@Component({
  selector: 'app-office-add',
  templateUrl: './office.add.component.html',
  styleUrls: ['./office.add.component.css']
})
export class OfficeAddComponent implements OnInit {
  officeType: CustomSelectItem[] = [];
  customers: CustomerResponse[] = [];
  cities: CityResponse[] = [];
  coverage: CustomSelectItem[] = [];
  officeForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private officeService: OfficeService,
              private customersService: CustomersService,
              private citiesService: CitiesService,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.officeForm =  new FormGroup({
      customerId: new FormControl(null, Validators.required),
      vatcoCode: new FormControl(null),
      clientCode: new FormControl(null),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      coverage: new FormControl(null, Validators.required),
      officeType: new FormControl(null, Validators.required),
      lat:  new FormControl(null, Validators.required),
      lng:  new FormControl(null, Validators.required),
      from:  new FormControl(null, Validators.required),
      hasKits:  new FormControl(null, Validators.required),
      hasKeys:  new FormControl(null, Validators.required),
      hasEnvelopes:  new FormControl(null, Validators.required),
      hasCheques:  new FormControl(null, Validators.required),
      hasDocuments:  new FormControl(null, Validators.required),
      isFund:  new FormControl(null, Validators.required),
      manager:  new FormControl(null, Validators.required),
      managerDetails:  new FormControl(null, Validators.required),
      managerEmail:  new FormControl(null, Validators.required),
      cityId:  new FormControl(null, Validators.required),
      prefix:  new FormControl(null, Validators.required),
      businessTypeId:  new FormControl(null),
    });

    this.customersService.getAllCustomers().subscribe(response => {
      this.customers = response;
    });

    this.citiesService.getAllCities().subscribe(response => {
      this.cities = response;
    });

    this.coverage = this.enumToArray.convert(Coverage);
    this.officeType = this.enumToArray.convert(OfficeType);
  }

  submitForm() {
    const officeData = new OfficeRequest(this.officeForm.value.customerId,
      this.officeForm.value.vatcoCode,
      this.officeForm.value.clientCode,
      this.officeForm.value.name,
      this.officeForm.value.address,
      this.officeForm.value.phone,
      this.officeForm.value.coverage,
      this.officeForm.value.officeType,
      parseFloat(this.officeForm.value.lat),
      parseFloat(this.officeForm.value.lng),
      this.officeForm.value.from,
      new Date('0001-01-00'),
      this.officeForm.value.hasKits === 'true',
      this.officeForm.value.hasKeys === 'true',
      this.officeForm.value.hasEnvelopes === 'true',
      this.officeForm.value.hasCheques === 'true',
      this.officeForm.value.hasDocuments === 'true',
      this.officeForm.value.isFund === 'true',
      this.officeForm.value.manager,
      this.officeForm.value.managerDetails,
      this.officeForm.value.managerEmail,
      this.officeForm.value.cityId
      );

    this.officeService.createOffice(officeData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.officeForm.reset();
    }, error => {
      console.log(error);
      this.success = false;
      this.error = true;
    });
  }
}
