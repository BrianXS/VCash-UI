import {HttpClient} from '@angular/common/http';
import {AtmRequest} from '../entities/atm.request';
import {AtmResponse} from '../entities/atm.response';
import {Injectable} from '@angular/core';

@Injectable()
export class AtmService {
  constructor(private http: HttpClient) {
  }

  getAllATMs() {
    return this.http.get<AtmResponse[]>('atm');
  }

  findATMById(id: number) {
    return this.http.get<AtmResponse>(`atm/${id}`);
  }

  createATM(atmData: AtmRequest) {
    return this.http.post<AtmResponse>(`atm`, atmData);
  }

  updateATM(id: number, atmData: AtmRequest) {
    return this.http.put<AtmResponse>(`atm/${id}`, atmData);
  }

  deleteATMById(id: number) {
    return this.http.delete(`atm/${id}`);
  }
}
