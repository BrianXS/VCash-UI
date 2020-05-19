import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {CustomersService} from './shared/services/customers.service';
import {CustomerTableComponent} from './customer.table.component/customer.table.component';

@NgModule({
  declarations: [
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [CustomersService]
})
export class CustomerModule {
}
