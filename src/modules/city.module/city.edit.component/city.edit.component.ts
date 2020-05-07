import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CitiesService} from '../shared/services/citiesService';
import {StatesService} from '../../state.module/shared/services/statesService';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {CityResponse} from '../shared/entities/city.response';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
import {StateResponse} from '../../state.module/shared/entities/state.response';
import {CityRequest} from '../shared/entities/city.request';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';
import {BranchesServices} from '../../branch.module/shared/services/branch.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-city-edit',
  templateUrl: './city.edit.component.html',
  styleUrls: ['./city.edit.component.css']
})
export class CityEditComponent implements OnInit {
  cityForm: FormGroup;
  success: boolean;
  error: boolean;
  countries: CountryResponse[];
  branches: BranchResponse[];
  states: StateResponse[];
  cities: CityResponse[];
  currentCityId: number;

  constructor(private tokenVerificator: TokenVerificator,
              private countriesService: CountriesService,
              private statesService: StatesService,
              private citiesService: CitiesService,
              private branchesService: BranchesServices,
              private currentRoute: ActivatedRoute,
              private router: Router) {
    tokenVerificator.verifyTokenValidity();

    this.cityForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      stateId: new FormControl(null, Validators.required),
      countryId: new FormControl(null, Validators.required),
      branchId: new FormControl(null, Validators.required)
    });

    this.countriesService.getAllCountries().subscribe(response => {
      this.countries = response;
    });

    this.branchesService.getAllBranches().subscribe(response => {
      this.branches = response;
    });
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(routeResponse => {
      this.citiesService.findCityById(routeResponse.id).subscribe(cityResponse => {

        this.cityForm
          .patchValue({name: cityResponse.name,
            branchId: cityResponse.branchId,
            countryId: cityResponse.countryId,
          });

        this.onCountrySelection()

        this.cityForm
          .patchValue({name: cityResponse.name, stateId: cityResponse.stateId });

        this.currentCityId = cityResponse.id;

      }, error => {
        this.router.navigate(['/home', 'cities']);
      });
    })
  }

  onCountrySelection() {
    this.statesService.getAllStates().subscribe(response => {
      this.states = response
        .filter(x => x.countryId === parseInt(this.cityForm.value.countryId, 10));
    });
  }

  submitForm() {
    const cityData = new CityRequest(this.cityForm.value.name,
      parseInt(this.cityForm.value.stateId, 10),
      parseInt(this.cityForm.value.branchId, 10));

    this.citiesService.updateCity(this.currentCityId, cityData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.cityForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
