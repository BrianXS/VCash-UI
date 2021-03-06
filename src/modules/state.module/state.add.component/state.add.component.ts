import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../shared/services/statesService';
import {StateRequest} from '../shared/entities/state.request';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {CountryResponse} from '../../country.module/shared/entities/country.response';


@Component({
  selector: 'app-state-add',
  templateUrl: './state.add.component.html',
  styleUrls: ['./state.add.component.css']
})
export class StateAddComponent implements OnInit {
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
    this.stateForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      countryId: new FormControl(1, Validators.required)
    });

    this.countriesService.getAllCountries().subscribe(response => {
      this.countries = response;
    });
  }

  submitForm() {
    const stateData = new StateRequest(this.stateForm.value.name,
      parseInt(this.stateForm.value.countryId, 10));

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
