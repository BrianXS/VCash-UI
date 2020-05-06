import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountriesService} from "../shared/services/countries.service";
import {TokenVerificator} from "../../app.module/shared/services/token.verificator";
import {CountryRequest} from "../shared/entities/country.request";
import {ActivatedRoute, Router} from "@angular/router";
import {CountryResponse} from "../shared/entities/country.response";

@Component({
  selector: 'app-country-edit',
  templateUrl: './country.edit.component.html',
  styleUrls: ['./country.edit.component.css']
})
export class CountryEditComponent implements OnInit {
  countryForm: FormGroup;
  currentCountryId: number;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private countriesService: CountriesService,
              private currentRoute: ActivatedRoute,
              private router: Router) {
    tokenVerificator.verifyTokenValidity();

    this.countryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(success => {
      this.currentCountryId = success.id;
      this.countriesService.findCountryById(success.id).subscribe(response => {
        this.countryForm.setValue({name: response.name, code: response.code});
      }, error => {
          this.router.navigate(['/home', 'countries']);
      });
    });
  }

  submitForm(): void {
    const request = new CountryRequest(this.countryForm.value.name, this.countryForm.value.code);
    this.countriesService.updateCountry(this.currentCountryId, request).subscribe( response => {
      this.success = true;
      this.error = false;
    }, error => {
      this.error = true;
      this.success = false;
    });
  }
}
