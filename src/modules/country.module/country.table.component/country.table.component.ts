import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CountryResponse} from '../shared/entities/country.response';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CountriesService} from '../shared/services/countries.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country.table.component.html',
  styleUrls: ['./country.table.component.css']
})
export class CountryTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  countries: CountryResponse[];

  constructor(private tokenVerificator: TokenVerificator, private countriesService: CountriesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(response => {
      this.countries = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
