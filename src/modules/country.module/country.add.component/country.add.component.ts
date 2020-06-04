import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CountriesService} from '../shared/services/countries.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryRequest} from '../shared/entities/country.request';

@Component({
  selector: 'app-country-add',
  templateUrl: './country.add.component.html',
  styleUrls: ['./country.add.component.css']
})
export class CountryAddComponent implements OnInit {
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
