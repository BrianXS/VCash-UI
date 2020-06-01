import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DenominationResponse} from '../entities/denomination.response';
import {DenominationRequest} from '../entities/denomination.request';
import {Currency} from '../../../drawer.range.module/shared/enums/currency';

@Injectable()
export class DenominationService {
  constructor(private http: HttpClient) { }

  getAllDenominations() {
    return this.http.get<DenominationResponse[]>('denominationtypes');
  }

  findDenominationById(id: number) {
    return this.http.get<DenominationResponse>(`denominationtypes/${id}`);
  }

  findDenominationByCurrency(currency: Currency) {
    return this.http.get<DenominationResponse[]>(`denominationtypes/currency/${currency}`);
  }

  createDenomination(denomination: DenominationRequest) {
    return this.http.post('denominationtypes/', denomination);
  }

  updateDenomination(id: number, denomination: DenominationRequest) {
    return this.http.put(`denominationtypes/${id}`, denomination);
  }

  deleteDenominationById(id: number) {
    return this.http.delete(`denominationtypes/${id}`);
  }
}
