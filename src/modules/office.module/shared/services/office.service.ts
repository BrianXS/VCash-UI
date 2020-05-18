import {HttpClient} from '@angular/common/http';
import {OfficeRequest} from '../entities/office.request';
import {OfficeResponse} from '../entities/office.response';
import {Injectable} from '@angular/core';

@Injectable()
export class OfficeService {
  constructor(private http: HttpClient) {
  }

  getAllOffices() {
    return this.http.get<OfficeResponse[]>('offices');
  }

  findOfficeById(id: number) {
    return this.http.get<OfficeResponse>(`offices/${id}`);
  }

  createOffice(officeData: OfficeRequest) {
    return this.http.post<OfficeResponse>(`offices`, officeData);
  }

  updateOffice(id: number, officeData: OfficeRequest) {
    return this.http.put<OfficeResponse>(`offices/${id}`, officeData);
  }

  deleteOfficeById(id: number) {
    return this.http.delete(`offices/${id}`);
  }
}
