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

  findFailureById() { }

  AddFailure(failureData: FailureRequest): Observable<any> {
    return this.http.post('failures/', failureData);
  }

  editFailure() { }
  deleteFailure() { }
}
