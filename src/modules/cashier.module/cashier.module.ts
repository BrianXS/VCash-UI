import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.module/shared/modules/app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {CashierTableComponent} from './cashier.table.component/cashier.table.component';
import {CashiersService} from './shared/services/cashiers.service';

@NgModule({
  declarations: [
    CashierTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [CashiersService]
})
export class CashierModule {
}
