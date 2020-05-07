import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {CityResponse} from '../shared/entities/city.response';
import {CitiesService} from '../shared/services/citiesService';

@Component({
  selector: 'app-city-table',
  templateUrl: './city.table.component.html',
  styleUrls: ['./city.table.component.css']
})
export class CityTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  cities: CityResponse[];

  constructor(private tokenVerificator: TokenVerificator, private citiesService: CitiesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.citiesService.getAllCities().subscribe(response => {
      this.cities = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteCity(id: number): void {
    this.citiesService.deleteCityById(id).subscribe(success => {
      this.citiesService.getAllCities().subscribe(response => {
        this.cities = response;
      });
    });
  }
}
