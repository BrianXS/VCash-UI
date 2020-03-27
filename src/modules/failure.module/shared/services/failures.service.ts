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
    return this.http.get<FailureResponse[]>('http://localhost:3000/failures/');
  }

  findFailureById() { }

  AddFailure(failureData: FailureRequest): Observable<any> {
    return this.http.post('http://localhost:3000/failures/', failureData);
  }

  editFailure() { }
  deleteFailure() { }
}
