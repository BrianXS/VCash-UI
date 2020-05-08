import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DenominationResponse} from '../entities/denomination.response';
import {DenominationRequest} from '../entities/denomination.request';

@Injectable()
export class DenominationService {
  constructor(private http: HttpClient) { }

  getAllDenominations() {
    return this.http.get<DenominationResponse[]>('denominationtypes');
  }

  findDenominationById(id: number) {
    return this.http.get<DenominationResponse>(`denominationtypes/${id}`);
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
