import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CustomerRequest} from '../entities/customer.request';
import {CustomerResponse} from '../entities/customer.response';

@Injectable()
export class CustomersService {
  constructor(private http: HttpClient) {
  }

  getAllCustomers() {
    return this.http.get<CustomerResponse[]>('customers');
  }

  findCustomerById(id: number) {
    return this.http.get<CustomerResponse>(`customers/${id}`);
  }

  createCustomer(customerData: CustomerRequest) {
    return this.http.post<CustomerResponse>(`customers`, customerData);
  }

  updateCustomer(id: number, customerData: CustomerRequest) {
    return this.http.put<CustomerResponse>(`customers/${id}`, customerData);
  }

  deleteCustomerById(id: number) {
    return this.http.delete(`customers/${id}`);
  }
}
