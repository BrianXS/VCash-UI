import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CitiesService} from '../shared/services/citiesService';
import {StatesService} from '../../state.module/shared/services/statesService';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {CityResponse} from '../shared/entities/city.response';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
import {StateResponse} from '../../state.module/shared/entities/state.response';
import {CityRequest} from '../shared/entities/city.request';
declare var jQuery: any;

@Component({
  selector: 'app-city-form',
  templateUrl: './city.form.component.html',
  styleUrls: ['./city.form.component.css']
})
export class CityFormComponent implements OnInit {
  cityForm: FormGroup;
  success: boolean;
  error: boolean;
  countries: CountryResponse[];
  states: StateResponse[];
  cities: CityResponse[];

  constructor(private tokenVerificator: TokenVerificator,
              private countriesService: CountriesService,
              private statesService: StatesService,
              private citiesService: CitiesService) {
  }

  ngOnInit(): void {
    this.cityForm = new FormGroup({
      name: new FormControl(),
      stateId: new FormControl(),
      countryId: new FormControl()
    });

    this.countriesService.getAllCountries().subscribe(response => {
      this.countries = response;
    });
  }

  onCountrySelection() {
    this.statesService.getAllStates().subscribe(response => {
      this.states = response
        .filter(x => x.countryId === parseInt(this.cityForm.value.countryId, 10));

      jQuery('#stateId').selectpicker('destroy');
      jQuery('#stateId').selectpicker();
    });
  }

  submitForm() {
    const cityData = new CityRequest();
    this.citiesService.createCity(cityData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.cityForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
