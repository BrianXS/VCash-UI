import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {EmployeeTableComponent} from './employee.table.component/employee.table.component';
import {EmployeesService} from './shared/services/employees.service';
import {EmployeeAddComponent} from './employee.add.component/employee.add.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    EmployeeTableComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [EmployeesService]
})
export class EmployeeModule {
}
