import {HttpClient} from '@angular/common/http';
import {StateRequest} from '../entities/state.request';
import {StateResponse} from '../entities/state.response';
import {Injectable} from '@angular/core';

@Injectable()
export class StatesService {
  constructor(private http: HttpClient) {
  }

  getAllStates() {
    return this.http.get<StateResponse[]>('states');
  }

  findStateById(id: number) {
    return this.http.get<StateResponse>(`states/${id}`);
  }

  createState(stateData: StateRequest) {
    return this.http.post<StateResponse>(`states`, stateData);
  }

  updateState(id: number, stateData: StateRequest) {
    return this.http.put<StateResponse>(`states/${id}`, stateData);
  }

  deleteStateById(id: number) {
    return this.http.delete(`states/${id}`);
  }
}
