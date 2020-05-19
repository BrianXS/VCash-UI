import {HttpClient} from '@angular/common/http';
import {VehicleRequest} from '../entities/vehicle.request';
import {VehicleResponse} from '../entities/vehicle.response';
import {Injectable} from '@angular/core';

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {
  }

  getAllVehicles() {
    return this.http.get<VehicleResponse[]>('customers');
  }

  findVehicleById(id: number) {
    return this.http.get<VehicleResponse>(`vehicles/${id}`);
  }

  createVehicle(vehicleData: VehicleRequest) {
    return this.http.post<VehicleResponse>(`vehicles`, vehicleData);
  }

  updateVehicle(id: number, vehicleData: VehicleRequest) {
    return this.http.put<VehicleResponse>(`vehicles/${id}`, vehicleData);
  }

  deleteVehicleById(id: number) {
    return this.http.delete(`vehicles/${id}`);
  }
}
