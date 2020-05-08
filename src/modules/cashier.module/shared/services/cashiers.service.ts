import {HttpClient} from '@angular/common/http';
import {CashierRequest} from '../entities/cashier.request';
import {CashierResponse} from '../entities/cashier.response';
import {Injectable} from '@angular/core';

@Injectable()
export class CashiersService {
  constructor(private http: HttpClient) {
  }

  getAllCashiers() {
    return this.http.get<CashierResponse[]>('cashiers');
  }

  findCashierById(id: number) {
    return this.http.get<CashierResponse>(`cashiers/${id}`);
  }

  createCashier(cashierData: CashierRequest) {
    return this.http.post<CashierResponse>(`cashiers`, cashierData);
  }

  updateCashier(id: number, cashierData: CashierRequest) {
    return this.http.put<CashierResponse>(`cashiers/${id}`, cashierData);
  }

  deleteCashierById(id: number) {
    return this.http.delete(`cashiers/${id}`);
  }
}
