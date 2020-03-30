import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CountryResponse} from '../shared/entities/country.response';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CountriesService} from '../shared/services/countries.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryRequest} from '../shared/entities/country.request';

@Component({
  selector: 'app-country-form',
  templateUrl: './country.form.component.html',
  styleUrls: ['./country.form.component.css']
})
export class CountryFormComponent implements OnInit {
  countryForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator, private countriesService: CountriesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.countryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required)
    });
  }

  submitForm() {
    const countryData = new CountryRequest(this.countryForm.value.name, this.countryForm.value.code);
    this.countriesService.createCountry(countryData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.countryForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
