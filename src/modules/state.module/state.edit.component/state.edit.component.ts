import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../shared/services/statesService';
import {StateRequest} from '../shared/entities/state.request';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-state-edit',
  templateUrl: './state.edit.component.html',
  styleUrls: ['./state.edit.component.css']
})
export class StateEditComponent implements OnInit {
  stateForm: FormGroup;
  countries: CountryResponse[];
  currentStateId: number;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private statesService: StatesService,
              private countriesService: CountriesService,
              private currentRoute: ActivatedRoute,
              private router: Router) {
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

    this.currentRoute.params.subscribe(response => {
      this.statesService.findStateById(response.id).subscribe(stateResponse => {
        this.stateForm.patchValue({name: stateResponse.name, countryId: stateResponse.countryId})
        this.currentStateId = stateResponse.id;
      }, error => {
        this.router.navigate(['/home', 'states'])
      })
    })
  }

  submitForm() {
    const stateData = new StateRequest(this.stateForm.value.name,
      parseInt(this.stateForm.value.countryId, 10));

    this.statesService.updateState(this.currentStateId, stateData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.stateForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
