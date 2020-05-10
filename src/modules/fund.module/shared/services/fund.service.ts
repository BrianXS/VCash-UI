import {HttpClient} from '@angular/common/http';
import {FundRequest} from '../entities/fund.request';
import {FundResponse} from '../entities/fund.response';
import {Injectable} from '@angular/core';

@Injectable()
export class FundService {
  constructor(private http: HttpClient) {
  }

  getAllFunds() {
    return this.http.get<FundResponse[]>('funds');
  }

  findFundById(customerId: number, officeId: number) {
    return this.http.get<FundResponse>(`customerfunds/${customerId}/${officeId}`);
  }

  createFund(fundData: FundRequest) {
    return this.http.post<FundResponse>(`customerfunds`, fundData);
  }

  updateFund(customerId: number, officeId: number, fundData: FundRequest) {
    return this.http.put<FundResponse>(`customerfunds/${customerId}/${officeId}`, fundData);
  }

  deleteFundById(customerId: number, officeId: number) {
    return this.http.delete(`customerfunds/${customerId}/${officeId}`);
  }
}
