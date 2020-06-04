import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {CustomersService} from './shared/services/customers.service';
import {CustomerTableComponent} from './customer.table.component/customer.table.component';
import {CustomerAddComponent} from './customer.add.component/customer.add.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CustomerEditComponent} from './customer.edit.component/customer.edit.component';

@NgModule({
  declarations: [
    CustomerTableComponent,
    CustomerAddComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [CustomersService]
})
export class CustomerModule {
}
