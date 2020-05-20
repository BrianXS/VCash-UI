import {HttpClient} from '@angular/common/http';
import {BatteryRequest} from '../entities/battery.request';
import {BatteryResponse} from '../entities/battery.response';
import {Injectable} from '@angular/core';

@Injectable()
export class BatteryService {
  constructor(private http: HttpClient) {
  }

  getAllBatteries() {
    return this.http.get<BatteryResponse[]>('atmbatteries');
  }

  findBatteryById(id: number) {
    return this.http.get<BatteryResponse>(`atmbatteries/${id}`);
  }

  createBattery(vehicleData: BatteryRequest) {
    return this.http.post<BatteryResponse>(`atmbatteries`, vehicleData);
  }

  updateBattery(id: number, vehicleData: BatteryRequest) {
    return this.http.put<BatteryResponse>(`atmbatteries/${id}`, vehicleData);
  }

  deleteBatteryById(id: number) {
    return this.http.delete(`atmbatteries/${id}`);
  }
}
