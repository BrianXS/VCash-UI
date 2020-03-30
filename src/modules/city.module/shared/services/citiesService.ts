import {HttpClient} from '@angular/common/http';
import {CityRequest} from '../entities/city.request';
import {CityResponse} from '../entities/city.response';
import {Injectable} from '@angular/core';

@Injectable()
export class CitiesService {
  constructor(private http: HttpClient) {
  }

  getAllCities() {
    return this.http.get<CityResponse[]>('cities');
  }

  findCityById(id: number) {
    return this.http.get<CityResponse>(`cities/${id}`);
  }

  createCity(cityData: CityRequest) {
    return this.http.post<CityResponse>(`cities`, cityData);
  }

  updateCity(id: number, cityData: CityRequest) {
    return this.http.put<CityResponse>(`cities/${id}`, cityData);
  }

  deleteCityById(id: number) {
    return this.http.delete(`cities/${id}`);
  }
}
