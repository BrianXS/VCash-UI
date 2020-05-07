import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FailureRequest} from '../entities/failure.request';
import {FailureResponse} from '../entities/failure.response';
import {Observable} from 'rxjs';

@Injectable()
export class FailuresService {
  constructor(private http: HttpClient) {
  }

  getAllFailures() {
    return this.http.get<FailureResponse[]>('failures/');
  }

  findFailureById(id: number) {
    return this.http.get<FailureResponse>(`failures/${id}`);
  }

  addFailure(failureData: FailureRequest) {
    return this.http.post('failures/', failureData);
  }

  editFailure(id: number, failureData: FailureRequest) {
    return this.http.put<FailureResponse>(`failures/${id}`, failureData);
  }
  deleteFailure(id: number) {
    return this.http.delete(`failures/${id}`);
  }
}
