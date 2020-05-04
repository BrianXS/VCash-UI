import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {StatesService} from '../shared/services/statesService';
import {StateRequest} from '../shared/entities/state.request';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {SelectType} from "../../app.module/shared/entities/select.type";
import {Select2OptionData} from "ng-select2";
import {Observable} from "rxjs";
declare var jQuery: any;


@Component({
  selector: 'app-state-form',
  templateUrl: './state.form.component.html',
  styleUrls: ['./state.form.component.css']
})
export class StateFormComponent implements OnInit {
  stateForm: FormGroup;
  countries: Observable<Array<Select2OptionData>>;
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

    this.countries = this.countriesService.getAllCountries().pipe();

    /*this.countriesService.getAllCountries().subscribe(response => {
      response.forEach(item => {
        this.countries
          .push(new SelectType(null, null, null, String(item.id), item.name));

        jQuery("#country-selector").select2({
          data: this.countries
        });
      });
    }); */

    //setInterval(() => {console.log(this.countryId)}, 1000);
  }

  submitForm() {
    const stateData = new StateRequest(this.stateForm.value.name, parseInt(this.stateForm.value.countryId));

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
