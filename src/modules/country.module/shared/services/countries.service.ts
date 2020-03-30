import {HttpClient} from '@angular/common/http';
import {CountryRequest} from '../entities/country.request';
import {CountryResponse} from '../entities/country.response';
import {Injectable} from '@angular/core';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {
  }

  getAllCountries() {
    return this.http.get<CountryResponse[]>('countries');
  }

  findCountryById(id: number) {
    return this.http.get<CountryResponse>(`countries/${id}`);
  }

  createCountry(countryData: CountryRequest) {
    return this.http.post<CountryResponse>(`countries`, countryData);
  }

  updateCountry(id: number, countryData: CountryRequest) {
    return this.http.put<CountryResponse>(`countries/${id}`, countryData);
  }

  deleteCountryById(id: number) {
    return this.http.delete(`countries/${id}`);
  }
}
