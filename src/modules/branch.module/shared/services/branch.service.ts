import {HttpClient} from '@angular/common/http';
import {BranchRequest} from '../entities/branch.request';
import {BranchResponse} from '../entities/branch.response';
import {Injectable} from '@angular/core';

@Injectable()
export class BranchesServices {
  constructor(private http: HttpClient) {
  }

  getAllBranches() {
    return this.http.get<BranchResponse[]>('branches');
  }

  findBranchById(id: number) {
    return this.http.get<BranchResponse>(`branches/${id}`);
  }

  createBranch(branchData: BranchRequest) {
    return this.http.post<BranchResponse>(`branches`, branchData);
  }

  updateBranch(id: number, branchData: BranchRequest) {
    return this.http.put<BranchResponse>(`branches/${id}`, branchData);
  }

  deleteBranchById(id: number) {
    return this.http.delete(`branches/${id}`);
  }
}
