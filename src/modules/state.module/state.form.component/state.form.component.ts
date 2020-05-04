import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../shared/services/statesService';
import {StateRequest} from '../shared/entities/state.request';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {SelectType} from '../../app.module/shared/entities/select.type';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
declare var jQuery: any;


@Component({
  selector: 'app-state-form',
  templateUrl: './state.form.component.html',
  styleUrls: ['./state.form.component.css']
})
export class StateFormComponent implements OnInit {
  stateForm: FormGroup;
  countries: CountryResponse[];
  countryId = '1';
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private statesService: StatesService,
              private countriesService: CountriesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.stateForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      countryId: new FormControl(null, Validators.required)
    });

    this.countriesService.getAllCountries().subscribe(response => {
      this.countries = response;
    });
  }

  submitForm() {
    const stateData = new StateRequest(this.stateForm.value.name, parseInt(this.stateForm.value.countryId, 10));

    this.statesService.createState(stateData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.stateForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
