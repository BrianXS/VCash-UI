import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../shared/services/statesService';
import {StateRequest} from '../shared/entities/state.request';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
import {CountriesService} from '../../country.module/shared/services/countries.service';
declare var jQuery: any;


@Component({
  selector: 'app-state-form',
  templateUrl: './state.form.component.html',
  styleUrls: ['./state.form.component.css']
})
export class StateFormComponent implements OnInit {
  stateForm: FormGroup;
  countries: CountryResponse[];
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private statesService: StatesService,
              private countriesService: CountriesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(response => {
      this.countries = response;
    });

    this.stateForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      countryId: new FormControl(1, Validators.required)
    });
  }

  submitForm() {
    const stateData = new StateRequest(this.stateForm.value.name, this.stateForm.value.countryId);

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
