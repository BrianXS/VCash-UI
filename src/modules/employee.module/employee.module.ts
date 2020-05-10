import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {EmployeeTableComponent} from './employee.table.component/employee.table.component';
import {EmployeesService} from './shared/services/employees.service';

@NgModule({
  declarations: [
    EmployeeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [EmployeesService]
})
export class EmployeeModule {
}
