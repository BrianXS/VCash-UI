import {HttpClient} from '@angular/common/http';
import {EmployeeRequest} from '../entities/employee.request';
import {EmployeeResponse} from '../entities/employee.response';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeesService {
  constructor(private http: HttpClient) {
  }

  getAllEmployees() {
    return this.http.get<EmployeeResponse[]>('employees');
  }

  findEmployeeById(id: number) {
    return this.http.get<EmployeeResponse>(`employees/${id}`);
  }

  createEmployee(employeeData: EmployeeRequest) {
    return this.http.post<EmployeeResponse>(`employees`, employeeData);
  }

  updateEmployee(id: number, employeeData: EmployeeRequest) {
    return this.http.put<EmployeeResponse>(`employees/${id}`, employeeData);
  }

  deleteEmployeeById(id: number) {
    return this.http.delete(`employees/${id}`);
  }
}
