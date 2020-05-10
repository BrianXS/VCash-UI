import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {EmployeeResponse} from '../shared/entities/employee.response';
import {EmployeesService} from '../shared/services/employees.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee.table.component.html',
  styleUrls: ['./employee.table.component.css']
})
export class EmployeeTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  employees: EmployeeResponse[];

  constructor(private tokenVerificator: TokenVerificator, private vehiclesService: EmployeesService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.vehiclesService.getAllEmployees().subscribe(response => {
      this.employees = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteEmployee(id: number): void {
    this.vehiclesService.deleteEmployeeById(id).subscribe(response => {
      this.vehiclesService.getAllEmployees().subscribe(response => {
        this.employees = response;
      });
    });
  }
}
